import axios from "axios";

type ApiErrorResponse = {
  error?: {
    message?: unknown;
  };
  message?: unknown;
};

export const getApiErrorMessage = (error: unknown, fallback: string): string => {
  if (axios.isAxiosError(error)) {
    const responseData = error.response?.data as ApiErrorResponse | undefined;

    if (typeof responseData?.error?.message === "string") {
      return responseData.error.message;
    }

    if (typeof responseData?.message === "string") {
      return responseData.message;
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallback;
};
