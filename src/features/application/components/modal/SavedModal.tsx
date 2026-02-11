import { useNavigate } from "react-router-dom";
import { Modal, Button } from "@shared/components";
import type { ModalProps } from "@shared/types/ModalProps";

function SavedModal({ isShow }: ModalProps) {
  const navigate = useNavigate();

  if (!isShow) return null;

  return (
    <Modal>
      <Modal.Title>지원서를 임시저장 했어요.</Modal.Title>
      <Modal.Description>
        지원서를 임시저장 하더라도, 공고 마감일에 자동으로 제출되지 않으니
        마감일 이전에 지원을 완료해 주세요.
      </Modal.Description>
      <Modal.ButtonLayout>
        <Button variant="modal" onClick={() => navigate("/my")}>
          내 지원서 보기
        </Button>
      </Modal.ButtonLayout>
    </Modal>
  );
}

export default SavedModal;
