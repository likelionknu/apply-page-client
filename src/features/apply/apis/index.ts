import { api } from "@shared/apis";

export const getApplyNotices = async () => {
  return api.get("/v1/recruits");
};

export const getApplyAvailability = async (id: string) => {
  return api.get(`/v1/recruits/${id}/availability`);
};
