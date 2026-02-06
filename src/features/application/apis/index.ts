import { api } from "@shared/apis/index";

export const getApplicationQuestions = async (id: number) => {
  const res = await api.get(`/v1/recruits/${id}/questions`);

  return res;
};

export const submitApplicationAnswers = async (payload) => {
  const res = await api.post("/v1/applications", payload);

  return res;
};
