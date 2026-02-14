import Header from "../components/Header";
import Modal from "../components/modal/Modal";

function PendingPage() {
  return (
    <div className="bg-black1 h-dvh w-dvw">
      <Header />
      <Modal>
        <Modal.Title>🦁 아직 멋쟁이사자처럼은 준비 중이에요! 🦁</Modal.Title>
        <Modal.Description>
          <span>
            최고의 환경에서 여러분들을 맞이하기 위해 조금만 기다려주세요.
          </span>
          <span>아기사자 모집은 2월 23일부터 3월 6일까지 진행돼요.</span>
        </Modal.Description>
      </Modal>
    </div>
  );
}

export default PendingPage;
