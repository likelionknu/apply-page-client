import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import "./MainPage.css";
import { Header, Footer } from "@shared/components";
import Sphere from "@main/components/Sphere/SphereComponent";
import Stars from "@main/components/Stars/Stars";
import MainPageTextComponent from "@main/components/MainPageTextComponent";
import {
  PartIntroduceComponent,
  PartIntroduceMobileComponent,
} from "@main/components/PartIntroduceComponent";
import {
  RightMoveContainer,
  LeftMoveContainer,
  MobileProjectCard,
} from "@main/components/MoveCard/MovingComponent";
import { FAQCard } from "@main/components/FAQComponent";

import Banner6 from "@main/assets/Banner6.png";
import Under640Banner from "@main/assets/Under640Banner.png";
import Under640Sphere1 from "@main/assets/Under640Sphere1.png";

import FigmaImg from "../assets/FigmaImg.png";
import Magnifier from "../assets/Magnifier.png";
import Folder from "../assets/Folder.png";
import Laptop from "../assets/Laptop.png";

import Book from "../assets/Book.png";
import Create from "../assets/Create.png";
import Elevate from "../assets/Elevate.png";

import LOCOCO from "@main/assets/LOCOCO.png";
import 투자가머니 from "@main/assets/투자가머니.png";
import { useState } from "react";
import type { ModalType } from "@shared/types/ModalType";
import LoginModal from "@main/components/modal/LoginModal";
import GoogleLogin from "@shared/apis/GoogleLogin";

