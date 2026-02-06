import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = import.meta.env.VITE_TEST_TOKEN;

    if (token) {
      config.headers = config.headers || {};

      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    // 백엔드가 HTTP 상태 코드는 200을 주되, 내부 body에 error code를 담는 경우 체크
    if (response.data?.error?.code === "C401") {
      window.location.href = "/main";
      return Promise.reject(response.data.error);
    }
    return response;
  },
  (error) => {
    // HTTP 상태 코드 자체가 401인 경우
    if (error.response && error.response.status === 401) {
      window.location.href = "/main";
    }
    return Promise.reject(error);
  },
);
