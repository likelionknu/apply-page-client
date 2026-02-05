import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ProfileItem } from "@my/types/ProfileItem";
import { deleteUserAccount, getUserProfile, logoutUser } from "@my/apis";
import Header from "@shared/components/Header";
import Footer from "@shared/components/Footer";
import ProfileSection from "../components/profile/ProfileSection";
import ApplyStatusSection from "../components/apply/ApplyStatusSection";
import Modal from "@shared/components/Modal";
import Button from "@shared/components/Button";

type ModalType = "ERROR" | null | "DELETE_CONFIRM" | "DELETE_SUCCESS" | "EDIT";

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

  // 사용자 프로필 조회
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

  // 사용자 회원탈퇴 모달 활성화
  const handleShowDeleteModal = () => {
    setActvieModal("DELETE_CONFIRM");
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

    setActvieModal("DELETE_SUCCESS");
  };

  // 정보 수정
  const handleShowEditModal = () => {
    setActvieModal("EDIT");
  };

  // 사용자 로그아웃 모달 없이 바로 메인으로 이동
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

      {/* 모달 */}
      {actvieModal && (
        <Modal>
          {actvieModal === "ERROR" && (
            <>
              <Modal.Title>{errorMessage}</Modal.Title>
              <Modal.ButtonLayout>
                <Button variant="modal" onClick={handleCloseModal}>
                  닫기
                </Button>
              </Modal.ButtonLayout>
            </>
          )}
          {actvieModal === "DELETE_CONFIRM" && (
            <>
              <Modal.Title>정보 조회를 위한 권한이 부족합니다.</Modal.Title>
              <Modal.Description>
                탈퇴가 완료되면 모든 정보(지원서, 상세 정보 등)는 즉시 삭제되며,
                다시 가입하더라도 되돌릴 수 없어요.
              </Modal.Description>
              <Modal.ButtonLayout>
                <Button variant="modal" onClick={handleCloseModal}>
                  취소
                </Button>
                <Button variant="modal" onClick={handleDeleteUser}>
                  탈퇴하기
                </Button>
              </Modal.ButtonLayout>
            </>
          )}
          {actvieModal === "DELETE_SUCCESS" && (
            <>
              <Modal.Title>회원 탈퇴를 완료했어요.</Modal.Title>
              <Modal.ButtonLayout>
                <Button
                  variant="modal"
                  onClick={() => {
                    handleCloseModal();
                    navigate("/main");
                  }}
                >
                  완료하기
                </Button>
              </Modal.ButtonLayout>
            </>
          )}
          {actvieModal === "EDIT" && (
            <>
              <Modal.Title>
                {profileData.name} 님의 정보를 수정하시겠어요?
              </Modal.Title>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col items-start gap-2">
                  <label>이름</label>
                  <input
                    type="text"
                    className="border-white1 rounded-lg border-2"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label>학부(학과)</label>
                  <input
                    type="text"
                    className="border-white1 rounded-lg border-2"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label>학번</label>
                  <input
                    type="text"
                    className="border-white1 rounded-lg border-2"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label>학년</label>
                  <input
                    type="text"
                    placeholder="1"
                    className="border-white1 rounded-lg border-2"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label>연락처</label>
                  <input
                    type="text"
                    placeholder="연락처를 입력해주세요."
                    className="border-white1 rounded-lg border-2"
                  />
                </div>
              </form>
              <Modal.ButtonLayout>
                <Button
                  variant="modal"
                  onClick={() => {
                    handleCloseModal();
                  }}
                >
                  변경하기
                </Button>
              </Modal.ButtonLayout>
            </>
          )}
        </Modal>
      )}

      {/* 컨텐츠 */}
      <main className="text-white1 w-full bg-[#111111] pt-17.5 pb-112">
        <div className="mx-auto flex max-w-360 gap-47.5 px-12">
          <ProfileSection onDelete={handleShowDeleteModal} data={profileData} />
          <ApplyStatusSection
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
