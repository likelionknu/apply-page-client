import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header, Footer, Button } from "@shared/components";
import type { PartType } from "@shared/types/PartType";
import { partDetails } from "@part/data/partDetails";
import { useIsMobile } from "@part/components/ButtonMobile";

function PartPage() {
  const { part } = useParams<{ part: PartType }>();
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(false);
  const isMobile = useIsMobile();

  const selectedPart = part ?? "PM";
  const validParts = Object.keys(partDetails);

  if (!validParts.includes(selectedPart)) {
    navigate("/part/PM", { replace: true });
    return null;
  }

  const data = partDetails[selectedPart];

  return (
    <div className="bg-mobile-page-dark md:bg-black1 text-white1 flex min-h-screen w-full flex-col bg-black md:bg-none">
      <Header />

      <main className="w-full grow">
        <div className="mx-auto mt-7 flex max-w-360 flex-col items-center px-6 pt-10 pb-12 md:px-12 md:pb-75">
          {/* 파트 선택 버튼 */}
          <div className="mb-10 flex w-51.75 justify-center gap-4 md:w-103.5 md:gap-7">
            {Object.keys(partDetails).map((partKey) => (
              <Button
                key={partKey}
                variant={isMobile ? "partMobile" : "part"}
                selected={selectedPart === partKey}
                onClick={() => {
                  setFlipped(false);
                  navigate(`/part/${partKey}`);
                }}
              >
                {partKey}
              </Button>
            ))}
          </div>

          {/* ===== 콘텐츠 영역 ===== */}
          <div className="flex w-full flex-col md:flex-row md:items-start md:gap-10">
            {/* ================= 이미지 영역 ================= */}
            <div className="flex w-full flex-col items-center md:w-[40%]">
              {/* 모바일 타이틀 */}
              <h2 className="from-white1 via-blue6 to-blue mb-2 bg-linear-to-r bg-clip-text text-[20px] font-bold text-transparent md:hidden">
                {data.title}
              </h2>

              {/* 모바일 이미지 카드 */}
              <div
                className="relative mt-6 mb-5 aspect-4/5 h-110 w-81 cursor-pointer md:hidden"
                onClick={() => setFlipped((prev) => !prev)}
              >
                <div
                  className="relative h-full w-full rounded-[40px] transition-transform duration-700 transform-3d"
                  style={{
                    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* 앞면 */}
                  <div className="absolute inset-0 overflow-hidden rounded-[20px] shadow-2xl backface-hidden">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* 뒷면 */}
                  <div
                    className="border-blue6 absolute inset-0 overflow-hidden rounded-[20px] border shadow-2xl backface-hidden"
                    style={{ transform: "rotateY(180deg)" }}
                  >
                    <img
                      src={data.image}
                      alt={data.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-30"
                    />
                    <div className="bg-blue4/10 absolute inset-0" />
                    <div className="relative z-10 mt-5 flex h-full p-5 text-left text-[15px] leading-relaxed break-keep">
                      {data.description}
                    </div>
                  </div>
                </div>
              </div>

              {/* 웹 이미지 */}
              <div className="border-gray3 relative mt-10 hidden aspect-4/5 max-h-157.5 max-w-112.25 overflow-hidden rounded-[40px] border shadow-2xl md:block">
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* ================= 웹 텍스트 영역 ================= */}
            <div className="hidden w-full pt-10 md:block md:w-[70%]">
              <h2 className="from-white1 via-blue to-blue bg-linear-to-r bg-clip-text font-bold text-transparent md:mb-4 md:text-[28px]">
                {data.title}
              </h2>

              <div className="mb-7 min-h-62.5 text-[22px] leading-relaxed break-keep whitespace-pre-wrap">
                {data.description}
              </div>

              {/* 인재상 */}
              <div className="mb-7">
                <h3 className="from-white1 via-blue to-blue mb-4 bg-linear-to-r bg-clip-text font-bold text-transparent md:text-[24px]">
                  이런 사람을 원해요
                </h3>

                <div className="grid grid-cols-2 gap-5">
                  {data.wishes.map((wish, idx) => (
                    <div
                      key={idx}
                      className="border-blue bg-black1 text-white2 flex items-center justify-center rounded-[15px] border text-center md:py-3.5 md:text-[16px]"
                    >
                      {wish}
                    </div>
                  ))}
                </div>
              </div>

              {/* 스택 */}
              <div>
                <h3 className="from-white1 via-blue to-blue mb-4 bg-linear-to-r bg-clip-text text-[24px] font-bold text-transparent">
                  Stack
                </h3>

                <div className="flex md:gap-6">
                  {data.stacks.map((stack) => (
                    <img
                      key={stack.name}
                      src={stack.icon}
                      alt={stack.name}
                      className="object-contain md:h-6 md:w-6"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= 모바일 하단 영역 ================= */}
          <div className="mt-5 w-78 md:hidden">
            {/* 인재상 */}
            <div className="mb-10">
              <h3 className="from-white1 via-blue to-blue mx-auto mb-5 w-fit bg-linear-to-r bg-clip-text text-center text-[20px] font-bold text-transparent">
                이런 사람을 원해요
              </h3>

              <div className="grid grid-cols-1 gap-3.25">
                {data.wishes.map((wish, idx) => (
                  <div
                    key={idx}
                    className="border-blue bg-black1 rounded-[7.23px] border p-[7.23px] text-center text-[9px]"
                  >
                    {wish}
                  </div>
                ))}
              </div>
            </div>

            {/* 스택 */}
            <div>
              <h3 className="from-white1 via-blue to-blue mx-auto mb-4 w-fit bg-linear-to-r bg-clip-text text-center text-[20px] font-bold text-transparent">
                Stack
              </h3>

              <div className="flex flex-wrap justify-center gap-7">
                {data.stacks.map((stack) => (
                  <img
                    key={stack.name}
                    src={stack.icon}
                    alt={stack.name}
                    className="h-6 w-6 object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PartPage;
