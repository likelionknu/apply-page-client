import { Button, Modal } from "@shared/components";
import type { ModalProps } from "@shared/types/ModalProps";

function CancelModal({
  isShow,
  onClose,
  // onDelete
}: ModalProps) {
  if (!isShow) return;

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

export default CancelModal;
