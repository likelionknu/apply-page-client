import Modal from "@shared/components/Modal";
import Button from "@shared/components/Button";

interface ErrorModalProps {
  isShow: boolean;
  context: string;
  onClick: () => void;
}

function ErrorModal({ isShow, context, onClick }: ErrorModalProps) {
  if (!isShow) return null;

  return (
    <Modal>
      <Modal.Title>{context}</Modal.Title>
      <Modal.ButtonLayout>
        <Button variant="modal" onClick={onClick}>
          공고 페이지로 돌아가기
        </Button>
      </Modal.ButtonLayout>
    </Modal>
  );
}

export default ErrorModal;
