// absolute path: src/components/services/authApi.ts
import httpClient from "../../services/httpClient";

export const loginApi = async (credentials: {
  username: string;
  password: string;
}) => {
  const response = await httpClient.post("/auth/login", credentials);
  return response.data;
};
