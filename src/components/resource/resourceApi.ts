// absolute path: src/components/services/authApi.ts
import httpClient from "../../services/httpClient";

//get all resources
export const getAllResources = async () => {
  const response = await httpClient.get("/employee");
  console.log(response.data);
  return response;
};
