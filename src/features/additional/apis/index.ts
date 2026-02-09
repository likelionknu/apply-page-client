// @shared/apis/user.ts
import { api } from "@shared/apis";

export const addUserInformation = async (data: {
  name: string;
  depart: string;
  grade: number | null;
  phone: string;
  status: string;
  student_id: string;
}) => {
  const res = await api.patch("/v1/users/me/profile", data);

  console.log("성공 data:", res.data);

  return;
};
