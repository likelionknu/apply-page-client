import Header from "../components/Header";
import ApplyModals from "@apply/components/modal/ApplyModals";

function PendingPage() {
  return (
    <div className="bg-black1 h-dvh w-dvw">
      <Header />
      <ApplyModals
        activeModal="ERROR"
        errorMessage="상세정보 미기입 상태에서는 지원이 불가능해요."
        errorButton="마이 페이로 이동"
      />
    </div>
  );
}

export default PendingPage;
