import { api } from "@shared/apis";

// 사용자 정보 조회
export const getUserProfile = async () => {
  const res = await api.get("/v1/users/me/profile");
  return res;
};

// 회원 탈퇴
export const deleteUserAccount = async () => {
  const res = await api.delete("/v1/user/me");
  return res;
};

// 사용자 지원서 조회
export const getUserApplications = async () => {
  const res = await api.get("/v1/applications");
  return res;
};

// 사용자 로그아웃
export const logoutUser = async () => {
  const res = await api.post("/v1/auth/logout");
  return res;
};
