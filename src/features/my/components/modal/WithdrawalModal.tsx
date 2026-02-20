import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ErrorModal, Modal } from "@shared/components";
import type { ModalProps } from "@shared/types/ModalProps";
import { deleteUserAccount } from "@my/apis";
import { getApiErrorMessage } from "@shared/utils/GetApiErrorMessage";
import { emitAuthChanged } from "@shared/utils/authEvents";

interface StepProps {
  onConfirm: () => void;
  onCancel?: () => void;
}

function ConfirmStep({ onConfirm, onCancel }: StepProps) {
  return (
    <Modal>
      <Modal.Title>정말 탈퇴하시겠어요?</Modal.Title>
      <Modal.Description>
        탈퇴가 완료되면 모든 정보(지원서, 상세 정보 등)는 즉시 삭제되며, {"\n"}
        다시 가입하더라도 되돌릴 수 없어요.
      </Modal.Description>
      <Modal.ButtonLayout>
        <Button variant="modal" onClick={onCancel}>
          취소
        </Button>
        <Button variant="modal" onClick={onConfirm}>
          탈퇴하기
        </Button>
      </Modal.ButtonLayout>
    </Modal>
  );
}

function SuccessStep({ onConfirm }: StepProps) {
  return (
    <>
      <Modal.Title>회원 탈퇴를 완료했어요.</Modal.Title>
      <Modal.ButtonLayout>
        <Button variant="modal" onClick={onConfirm}>
          메인 페이지로 돌아가기
        </Button>
      </Modal.ButtonLayout>
    </>
  );
}

function WithdrawalModal({ isShow, onClose }: ModalProps) {
  const navigate = useNavigate();
  const [step, setStep] = useState<"CONFIRM" | "SUCCESS">("CONFIRM");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  if (!isShow) return null;

  const handleDeleteUser = async () => {
    try {
      await deleteUserAccount();

      sessionStorage.clear();
      emitAuthChanged();
      return true;
    } catch (error) {
      let msg = `서버와 연결할 수 없습니다. \n잠시 후 다시 시도해주세요.`;

      msg = getApiErrorMessage(error, msg);

      setErrorMessage(msg);
      setIsErrorModalOpen(true);
      return false;
    }
  };

  return (
    <>
      {step === "CONFIRM" && (
        <ConfirmStep
          onConfirm={async () => {
            const isDeleted = await handleDeleteUser();
            if (isDeleted) {
              setStep("SUCCESS");
            }
          }}
          onCancel={onClose}
        />
      )}
      {step === "SUCCESS" && (
        <SuccessStep
          onConfirm={() => {
            navigate("/main");
          }}
        />
      )}

      <ErrorModal
        isShow={isErrorModalOpen}
        content={errorMessage}
        buttonText="확인"
        onClick={() => setIsErrorModalOpen(false)}
        onClose={() => setIsErrorModalOpen(false)}
      />
    </>
  );
}

export default WithdrawalModal;
