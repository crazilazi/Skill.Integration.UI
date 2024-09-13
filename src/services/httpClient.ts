import axios from "axios";
import { getToken } from "../utils/tokenUtils";

const httpClient = axios.create({
  baseURL: "https://localhost:44307/api",
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // Refresh token logic goes here
    }
    return Promise.reject(error);
  }
);

export default httpClient;
