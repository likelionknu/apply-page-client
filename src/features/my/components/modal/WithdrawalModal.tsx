import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "@shared/components/Modal";
import Button from "@shared/components/Button";
// import { deleteUserAccount } from "@my/apis";

interface WithdrawalModalProps {
  isShow: boolean;
  onClose: () => void;
  onWithdrawSuccess?: () => void;
}

function WithdrawalModal({
  isShow,
  onClose,
  // onWithdrawSuccess,
}: WithdrawalModalProps) {
  const navigate = useNavigate();
  const [step, setStep] = useState<"CONFIRM" | "SUCCESS">("CONFIRM");

  if (!isShow) return null;

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
              // 회원탈퇴 api 요청
              onClick={() => {
                alert("탈퇴");
                setStep("SUCCESS");
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
                onClose();
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
