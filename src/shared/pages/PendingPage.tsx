import Header from "../components/Header";
import Modal from "../components/Modal";

function PendingPage() {
  return (
    <div className="bg-black1 h-dvh w-full">
      <Header />
      <Modal>
        <Modal.Title>성공적으로 임시저장 되었습니다.</Modal.Title>
        <Modal.Description>
          <span className="w-[447px] leading-7">
            임시저장한 지원서는 공고기간 이후 자동으로 제출되지 않으니 반드시
            최종 지원하기를 하시기 바랍니다.
          </span>
        </Modal.Description>
        <Modal.ButtonLayout>
          <Modal.Button>내 지원서 보기</Modal.Button>
        </Modal.ButtonLayout>
      </Modal>
    </div>
  );
}

export default PendingPage;
