import axios from "axios";
import { emitAuthChanged } from "@shared/utils/authEvents";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

type ReissueTokenData = {
  access_token: string;
  refresh_token?: string;
};

let refreshPromise: Promise<ReissueTokenData> | null = null;

const reissueAccessToken = async (): Promise<ReissueTokenData> => {
  if (refreshPromise) {
    return refreshPromise;
  }

  refreshPromise = (async () => {
    const refreshToken = sessionStorage.getItem("refreshToken");
    if (!refreshToken) throw new Error("No refresh token");

    const { data } = await axios.post(`${BASE_URL}/v1/auth/reissue`, {
      refresh_token: refreshToken,
    });

    const { access_token, refresh_token } = data.data as ReissueTokenData;

    sessionStorage.setItem("accessToken", access_token);
    if (refresh_token) {
      sessionStorage.setItem("refreshToken", refresh_token);
    }
    emitAuthChanged();

    return { access_token, refresh_token };
  })()
    .catch((refreshError) => {
      console.error("Session expired:", refreshError);
      sessionStorage.clear();
      emitAuthChanged();
      window.alert("세션이 만료되었습니다. 다시 로그인해 주세요.");
      window.location.href = "/main";
      throw refreshError;
    })
    .finally(() => {
      refreshPromise = null;
    });

  return refreshPromise;
};

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("accessToken");
    // const token = import.meta.env.VITE_TEST_TOKEN;

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => {
    if (response.data?.error?.code === "C401") {
      return Promise.reject({
        config: response.config,
        response: { ...response, status: 401, config: response.config },
      });
    }

    return response;
  },
  async (error) => {
    const originalRequest = error?.config as
      | (typeof error.config & { _retry?: boolean })
      | undefined;

    const isReissueRequest =
      typeof originalRequest?.url === "string" &&
      originalRequest.url.includes("/v1/auth/reissue");

    if (!originalRequest) {
      return Promise.reject(error);
    }

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      !isReissueRequest
    ) {
      originalRequest._retry = true;

      try {
        const { access_token } = await reissueAccessToken();

        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers.Authorization = `Bearer ${access_token}`;

        return api(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
