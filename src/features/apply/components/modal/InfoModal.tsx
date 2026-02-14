import { Button, Modal } from "@shared/components";
import type { ModalProps } from "@shared/types/ModalProps";

function InfoModal({ isShow, onClose, onNavigate }: ModalProps) {
  if (!isShow) return;

  return (
    <Modal>
      <Modal.Title>상세 정보를 입력해주세요.</Modal.Title>
      <Modal.Close onClose={onClose} />
      <Modal.ButtonLayout>
        <Button variant="modal" onClick={onNavigate}>
          마이 페이지로 이동
        </Button>
      </Modal.ButtonLayout>
    </Modal>
  );
}

export default InfoModal;
