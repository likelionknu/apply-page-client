import { api } from "@shared/apis";

export const getApplyNotices = async () => {
  return api.get("/v1/recruits");
};
