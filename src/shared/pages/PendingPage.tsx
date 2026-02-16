import ApplyFailedModal from "@apply/components/modal/ApplyFailedModal";
import Header from "../components/Header";

function PendingPage() {
  return (
    <div className="bg-black1 h-dvh w-dvw">
      <Header />
      <ApplyFailedModal isShow={true} />
    </div>
  );
}

export default PendingPage;
