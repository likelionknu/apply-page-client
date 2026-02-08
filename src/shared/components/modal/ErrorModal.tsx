import { Modal, Button } from "@shared/components";
import type { ModalProps } from "@shared/types/ModalProps";

function ErrorModal({ isShow, content, buttonText, onClick }: ModalProps) {
  if (!isShow) return null;

  return (
    <Modal>
      <Modal.Title>{content}</Modal.Title>
      <Modal.ButtonLayout>
        <Button variant="modal" onClick={onClick}>
          {buttonText}
        </Button>
      </Modal.ButtonLayout>
    </Modal>
  );
}

export default ErrorModal;