const MainPage = () => {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1250px)" });

  const handleClick = () => {
    const hasToken = sessionStorage.getItem("accessToken");

    if (hasToken) {
      navigate("/apply");
      return;
    }

    setActiveModal("LOGIN");
  };

  return (
    <div>
      <Stars />

      <LoginModal
        isShow={activeModal === "LOGIN"}
        onClose={() => setActiveModal(null)}
        onClick={GoogleLogin}
      />

      <Header isMain={true} />
      <div className="flex w-full flex-col items-center bg-black pb-30 sm:h-1250 md:pb-0">
        <div
          className="flex h-74 w-160 justify-center bg-contain bg-center bg-no-repeat sm:h-200 sm:w-492"
          style={{
            backgroundImage: `url(${window.innerWidth < 160 ? Under640Banner : Banner6})`,
          }}
        >
          <div className="relative flex h-full w-60 flex-col items-center sm:w-137.5">
            <div className="absolute top-12 left-5 flex h-[16.736px] w-[44.723px] rotate-[32.949deg] items-center justify-center rounded-[34px] bg-[linear-gradient(90deg,#0040ff_-102.34%,#322bce_3.12%,#4d20b4_65.45%,#c98c96_154.08%,#fff9dd_223.6%)] sm:top-17 sm:left-13 sm:h-13.5 sm:w-35.75">
              <div className="flex h-[16.74px] w-[32.39px] items-center justify-between sm:h-[43.12px] sm:w-[104.32px]">
                <img
                  src={Book}
                  alt="Book"
                  className="h-[13.29px] w-[13.29px] sm:h-[42.51px] sm:w-[42.51px]"
                />
                <div className="flex h-[10.17px] w-[15.7px] items-center justify-center rounded-[20px] border-[0.25px] border-white text-[3.5px] leading-140 font-bold text-white sm:h-[32.55px] sm:w-[50.23px] sm:border sm:text-[11.2px] sm:tracking-[-0.28px]">
                  Learn
                </div>
              </div>
            </div>

            <div className="absolute top-28 left-45 flex h-[14.177px] w-[31.367px] rotate-[-30.452deg] items-center justify-center rounded-[28.409px] bg-[linear-gradient(90deg,#fff9dd_-73.97%,#c98c96_30.27%,#7946a9_100.1%)] sm:top-[265.57px] sm:left-[439.72px] sm:h-[45.366px] sm:w-[100.376px]">
              <div className="text-blue4 flex h-2.25 w-[15.25px] items-center justify-center rounded-[20px] bg-white text-[3.5px] leading-140 font-bold sm:h-[28.8px] sm:w-[48.8px] sm:p-2 sm:text-[11.2px] sm:tracking-[-0.28px]">
                Create
              </div>
              <img
                src={Create}
                alt="Book"
                className="h-[11.413px]sm:h-10 w-[11.413px] sm:w-10"
              />
            </div>

            <div className="absolute top-42.5 left-21 flex h-[12.501px] w-[31.036px] rotate-[42.499deg] items-center justify-center rounded-[28.409px] bg-[linear-gradient(90deg,#d5a6a8_0.49%,#fff9dd_113.98%)] sm:top-[470.07px] sm:left-[150.04px] sm:h-[40.005px] sm:w-[99.316px]">
              <img
                src={Elevate}
                alt="Elevate"
                className="h-[11.03px] w-[11.03px] sm:h-[35.297px] sm:w-[35.297px]"
              />
              <div className="text-pink flex h-2.25 w-4.25 items-center justify-center rounded-[20px] bg-white text-[3.5px] leading-140 font-bold sm:h-[28.8px] sm:w-[51.8px] sm:text-[11.2px] sm:tracking-[-0.28px]">
                Elevate
              </div>
            </div>

            <div className="relative mt-14 flex h-27.5 w-full flex-col items-center justify-between sm:mt-29 sm:h-84">
              <div className="bg-linear-to-b from-white from-[24.12%] to-[#769bc7] bg-clip-text text-3xl font-bold text-transparent sm:text-8xl">
                POSSIBILITY
              </div>
              <div className="bg-linear-to-b from-white from-[24.12%] to-[#769bc7] bg-clip-text text-3xl font-bold text-transparent sm:text-8xl">
                TO
              </div>
              <div className="bg-linear-to-b from-white from-[24.12%] to-[#769bc7] bg-clip-text text-3xl font-bold text-transparent sm:text-8xl">
                REALITY
              </div>
            </div>

            <div onClick={handleClick} className="ApplyNowButton">
              <span>LIKELION KNU</span>
              <span>지원하기</span>
            </div>

            <div className="mt-[33.25px] bg-[linear-gradient(180deg,#518BD5_-50%,rgba(0,0,0,0.1)_90.71%)] bg-clip-text text-center text-base leading-140 font-bold text-transparent sm:mt-26.5 sm:text-5xl sm:tracking-[-1.5px]">
              LIKELION KNU
            </div>
          </div>
        </div>

        <div className="h-[28.5px] w-full sm:h-50" />

        <div className="MainPageSecondSection">
          <MainPageTextComponent
            titleText="멋쟁이사자처럼 강남대학교"
            subText={
              <>
                멋쟁이사자처럼 대학은 테크 기반의 아이디어 실현을 위한 전국 최대
                규모의 대학 연합 창업 동아리예요. 현재 전국 83개의 대학과
                800여명의 운영진이 멋쟁이사자처럼과 함께 혁신적인 서비스를
                개발하며 개인과 사회에 의미 있는 변화가 되기를 추구해요.
              </>
            }
          ></MainPageTextComponent>
          <div className="mt-16 flex h-48 w-full items-center justify-center sm:h-200 sm:w-480">
            {isMobile ? (
              <img
                src={Under640Sphere1}
                alt="Under640Sphere1"
                className="h-48 w-48"
              />
            ) : (
              <Sphere />
            )}
          </div>
        </div>
        <div className="relative mt-18 flex w-full flex-col items-center">
          <MainPageTextComponent
            titleText="파트 소개"
            subText={
              <>
                강남대학교 멋쟁이사자처럼에는 총 4개의 파트가 존재하며, 아이디어
                실현을 위해 모든 파트가 지속적으로 소통하며 발전을 향한 발걸음을
                멈추지 않아요.
              </>
            }
          ></MainPageTextComponent>
          {isTablet ? (
            <div className="h-105 w-full max-w-225 px-7.5">
              <div className="mt-7.5 flex h-105 w-full max-w-225 flex-col items-center gap-6.25">
                <PartIntroduceMobileComponent
                  part="/PM"
                  titleText="PM"
                  titleKoreanText="기획"
                  subText="상상과 현실의 이상적인 맞물림"
                  img={Magnifier}
                />
                <PartIntroduceMobileComponent
                  titleText="DE"
                  titleKoreanText="디자인"
                  subText="끝없는 정교함과 아름다움"
                  img={FigmaImg}
                  part="/DE"
                />{" "}
                <PartIntroduceMobileComponent
                  titleText="BE"
                  titleKoreanText="백엔드"
                  subText="보이지 않는 구체화 구조의 안정성"
                  img={Folder}
                  part="/BE"
                />{" "}
                <PartIntroduceMobileComponent
                  titleText="FE"
                  titleKoreanText="프론트"
                  subText="픽셀로 구현하는 그림"
                  img={Laptop}
                  part="/FE"
                />
              </div>
            </div>
          ) : (
            <div className="mt-12.5 flex h-96 w-full items-center justify-center">
              <div className="flex w-300 justify-between">
                <PartIntroduceComponent
                  titleText="PM"
                  titleKoreanText="기획"
                  subText="상상을 현실과 이상적인 맞물림"
                  img={FigmaImg}
                  part="/PM"
                />
                <PartIntroduceComponent
                  titleText="DE"
                  titleKoreanText="디자인"
                  subText="끝없는 정교함과 아름다움"
                  img={Magnifier}
                  part="/DE"
                />
                <PartIntroduceComponent
                  titleText="BE"
                  titleKoreanText="백엔드"
                  subText="보이지 않는 구체화 구조의 안정성"
                  img={Folder}
                  part="/BE"
                />
                <PartIntroduceComponent
                  titleText="FE"
                  titleKoreanText="프론트"
                  subText="픽셀로 구현하는 그림"
                  img={Laptop}
                  part="/FE"
                />
              </div>
            </div>
          )}
        </div>
        <div className="h-19 w-full sm:h-50" />
        <div className="flex h-165 w-full flex-col items-center sm:h-225">
          <MainPageTextComponent
            titleText="프로젝트 소개"
            subText="기술의 혁신과 아이디어의 결합을 위해 매 기수마다 다양한 프로젝트를 진행해요."
          ></MainPageTextComponent>
          {isMobile ? (
            <>
              <MobileProjectCard
                img={LOCOCO}
                title="LOCOCO"
                description="AI 지역 출제 관광 / 큐레이션 서비스"
              />
              <MobileProjectCard
                img={투자가머니}
                title="투자가머니"
                description="블록체인 기반 모의 투자 서비스"
              />
            </>
          ) : (
            <>
              <RightMoveContainer />
              <LeftMoveContainer />
            </>
          )}
        </div>

        <MainPageTextComponent
          titleText="FAQ"
          subText="자주 묻는 질문을 둘러보세요"
        ></MainPageTextComponent>
        <div className="flex w-full items-center justify-center px-5">
          <div className="mx-auto mt-14.5 flex w-full max-w-248 flex-col gap-4 sm:gap-8">
            <FAQCard
              question="Q. 동아리 활동을 하려면 노트북이 필요한가요?"
              answer="A. 동아리 특성상, 개인 노트북이 없으면 활동에 여러 제한이 따라 모든 파트는 노트북이 필요합니다."
            />
            <FAQCard
              question="Q. 저는 코딩을 해보고싶은 비전공자인데, 동아리에 들어갈 수 있을까요?"
              answer="A. 강남대학교 멋쟁이사자처럼은 실력이 아닌, 열정으로 동아리에 임하실 분들을 찾고 있습니다."
            />
            <FAQCard
              question="Q. 다양한 활동을 하는데 전부 참여해야하나요?"
              answer="A. 멋쟁이사자처럼은 기수 단위로 운영되므로, 수료증을 발급을 위한 활동들은 필참하셔야 합니다.
     수료를 위한 활동에는 중앙 아이디어톤과 해커톤, 파트별 세션과 2학기 연합 행사가 있습니다."
            />
            <FAQCard
              question="Q. 주요 활동인 세션은 무엇인가요?"
              answer="A. 세션이란 각 파트별로 운영진이 진행하는 강의를 의미합니다. 모든 파트들은 10주차 내외 진행되는
     강의를 진행하며 불가피한 사유를 제외한 결석을 허용하고 있지 않습니다."
            />
            <FAQCard
              question="Q. 모든 파트를 전부 지원해도 괜찮나요?"
              answer="A. 수료증을 발급을 위해 활동할 수 있는 파트는 하나로 제한되어 있고, 아기사자의 의사에 따라 타 파트
     세션을 듣는 것은 가능합니다."
            />
            <FAQCard
              question="Q. 입부 절차가 궁금해요!"
              answer="A. 강남대학교 멋쟁이사자처럼의 입부 절차는 서류 - 면접 - 결과 발표로 진행되고, 지원부터 최종 결과
     발표까지 약 3주의 시간이 소요됩니다."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
