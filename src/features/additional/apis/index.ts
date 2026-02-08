import { api } from "@shared/apis";

// 사용자 추가 정보 등록
export const addUserInformation = async (data: {
  name: string;
  depart: string;
  grade: number | null;
  phone: string;
  status: string;
  student_id: string;
}) => {
  const token = sessionStorage.getItem("accessToken");
  console.log(token);

  const res = await api.patch("/v1/users/me/profile", data);
  console.log("성곰함요", res);

  return;
};
