import axios from "axios";

const BASE_URL = "https://api.example.com";

export const api = axios.create({
  baseURL: BASE_URL,
});
