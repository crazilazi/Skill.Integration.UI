// absolute path: src/components/services/authApi.ts
import httpClient from "../../../../services/httpClient"

//get all resources
export const getAllSkills = async () => {
  const response = await httpClient.get("/lightcast/allskills");
  return response;
};

// get resource recommend skills
export const getSkillById = async (id: string) => {
  const response = await httpClient.get(`/lightCast/skills/${id}`);
  return response;
};