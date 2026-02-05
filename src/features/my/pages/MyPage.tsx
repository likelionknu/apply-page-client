import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ProfileItem } from "@my/types/ProfileItem";
import { deleteUserAccount, getUserProfile, logoutUser } from "@my/apis";
import Header from "@shared/components/Header";
import Footer from "@shared/components/Footer";
import ProfileSection from "../components/profile/ProfileSection";
import ApplyStatusSection from "../components/apply/ApplyStatusSection";
import Modal from "@shared/components/Modal";

type ModalType = "EDIT" | "DELETE_CONFIRM" | "DELETE_SUCCESS" | "ERROR" | null;

function MyPage() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState<ProfileItem | null>({
    email: "",
    name: "",
    depart: "",
    grade: 0,
    phone: "",
    profile_url: "",
    student_id: "",
    status: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>(""); // 모달 에러 메세지
  const [actvieModal, setActvieModal] = useState<ModalType>(null); // 모달 활성화

  useEffect(() => {
    const getData = async () => {
      const { data } = await getUserProfile();

      const apiData = data.data;
      const apiError = data.error;

      if (apiError.code) {
        setErrorMessage(apiError.message);
        setActvieModal("ERROR");
      }
      setProfileData(apiData);
    };

    getData();
  }, []);

  // profileData null이면 메인으로 이동
  useEffect(() => {
    if (!profileData) navigate("/main");
  }, [profileData, navigate]);

  const handleCloseModal = () => {
    setActvieModal(null);
  };

  // 사용자 회원탈퇴
  const handleDeleteUser = async () => {
    const { data } = await deleteUserAccount();
    const apiError = data.error;

    if (apiError.code) {
      setErrorMessage(apiError.message);
      setActvieModal("ERROR");
      console.log(apiError.message);
    }

    setActvieModal("DELETE_CONFIRM");
  };

  const handleDeleteConfirm = () => {
    handleCloseModal();
    navigate("/main");
  };

  // 정보 수정
  // const handleEditProfile

  // 사용자 로그아웃
  const handleLogoutUser = async () => {
    const { data } = await logoutUser();
    const apiError = data.error;

    if (apiError.code) {
      setErrorMessage(apiError.message);
      setActvieModal("ERROR");
      console.log(apiError.message);
    }

    console.log("로그아웃 성공");
    navigate("/main");
  };

  // profileData null이면 렌더링 x
  if (!profileData) return null;

  return (
    <>
      <Header />
      {/* <Modal>나는 모달</Modal> */}
      <main className="text-white1 w-full bg-[#111111] pt-17.5 pb-112">
        <div className="mx-auto flex max-w-360 gap-47.5 px-12">
          <ProfileSection data={profileData} />
          <ApplyStatusSection onLogout={handleLogoutUser} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MyPage;
