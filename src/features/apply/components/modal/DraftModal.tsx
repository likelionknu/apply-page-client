import { Button, Modal } from "@shared/components";
import type { ModalProps } from "@shared/types/ModalProps";

function DraftModal({ isShow, onClose, onNavigate }: ModalProps) {
  if (!isShow) return;

  return (
    <Modal>
      <Modal.Title>이미 작성 중인 지원서가 있어요.</Modal.Title>
      <Modal.Close onClose={onClose} />
      <Modal.ButtonLayout className="mt-5">
        <Button variant="modal" onClick={onNavigate}>
          마이 페이지로 이동
        </Button>
      </Modal.ButtonLayout>
    </Modal>
  );
}

export default DraftModal;
