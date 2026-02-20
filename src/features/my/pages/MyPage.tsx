import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Footer } from "@shared/components";
import type { ModalType } from "@shared/types/ModalType.ts";
import { getApiErrorMessage } from "@shared/utils/GetApiErrorMessage";
import { emitAuthChanged } from "@shared/utils/authEvents";
import { getUserProfile, logoutUser } from "@my/apis";
import {
  ProfileSection,
  ApplicationStatusSection,
  MyModals,
} from "@my/components";
import type { ProfileItem } from "@my/types/ProfileItem";

function MyPage() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState<ProfileItem | null>(null);
  const [errorMessage, setErrorMessage] =
    useState<string>("🚧 잘못된 접근입니다. 🚧");
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  // 모달 비활성화
  const handleCloseModal = () => {
    setActiveModal(null);
  };

  // 사용자 회원탈퇴 모달 활성화
  const handleShowDeleteModal = () => {
    setActiveModal("CONFIRM");
  };

  // 사용자 로그아웃 모달 없이 바로 메인으로 이동
  const handleLogoutUser = async () => {
    try {
      await logoutUser();

      navigate("/main");
      sessionStorage.clear();
      emitAuthChanged();
    } catch (error) {
      let msg = "서버와 연결할 수 없습니다.";

      msg = getApiErrorMessage(error, msg);

      setErrorMessage(msg);
      setActiveModal("ERROR");
    }
  };

  // 사용자 프로필 조회
  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await getUserProfile();

        const apiData = data.data;

        setProfileData(apiData);
      } catch (error) {
        let msg = "서버와 연결할 수 없습니다.";

        msg = getApiErrorMessage(error, msg);

        setErrorMessage(msg);
        setActiveModal("ERROR");
      }
    };

    getProfile();
  }, []);

  return (
    <div className="bg-mobile-page-dark md:bg-web-background w-full bg-black md:bg-none">
      <Header />

      {/* 모달 */}
      <MyModals
        activeModal={activeModal}
        errorMessage={errorMessage}
        errorButton="메인 페이지로 돌아가기"
        onNavigate={() => navigate("/main")}
        onClose={handleCloseModal}
      />

      {/* 컨텐츠 */}
      <main className="text-white1 pt-6 pb-30 md:pt-11">
        <div className="mx-auto flex min-h-dvh flex-col items-center gap-10.5 px-8 md:max-w-360 md:flex-row md:items-start lg:px-31">
          <ProfileSection
            data={profileData}
            onDelete={handleShowDeleteModal}
            onLogout={handleLogoutUser}
          />
          <ApplicationStatusSection onLogout={handleLogoutUser} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MyPage;
