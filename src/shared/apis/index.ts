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
    // const token = import.meta.env.VITE_TEST_TOKEN;
    const token = sessionStorage.getItem("accessToken");

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
    if (response.data?.error?.code === "C401") {
      window.location.href = "/main";

      return Promise.reject(response.data.error);
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "/main";
    }
    return Promise.reject(error);
  },
);
