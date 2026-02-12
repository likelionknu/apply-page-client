import { useNavigate } from "react-router-dom";
import "./MainPage.css";
import { Header, Footer } from "@shared/components";
import Sphere from "@main/components/Sphere/SphereComponent";
import Stars from "@main/components/Stars/Stars";
import MainPageTextComponent from "@main/components/MainPageTextComponent";
import PartIntroduceComponent from "@main/components/PartIntroduceComponent";
import {
  RightMoveContainer,
  LeftMoveContainer,
} from "@main/components/MoveCard/MovingComponent";
import { FAQCard } from "@main/components/FAQComponent";

import Banner6 from "@main/assets/Banner6.png";

import FigmaImg from "../assets/FigmaImg.png";
import Magnifier from "../assets/Magnifier.png";
import Folder from "../assets/Folder.png";
import Laptop from "../assets/Laptop.png";

import Book from "../assets/Book.png";
import Create from "../assets/Create.png";
import Elevate from "../assets/Elevate.png";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden select-none">
      <Stars />
      <Header />
      <div className="flex h-1250 w-full flex-col items-center bg-black">
        <div
          className="flex h-200 w-492 justify-center bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Banner6})` }}
        >
          <div className="relative flex h-full w-137.5 flex-col items-center">
            <div className="absolute top-17 left-13 flex h-13.5 w-35.75 rotate-[32.949deg] items-center justify-center rounded-[34px] bg-[linear-gradient(90deg,#0040ff_-102.34%,#322bce_3.12%,#4d20b4_65.45%,#c98c96_154.08%,#fff9dd_223.6%)]">
              <div className="flex h-[43.12px] w-[104.32px] items-center justify-between">
                <img src={Book} alt="Book" className="w-[42.51px h-[42.51px]" />
                <div className="LearnIcon">Learn</div>
              </div>
            </div>
            <div className="ContentCreate">
              <div className="CreateIcon">Create</div>
              <img src={Create} alt="Book" className="h-10 w-10" />
            </div>
            <div className="ContentElevate">
              <img
                src={Elevate}
                alt="Elevate"
                className="h-[35.297px] w-[35.297px]"
              />
              <div className="ElevateIcon">Elevate</div>
            </div>
            <div className="relative mt-29 flex h-84 w-full flex-col items-center justify-between">
              <div className="bg-linear-to-b from-white from-[24.12%] to-[#769bc7] bg-clip-text text-8xl font-bold text-transparent">
                POSSIBILITY
              </div>
              <div className="bg-linear-to-b from-white from-[24.12%] to-[#769bc7] bg-clip-text text-8xl font-bold text-transparent">
                TO
              </div>
              <div className="bg-linear-to-b from-white from-[24.12%] to-[#769bc7] bg-clip-text text-8xl font-bold text-transparent">
                REALITY
              </div>
            </div>
            <div onClick={() => navigate("/apply")} className="ApplyNowButton">
              <span>LIKELION KNU</span>
              <span>지원하기</span>
            </div>
            <div className="mt-26.5 bg-[linear-gradient(180deg,#518BD5_-50%,rgba(0,0,0,0.1)_90.71%)] bg-clip-text text-center text-5xl leading-140 font-bold tracking-[-1.5px] text-transparent">
              LIKELION KNU
            </div>
          </div>
        </div>

        <div className="h-50 w-full" />

        <div className="MainPageSecondSection">
          <MainPageTextComponent
            titleText="멋쟁이사자처럼 강남대학교"
            subText={
              <>
                멋쟁이사자처럼 대학은 테크 기반의 아이디어 실현을 위한 전국 최대
                규모의 대학 연합 창업 동아리예요.
                <br /> 현재 전국 83개의 대학과 800여명의 운영진이
                멋쟁이사자처럼과 함께 혁신적인 서비스를 개발하며 개<br />
                인과 사회에 의미 있는 변화가 되기를 추구해요.
              </>
            }
          ></MainPageTextComponent>
          <div className="flex h-200 w-480 items-center justify-center">
            <Sphere />
          </div>
        </div>
        <div className="relative mt-18 w-full">
          <MainPageTextComponent
            titleText="파트 소개"
            subText={
              <>
                강남대학교 멋쟁이사자처럼에는 총 4개의 파트가 존재하며, 아이디어
                실현을 위해
                <br />
                모든 파트가 지속적으로 소통하며 발전을 향한 발걸음을 멈추지
                않아요.
              </>
            }
          ></MainPageTextComponent>
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
        </div>
        <div className="h-50 w-full" />
        <div className="flex h-225 w-full flex-col items-center">
          <MainPageTextComponent
            titleText="프로젝트 소개"
            subText="기술의 혁신과 아이디어의 결합을 위해 매 기수마다 다양한 프로젝트를 진행해요."
          ></MainPageTextComponent>
          <RightMoveContainer />
          <LeftMoveContainer />
        </div>

        <MainPageTextComponent
          titleText="FAQ"
          subText="자주 묻는 질문을 둘러보세요"
        ></MainPageTextComponent>
        <div className="items mt-14.5 flex flex-col gap-8">
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
      <Footer />
    </div>
  );
};

export default MainPage;
