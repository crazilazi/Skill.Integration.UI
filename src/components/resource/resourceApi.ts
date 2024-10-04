// absolute path: src/components/services/authApi.ts
import httpClient from "../../services/httpClient";

//get all resources
export const getAllResources = async () => {
  const response = await httpClient.get("/employee");
  return response;
};

// get resource recommend skills
export const getResourceRecommendSkills = async (id: string) => {
  const response = await httpClient.get(`/SkillRecommendation/recommend/${id}`);
  return response;
};
