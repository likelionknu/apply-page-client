import { Modal, Button } from "@shared/components";

interface ErrorModalProps {
  isShow: boolean;
  content: string;
  buttonText: string;
  onClick: () => void;
}

function ErrorModal({ isShow, content, buttonText, onClick }: ErrorModalProps) {
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
