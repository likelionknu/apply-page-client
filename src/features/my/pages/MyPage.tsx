import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@shared/components/Header";
import Footer from "@shared/components/Footer";
import type { ProfileItem } from "@my/types/ProfileItem";
import { getUserProfile, logoutUser } from "@my/apis";
import ProfileSection from "@my/components/profile/ProfileSection";
import ApplicationStatusSection from "@my/components/apply/ApplicationStatusSection";
import ErrorModal from "@my/components/modal/ErrorModal";
import WithdrawalModal from "@my/components/modal/WithdrawalModal";
import EditModal from "@my/components/modal/EditModal";

type ModalType = "ERROR" | null | "CONFIRM" | "SUCCESS" | "EDIT";

function MyPage() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState<ProfileItem | null>(null);
  const [errorMessage, setErrorMessage] =
    useState<string>("🚧 잘못된 접급입니다. 🚧"); // 모달 에러 메세지
  // const [activeModal, setActiveModal] = useState<ModalType>("CONFIRM"); // 모달 활성화
  const [activeModal, setActiveModal] = useState<ModalType>(null); // 모달 활성화

  // 사용자 프로필 조회
  useEffect(() => {
    const getProfile = async () => {
      const { data } = await getUserProfile();

      const apiData = data.data;
      const apiError = data.error;

      if (apiError.code) {
        setErrorMessage(apiError.message);
        setActiveModal("ERROR");
      }
      setProfileData(apiData);
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
    <>
      <Header />

      <ErrorModal
        isShow={activeModal === "ERROR"}
        context={errorMessage}
        onClick={() => navigate("/apply")}
      />

      <WithdrawalModal
        isShow={activeModal === "CONFIRM"}
        onClose={handleCloseModal}
      />

      <EditModal isShow={activeModal === "EDIT"} name={profileData?.name} />

      {/* 컨텐츠 */}
      <main className="text-white1 w-full bg-[#111111] pt-17.5 pb-112">
        <div className="mx-auto flex max-w-360 gap-47.5 px-12">
          <ProfileSection onDelete={handleShowDeleteModal} data={profileData} />
          <ApplicationStatusSection
            onLogout={handleLogoutUser}
            onEdit={handleShowEditModal}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MyPage;
