// absolute path: src/components/services/authApi.ts
import httpClient from "../../services/httpClient";

//login api call
export const loginApi = async (credentials: {
  username: string;
  password: string;
}) => {
  const response = await httpClient.post("/auth/login", credentials);
  return response.data;
};

//register api call
export const registerApi = async (credentials: {
  username: string;
  password: string;
}) => {
  const response = await httpClient.post("/auth/register", credentials);
  return response.data;
};
