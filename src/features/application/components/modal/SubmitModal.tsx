import { useNavigate } from "react-router-dom";
import { Modal, Button } from "@shared/components";

interface SubmitModalProps {
  isShow: boolean;
}

function SubmitModal({ isShow }: SubmitModalProps) {
  const navigate = useNavigate();

  if (!isShow) return null;

  return (
    <Modal>
      <Modal.Title>지원서를 제출했어요.</Modal.Title>
      <Modal.Description>
        제출된 지원서와 공고 진행 상황은 내 프로필 페이지에서 확인할 수 있으며,
        검토가 완료되면 등록된 이메일로 알려드려요.
      </Modal.Description>
      <Modal.ButtonLayout>
        <Button variant="modal" onClick={() => navigate("/my")}>
          내 지원서 보기
        </Button>
      </Modal.ButtonLayout>
    </Modal>
  );
}

export default SubmitModal;
