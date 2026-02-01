import Header from "@shared/components/Header";
import Footer from "@shared/components/Footer";
import ProfileSection from "../components/ProfileSection";
import ApplyStatusSection from "../components/ApplyStatusSection";
import Modal from "@shared/components/Modal";

function MyPage() {
  const infos = [
    {
      label: "학과",
      content: "감귤확과",
    },
    {
      label: "학번",
      content: "202301250",
    },
    {
      label: "학년",
      content: "1학년",
    },
    {
      label: "전화번호",
      content: "010-9990-9999",
    },
  ];

  return (
    <>
      <Header />
      <Modal>나는 모달</Modal>
      <main className="text-white1 w-full bg-[#111111] pt-40 pb-112">
        <div className="mx-auto flex max-w-360 gap-47.5 px-8">
          <ProfileSection infos={infos} />
          <ApplyStatusSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MyPage;
