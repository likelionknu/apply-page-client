import { Modal, Button } from "@shared/components";
import type { ModalProps } from "@shared/types/ModalProps";

function ErrorModal({
  isShow,
  content,
  buttonText,
  onClick,
  onClose,
}: ModalProps) {
  if (!isShow) return null;

  return (
    <Modal>
      <Modal.Title>{content}</Modal.Title>
      <Modal.Close onClose={onClose} />
      <Modal.ButtonLayout>
        <Button variant="modal" onClick={onClick}>
          {buttonText}
        </Button>
      </Modal.ButtonLayout>
    </Modal>
  );
}

export default ErrorModal;
