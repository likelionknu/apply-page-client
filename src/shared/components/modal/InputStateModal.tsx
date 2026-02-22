import { Button, Modal } from "@shared/components";
import type { ModalProps } from "@shared/types/ModalProps";

function InputStateModal({ content, isShow, onClose }: ModalProps) {
  if (!isShow) return;

  return (
    <Modal>
      <Modal.Title>{content}</Modal.Title>
      <Modal.ButtonLayout className="mt-5">
        <Button variant="modal" onClick={onClose}>
          닫기
        </Button>
      </Modal.ButtonLayout>
    </Modal>
  );
}

export default InputStateModal;
