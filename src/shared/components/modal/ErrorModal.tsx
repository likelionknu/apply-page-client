import { Modal, Button } from "@shared/components";
import type { ModalProps } from "@shared/types/ModalProps";

function ErrorModal({
  isShow,
  className,
  content,
  buttonText,
  onClick,
  onClose,
}: ModalProps) {
  if (!isShow) return null;

  return (
    <Modal>
      <Modal.Title className={className}>{content}</Modal.Title>
      <Modal.Close onClose={onClose} />
      <Modal.ButtonLayout className="mt-5">
        <Button variant="modal" onClick={onClick}>
          {buttonText}
        </Button>
      </Modal.ButtonLayout>
    </Modal>
  );
}

export default ErrorModal;
