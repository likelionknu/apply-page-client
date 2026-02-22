import { Button, Modal } from "@shared/components";
import type { ModalProps } from "@shared/types/ModalProps";

function ApplyAlertModal({ isShow, onClick }: ModalProps) {
  if (!isShow) return;

  return (
    <Modal>
      <Modal.Title>지원 파트 확인 안내</Modal.Title>
      <Modal.Description className="max-w-70.5 md:max-w-100">
        원활한 선발을 위해 파트 간 중복 지원을 제한하고 있습니다. 중복 지원 시
        일괄 탈락 처리될 수 있습니다.
      </Modal.Description>
      <Modal.ButtonLayout>
        <Button variant="modal" onClick={onClick}>
          확인
        </Button>
      </Modal.ButtonLayout>
    </Modal>
  );
}

export default ApplyAlertModal;
