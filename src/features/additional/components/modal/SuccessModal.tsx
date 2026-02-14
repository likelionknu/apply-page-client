import { Button, Modal } from "@shared/components";
import type { ModalProps } from "@shared/types/ModalProps";

function SuccessModal({ isShow, onClick }: ModalProps) {
  if (!isShow) return;

  return (
    <Modal>
      <Modal.Title>상세 정보를 수정했어요.</Modal.Title>
      <Modal.ButtonLayout>
        <Button variant="modal" onClick={onClick}>
          마이 페이지로 이동
        </Button>
      </Modal.ButtonLayout>
    </Modal>
  );
}

export default SuccessModal;
