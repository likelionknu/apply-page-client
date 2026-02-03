import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ProfileItem } from "@my/types/ProfileItem";
import Header from "@shared/components/Header";
import Footer from "@shared/components/Footer";
import ProfileSection from "../components/profile/ProfileSection";
import ApplyStatusSection from "../components/apply/ApplyStatusSection";
// import Modal from "@shared/components/Modal";

function MyPage() {
  const navigate = useNavigate();
  // const [profileData, setProfileData] = useState<ProfileItem | null>({
  //   email: "",
  //   name: "",
  //   depart: "",
  //   grade: 0,
  //   phone: "",
  //   profile_url: "",
  //   student_id: "",
  //   status: "",
  // });
  const [profileData, setProfileData] = useState<ProfileItem | null>({
    email: "example@gmail.com",
    name: "홍길동",
    depart: "컴퓨터공학부",
    grade: 2,
    phone: "010-0000-0000",
    profile_url:
      "https://lh3.googleusercontent.com/a/ACg8ocJLomGSh3-Wm0C0sQUo2yNqw_ne2wFvzy8FQAYZ427fhzYJuV0=s96-c",
    student_id: "202500000",
    status: "재학",
  });

  // profileData null이면 메인으로 이동
  useEffect(() => {
    if (!profileData) navigate("/main");
  }, [profileData, navigate]);

  if (!profileData) return null;

  return (
    <>
      <Header />
      {/* <Modal>나는 모달</Modal> */}
      <main className="text-white1 w-full bg-[#111111] pt-17.5 pb-112">
        <div className="mx-auto flex max-w-360 gap-47.5 px-12">
          <ProfileSection data={profileData} />
          <ApplyStatusSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MyPage;
