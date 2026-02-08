import { Button, Modal } from "@shared/components";
import type { ModalProps } from "@shared/types/ModalProps";

function InputStateModal({ isShow, onClose }: ModalProps) {
  if (!isShow) return;

  return (
    <Modal>
      <Modal.Title>제목</Modal.Title>
      <Modal.ButtonLayout>
        <Button variant="modal" onClick={onClose}>
          닫기
        </Button>
      </Modal.ButtonLayout>
    </Modal>
  );
}

export default InputStateModal;
