import { Button, Modal } from "@shared/components";
import type { ModalProps } from "@shared/types/ModalProps";

function ApplyFailedModal({ isShow, onClose }: ModalProps) {
  if (!isShow) return;

  return (
    <Modal>
      <Modal.Title>지원할 수 없는 상태예요.</Modal.Title>
      <Modal.Description>
        상세정보가 미기입 상태거나, 이미 지원서를 회수했다면{"\n"}
        지원이 불가능해요.
      </Modal.Description>
      <Modal.ButtonLayout>
        <Button variant="modal" onClick={onClose}>
          닫기
        </Button>
      </Modal.ButtonLayout>
    </Modal>
  );
}

export default ApplyFailedModal;
