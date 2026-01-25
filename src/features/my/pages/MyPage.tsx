import Header from "../../../shared/components/Header";
import Footer from "../../../shared/components/Footer";
import ProfileSection from "../components/ProfileSection";
import ApplyStatusSection from "../components/ApplyStatusSection";

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
      <main className="text-white1 w-full bg-[#111111] pt-40 pb-112">
        <div className="mx-auto flex max-w-360 gap-47.5 px-8">
          <ProfileSection
            name="김감귤"
            email="brotherhwang97@gmail.com"
            infos={infos}
          />
          <ApplyStatusSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MyPage;
