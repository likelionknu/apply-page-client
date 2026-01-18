import Header from "../components/Header";
import Modal from "../components/Modal";

function PendingPage() {
  return (
    <div className="bg-black1 h-dvh w-full">
      <Header />
      <Modal>
        <Modal.Title>아직 모집 기간이 아니예요.</Modal.Title>
        <Modal.Description>
          <div>2월 23일 ~ 3월 6일에 가능해요.</div>
          <div>조금만 기다려 주세요!</div>
        </Modal.Description>
      </Modal>
    </div>
  );
}

export default PendingPage;
