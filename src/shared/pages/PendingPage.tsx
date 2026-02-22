import Header from "../components/Header";
import { Button, Modal } from "@shared/components";

function PendingPage() {
  return (
    <div className="bg-black1 h-dvh w-dvw">
      <Header />
      <Modal>
        <Modal.Title>정말 탈퇴하시겠어요?</Modal.Title>
        <Modal.Description>
          탈퇴가 완료되면 모든 정보(지원서, 상세 정보 등)는 즉시 삭제되며, 다시
          가입하더라도 되돌릴 수 없어요.
        </Modal.Description>
        <Modal.ButtonLayout>
          <Button variant="modal">취소</Button>
          <Button variant="modal">탈퇴하기</Button>
        </Modal.ButtonLayout>
      </Modal>
    </div>
  );
}

export default PendingPage;
