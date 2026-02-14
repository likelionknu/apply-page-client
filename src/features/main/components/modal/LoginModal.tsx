import { Button, Modal } from "@shared/components";
import type { ModalProps } from "@shared/types/ModalProps";

function LoginModal({ isShow, onClose, onClick }: ModalProps) {
  if (!isShow) return;

  return (
    <Modal>
      <Modal.Title>로그인을 해주세요.</Modal.Title>
      <Modal.Close onClose={onClose} />
      <Modal.ButtonLayout>
        <Button variant="modal" onClick={onClick}>
          로그인하기
        </Button>
      </Modal.ButtonLayout>
    </Modal>
  );
}

export default LoginModal;
