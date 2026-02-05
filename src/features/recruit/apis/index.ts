import { api } from "@shared/apis/index";

export const getApplcationQuestions = async (id: number) => {
  const res = await api.get(`/v1/recruits/${id}/questions`);

  return res;
};
