import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Modal } from "@shared/components";
import type { ModalProps } from "@shared/types/ModalProps";
import { deleteUserAccount } from "@my/apis";

function WithdrawalModal({ isShow, onClose }: ModalProps) {
  const navigate = useNavigate();
  const [step, setStep] = useState<"CONFIRM" | "SUCCESS">("CONFIRM");

  if (!isShow) return null;

  const handleDeleteUser = async () => {
    try {
      const { data } = await deleteUserAccount();
      const apiError = data?.error;

      if (apiError?.code) {
        console.log(apiError.message);
        return;
      }

      sessionStorage.clear();
      navigate("/main");
    } catch (error) {
      let msg = "서버와 연결할 수 없습니다. 잠시 후 다시 시도해주세요.";

      if (axios.isAxiosError(error) && error.response?.data?.message) {
        msg = error.response.data.message;
      } else if (error instanceof Error) {
        msg = error.message;
      }

      console.log(msg);
    }
  };

  return (
    <Modal>
      {step === "CONFIRM" && (
        <>
          <Modal.Title>정말 탈퇴하시겠어요?</Modal.Title>
          <Modal.Description>
            탈퇴가 완료되면 모든 정보(지원서, 상세 정보 등)는 즉시 삭제되며,
            다시 가입하더라도 되돌릴 수 없어요.
          </Modal.Description>
          <Modal.ButtonLayout>
            <Button variant="modal" onClick={onClose}>
              취소
            </Button>
            <Button
              variant="modal"
              onClick={() => {
                setStep("SUCCESS");
                handleDeleteUser();
              }}
            >
              탈퇴하기
            </Button>
          </Modal.ButtonLayout>
        </>
      )}
      {step === "SUCCESS" && (
        <>
          <Modal.Title>회원 탈퇴를 완료했어요.</Modal.Title>
          <Modal.ButtonLayout>
            <Button
              variant="modal"
              onClick={() => {
                navigate("/main");
              }}
            >
              메인 페이지로 돌아가기
            </Button>
          </Modal.ButtonLayout>
        </>
      )}
    </Modal>
  );
}

export default WithdrawalModal;
