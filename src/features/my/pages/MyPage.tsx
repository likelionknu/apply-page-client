import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "@shared/components/Header";
import Footer from "@shared/components/Footer";
import ErrorModal from "@shared/components/modal/ErrorModal";
import type { ProfileItem } from "@my/types/ProfileItem";
import { deleteUserAccount, getUserProfile, logoutUser } from "@my/apis";
import ProfileSection from "@my/components/profile/ProfileSection";
import ApplicationStatusSection from "@my/components/apply/ApplicationStatusSection";
import WithdrawalModal from "@my/components/modal/WithdrawalModal";
import EditModal from "@my/components/modal/EditModal";

type ModalType = "ERROR" | null | "CONFIRM" | "SUCCESS" | "EDIT";

function MyPage() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState<ProfileItem | null>(null);
  const [errorMessage, setErrorMessage] =
    useState<string>("🚧 잘못된 접급입니다. 🚧"); // 모달 에러 메세지
  // const [activeModal, setActiveModal] = useState<ModalType>("ERROR"); // 모달 활성화
  const [activeModal, setActiveModal] = useState<ModalType>(null); // 모달 활성화

  // 사용자 프로필 조회
  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await getUserProfile();

        const apiData = data.data;
        const apiError = data.error;

        if (apiError && apiError.code) {
          setErrorMessage(apiError.message);
          setActiveModal("ERROR");
          return;
        }

        setProfileData(apiData);
      } catch (error) {
        let msg = "서버와 연결할 수 없습니다. 잠시 후 다시 시도해주세요.";

        if (axios.isAxiosError(error) && error.response?.data?.message) {
          msg = error.response.data.message;
        }

        setErrorMessage(msg);
        setActiveModal("ERROR");
      }
    };

    getProfile();
  }, []);

  // 모달 비활성화
  const handleCloseModal = () => {
    setActiveModal(null);
  };

  // 사용자 회원탈퇴 모달 활성화
  const handleShowDeleteModal = () => {
    setActiveModal("CONFIRM");
  };

  // 사용자 회원탈퇴
  // const handleDeleteUser = async () => {
  //   try {
  //     const { data } = await deleteUserAccount();

  //     const apiError = data.error;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // 정보 수정 모달 활성화
  const handleShowEditModal = () => {
    setActiveModal("EDIT");
  };

  // 사용자 로그아웃 모달 없이 바로 메인으로 이동
  const handleLogoutUser = async () => {
    const { data } = await logoutUser();
    const apiError = data.error;

    if (apiError.code) {
      setErrorMessage(apiError.message);
      setActiveModal("ERROR");
      console.log(apiError.message);
    }

    console.log("로그아웃 성공");
    navigate("/main");
  };

  return (
    <div className="w-full bg-[#111111]">
      <Header />

      <ErrorModal
        isShow={activeModal === "ERROR"}
        content={errorMessage}
        buttonText="메인 페이지로 돌아가기"
        onClick={() => navigate("/main")}
      />

      <WithdrawalModal
        isShow={activeModal === "CONFIRM"}
        onClose={handleCloseModal}
        // onDelete={handleDeleteUser}
      />

      <EditModal isShow={activeModal === "EDIT"} name={profileData?.name} />

      {/* 컨텐츠 */}
      <main className="text-white1 pt-17.5 pb-112">
        <div className="mx-auto flex max-w-360 gap-47.5 px-12">
          <ProfileSection data={profileData} onDelete={handleShowDeleteModal} />
          <ApplicationStatusSection
            onLogout={handleLogoutUser}
            onEdit={handleShowEditModal}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MyPage;
