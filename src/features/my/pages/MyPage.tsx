import Header from "../../../shared/components/Header";
import ApplyItem from "../components/ApplyItem";
import Button from "../../../shared/components/Button";
import Footer from "../../../shared/components/Footer";
import InfoImg from "../assets/info.png";
import { useState } from "react";

interface InfoItemProps {
  needWidth?: boolean;
  children: React.ReactNode;
}

const InfoItem = ({ needWidth, children }: InfoItemProps) => {
  const InfoStyle = "w-54.75 text-[20px] leading-6";
  return (
    <div
      className={`info-item-style px-7.5 py-4.5 text-center text-[13px] leading-7.5 font-medium ${needWidth ? InfoStyle : ""}`}
    >
      {children}
    </div>
  );
};

function MyPage() {
  const [data, setData] = useState(false);
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
          <section className="flex flex-col gap-19">
            <div className="tracking-tight-custom text-[40px] leading-140 font-semibold">
              내 프로필
            </div>
            <div className="flex flex-col items-center gap-8.5">
              <div className="bg-white1 h-71 w-71 rounded-[50%]"></div>
              <span className="tracking-tight-custom text-[40px] leading-140 font-semibold">
                황형진
              </span>
              <span className="tracking-tight-custom text-[24px] leading-140 font-[400px]">
                brotherhwang97@gmail.com
              </span>
              <div className="mt-5 flex flex-col items-center">
                {data ? (
                  <>
                    <img
                      src={InfoImg}
                      alt="정보 미입력"
                      className="mb-13.5 w-24.25"
                    />
                    <InfoItem>공고에 지원하려면 프로필을 완성해주세요</InfoItem>
                  </>
                ) : (
                  <div className="flex flex-col gap-10">
                    {infos.map((info, idx) => (
                      <div
                        className="flex items-center justify-between"
                        key={idx}
                      >
                        <label className="tracking-tight-custom mr-8 text-right text-[20px] leading-140 font-medium">
                          {info.label}
                        </label>
                        <InfoItem needWidth={true}>{info.content}</InfoItem>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <span className="text-gray1 mt-20 text-[18px] leading-8 font-medium">
              탈퇴하기
            </span>
          </section>
          <section className="mt-19.25 flex-1">
            <div className="flex flex-col gap-8.25">
              <div className="tracking-tight-custom text-[32px] leading-140 font-semibold">
                지원 현황
              </div>
              <div className="border-sub1 w-full border-3"></div>
              <ApplyItem />
              <ApplyItem />
              <ApplyItem />
            </div>
            <div className="mt-51.75 flex justify-end gap-4">
              <Button>정보수정</Button>
              <Button>로그아웃</Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MyPage;
