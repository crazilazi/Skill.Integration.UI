import axios from "axios";
import { getToken } from "../utils/tokenUtils";

const apiUrl = process.env.REACT_APP_API_URL;

const httpClient = axios.create({
  baseURL: apiUrl,
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
