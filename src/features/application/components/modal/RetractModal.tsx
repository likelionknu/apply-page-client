import Modal from "@shared/components/modal/Modal";
import Button from "@shared/components/Button";

interface SubmitModalProps {
  isShow: boolean;
  onClose: () => void;
}

function RetrackModal({ isShow, onClose }: SubmitModalProps) {
  if (!isShow) return null;

  return (
    <Modal>
      <Modal.Title>제출한 지원서를 회수할까요?</Modal.Title>
      <Modal.Description>
        지원서를 회수하면 지원 취소로 간주되며 이 공고에 다시 지원할 수 없어요.
      </Modal.Description>
      <Modal.ButtonLayout>
        <Button variant="modal" onClick={onClose}>
          취소
        </Button>
        <Button variant="modal">회수하기</Button>
      </Modal.ButtonLayout>
    </Modal>
  );
}

export default RetrackModal;
