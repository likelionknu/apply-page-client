import { useNavigate } from "react-router-dom";
import "./MainPage.css";
import Header from "@shared/components/Header";
import Footer from "@shared/components/Footer";
import EarthSphere from "@main/components/MainPageEarth";
import MainStars from "@main/components/MainPageStars";

import FigmaImg from "@main/assets/FigmaImg.png";
import Magnifier from "@main/assets/Magnifier.png";
import Folder from "@main/assets/Folder.png";
import Laptop from "@main/assets/Laptop.png";
import Knock from "@main/assets/Knock.png";
import 가봄 from "@main/assets/가봄.png";
import MarketBee from "@main/assets/MarketBee.png";
import Rerise from "@main/assets/Rerise.png";
import Lococo from "@main/assets/Lococo.png";
import 잔치 from "@main/assets/잔치.png";
import Background from "@main/assets/Background.png";
import CheckPattern from "@main/assets/CheckPattern.png";
import Circle0 from "@main/assets/Circle0.png";
import Circle1 from "@main/assets/Circle1.png";
import Circle2 from "@main/assets/Circle2.png";
import Circle3 from "@main/assets/Circle3.png";
import Circle4 from "@main/assets/Circle4.png";
import ConstellationOne from "@main/assets/ConstellationOne.png";
import ConstellationTwo from "@main/assets/ConstellationTwo.png";
import Book from "@main/assets/Book.png";
import Create from "@main/assets/Create.png";
import Elevate from "@main/assets/Elevate.png";

const MainPage = () => {
  const navigate = useNavigate();

  interface MainPageTextComponentProps {
    titleText: string;
    subText: React.ReactNode;
  }

  const MainPageTextComponent = ({
    titleText,
    subText,
  }: MainPageTextComponentProps) => {
    return (
      <div className="flex flex-col items-center justify-center gap-7.5 text-white">
        <div className="font-pretendard text-center text-[48px] leading-[140%] font-semibold tracking-[-0.025em]">
          {titleText}
        </div>

        <div className="font-inter text-center text-[24px] leading-[140%] font-medium tracking-[-0.025em]">
          {subText}
        </div>
      </div>
    );
  };

  interface PartIntroduceComponentProps {
    titleText: string;
    titleKoreanText: string;
    subText: string;
    img: string;
    part: string;
  }

  const PartIntroduceComponent = ({
    titleText,
    titleKoreanText,
    subText,
    img,
    part,
  }: PartIntroduceComponentProps) => {
    const handleClick = () => {
      navigate(`/part/${part}`);
    };

    return (
      <div
        onClick={handleClick}
        className="group flex h-111.5 w-83.25 cursor-pointer flex-col items-center justify-between bg-black transition-all duration-300 ease-out hover:scale-[1.08]"
      >
        <div className="flex h-72 w-80 items-center justify-center rounded-[44px] border border-white bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,rgba(0,112.05,255,0.49)_3%,rgba(0,67.23,153,0.06)_100%)] shadow-[0px_5px_20px_4px_rgba(158,216,245,0.53)] transition-all duration-300 group-hover:shadow-[0px_10px_40px_8px_rgba(118,203,246,0.6)]">
          <img
            src={img}
            alt={titleText}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="flex h-28.75 w-75 flex-col justify-between">
          <div className="flex flex-row items-baseline">
            <div className="bg-linear-to-r from-white to-[#9EEAFF] bg-clip-text text-[42px] font-bold text-transparent">
              {titleText}
            </div>

            <div className="ml-3.5 text-[22px] leading-5.75 font-medium text-white transition-colors duration-300 group-hover:text-[#9EEAFF]">
              {titleKoreanText}
            </div>
          </div>

          <div className="bg-linear-to-r from-white to-[#999999] bg-clip-text text-[20px] font-bold text-transparent transition-opacity duration-300 group-hover:opacity-80">
            {subText}
          </div>
        </div>
      </div>
    );
  };

  type MovingContainerProps = {
    children: React.ReactNode;
  };

  const MovingContainer = ({ children }: MovingContainerProps) => {
    return (
      <div className="relative flex h-100.5 w-480 items-center overflow-hidden bg-black">
        {children}
      </div>
    );
  };

  interface MovingItemProps {
    delay: number;
    children: React.ReactNode;
  }

  const MovingRightItem = ({ children, delay }: MovingItemProps) => {
    return (
      <div
        className="MovingRightBox"
        style={{
          animationDelay: `-${delay}s`,
        }}
      >
        {children}
      </div>
    );
  };

  const MovingLeftItem = ({ children, delay }: MovingItemProps) => {
    return (
      <div
        className="MovingLeftItem"
        style={{
          animationDelay: `-${delay}s`,
        }}
      >
        {children}
      </div>
    );
  };

  interface MovingItemContainer {
    titleText: string;
    subText: string;
    img: string;
  }

  const MovingItemContainer = ({
    titleText,
    subText,
    img,
  }: MovingItemContainer) => {
    return (
      <div className="relative flex h-[262px] w-[450px] items-center justify-center">
        <div className="absolute top-0 bg-[linear-gradient(178.98deg,#62e1ef_-4.89%,#7ac7f7_18.12%,#92adff_46.03%)] bg-clip-text text-[36px] leading-[100%] font-semibold tracking-[-0.03em] text-transparent">
          {titleText}
        </div>
        <img src={img} />
        <div className="absolute bottom-0 text-[14px] leading-[18px] text-white">
          {subText}
        </div>
      </div>
    );
  };

  interface FAQBoxProps {
    question: string;
    answer: string;
  }

  const FAQBox = ({ question, answer }: FAQBoxProps) => {
    return (
      <div className="flex h-[200px] w-[1324px] items-center justify-center rounded-[44px] border border-white shadow-[0_5px_20px_4px_rgba(158,216,245,0.53)]">
        <div className="flex h-[150px] w-[1200px] flex-col">
          <div className="mb-[15px] bg-[linear-gradient(90deg,#FFF_0%,#0054C4_98.1%)] bg-clip-text text-[30px] font-medium text-transparent">
            {question}
          </div>
          <div className="text-[30px] font-medium text-transparent text-white">
            {answer}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black1 flex min-h-screen w-full flex-col items-center overflow-hidden select-none">
      <Header />
      <div className="bg-back flex h-1675 w-360 flex-col items-center overflow-hidden">
        <div className="relative flex h-[1100px] w-full max-w-[1440px] items-center justify-center">
          <img
            src={Background}
            className="absolute inset-0 h-full w-360"
            alt="background"
          />
          <div className="absolute top-[50px] h-[1005px] w-full">
            <img
              src={CheckPattern}
              className="absolute inset-0 h-full w-full object-cover"
              alt="CheckPattern"
            />
          </div>
          <MainStars />
          <img
            src={Circle0}
            className="] absolute top-[133px] left-[0px]"
            alt="Circle1"
          />
          <img
            src={Circle1}
            className="absolute top-[445px] left-[220px]"
            alt="Circle1"
          />
          <img
            src={Circle2}
            className="absolute top-[236px] left-[1290px]"
            alt="Circle2"
          />{" "}
          <img
            src={Circle3}
            className="absolute top-[180px] left-[1340px]"
            alt="Circle3"
          />{" "}
          <img
            src={Circle4}
            className="absolute top-[447px] left-[1397px]"
            alt="Circle4"
          />
          <img
            src={ConstellationOne}
            className="absolute top-[199px] left-[412px]"
            alt="ConstellationOne"
          />
          <img
            src={ConstellationTwo}
            className="absolute top-[152px] left-[1230px]"
            alt="ConstellationTwo"
          />
          <div className="ContentLearn">
            <div className="ContentLearnInner">
              <img src={Book} alt="Book" />
              <div className="LearnIcon">Learn</div>
            </div>
          </div>
          <div className="ContentCreate">
            <div className="CreateIcon">Create</div>
            <img src={Create} alt="Book" />
          </div>
          <div className="ContentElevate">
            <img src={Elevate} alt="Elevate" />
            <div className="ElevateIcon">Elevate</div>
          </div>
          <div className="absolute top-[250px] flex h-[875px] w-[700px] flex-col items-center justify-between">
            <div className="flex h-[658px] w-[700px] flex-col items-center justify-between">
              <div className="flex h-[390px] w-full flex-col items-center justify-between">
                <div className="POSSIBILITY">POSSIBILITY</div>
                <div className="TO">TO</div>
                <div className="REALITY">REALITY</div>
              </div>
              <div
                onClick={() => navigate("/apply")}
                className="ApplyNowButton"
              >
                <span className="text-[24.221px] leading-8 font-bold">
                  LIKELION KNU
                </span>
                <span className="text-[24.221px] font-medium">지원하기</span>
              </div>
            </div>
            <div className="bg-[linear-gradient(180deg,#518BD5_-50%,rgba(0,0,0,0.1)_90.71%)] bg-clip-text text-center text-[60px] leading-[140%] font-bold tracking-[-1.5px] text-transparent">
              LIKELION KNU
            </div>
          </div>
        </div>

        <div className="h-[200px] w-full" />

        <div className="MainPageSecondSection">
          <MainPageTextComponent
            titleText="멋쟁이사자처럼 강남대학교"
            subText={
              <>
                멋쟁이사자처럼 대학은 테크 기반의 아이디어 실현을 위한 전국 최대
                규모의 대학 연합 창업 동아리예요. 현재 전국 60개의 대학과
                <br />
                500여명의 운영진이 멋쟁이사자처럼과 함께 혁신적인 서비스를
                개발하며 개인과 사회에 의미 있는 변화가 되기를 추구해요.
              </>
            }
          ></MainPageTextComponent>
          <div className="flex h-219 w-480 items-center justify-center">
            <EarthSphere />
          </div>
        </div>
        <div className="w-full">
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
          <div className="mt-[120px] flex h-[446px] w-full justify-around">
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
              subText="보이지 않는 구체화, 구조의 안정성"
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
        <div className="h-[200px] w-full"></div>
        <div className="flex h-[1260px] w-full flex-col items-center">
          <MainPageTextComponent
            titleText="프로젝트 소개"
            subText="기술의 혁신과 아이디어의 결합을 위해 매 기수마다 다양한 프로젝트를 진행해요."
          ></MainPageTextComponent>
          <div className="h-[200px] w-full" />
          <MovingContainer>
            <MovingRightItem delay={0}>
              <MovingItemContainer
                titleText="Knock"
                subText="등기부등본 분석 기반 전세사기 예방 AI 서비스 "
                img={Knock}
              />
            </MovingRightItem>
            <MovingRightItem delay={4}>
              <MovingItemContainer
                titleText="가봄"
                subText="AI 추천 및 방문인증 스탬프 수집 지역 경제 활성화 플랫폼"
                img={가봄}
              />
            </MovingRightItem>
            <MovingRightItem delay={8}>
              <MovingItemContainer
                titleText="market Bee"
                subText=" 소상공인을 위한 마케팅 및 관리 플랫폼"
                img={MarketBee}
              />
            </MovingRightItem>
            <MovingRightItem delay={12}>
              <MovingItemContainer
                titleText="Rerise"
                subText="은둔청년의 일상 회복을 돕는 서비스"
                img={Rerise}
              />
            </MovingRightItem>
            <MovingRightItem delay={16}>
              <MovingItemContainer
                titleText="가봄"
                subText="AI 추천 및 방문인증 스탬프 수집 지역 경제 활성화 플랫폼"
                img={가봄}
              />
            </MovingRightItem>
          </MovingContainer>
          <MovingContainer>
            <MovingLeftItem delay={0}>
              <MovingItemContainer
                titleText="Knock"
                subText="등기부등본 분석 기반 전세사기 예방 AI 서비스 "
                img={Knock}
              />
            </MovingLeftItem>
            <MovingLeftItem delay={4}>
              <MovingItemContainer
                titleText="Lococo"
                subText="AI 지역 출제 관광 / 큐레이션 서비스"
                img={Lococo}
              />
            </MovingLeftItem>
            <MovingLeftItem delay={8}>
              <MovingItemContainer
                titleText="잔치"
                subText=" 개인 맞춤형 축제 및 여행 코스 추천 플랫폼"
                img={잔치}
              />
            </MovingLeftItem>
            <MovingLeftItem delay={12}>
              <MovingItemContainer
                titleText="Rerise"
                subText="은둔청년의 일상 회복을 돕는 서비스"
                img={Rerise}
              />
            </MovingLeftItem>
            <MovingLeftItem delay={16}>
              <MovingItemContainer
                titleText="Lococo"
                subText="AI 지역 출제 관광 / 큐레이션 서비스"
                img={Lococo}
              />
            </MovingLeftItem>
          </MovingContainer>
          <div onClick={() => navigate("/project")} className="MoreButton">
            더보기
          </div>
        </div>
        <div className="h-[200px] w-full" />
        <div className="mb-[120px] text-[50px] font-semibold text-white">
          FAQ
        </div>
        <div className="flex h-[1550px] w-[1330px] flex-col items-center justify-between">
          <FAQBox
            question="Q. 동아리 활동을 하려면 노트북이 필요한가요?"
            answer="A. 동아리 특성상, 개인 노트북이 없으면 활동에 여러 제한이 따라 모든 파트는 노트북이 필요합니다."
          />
          <FAQBox
            question="Q. 저는 코딩을 해보고싶은 비전공자인데, 동아리에 들어갈 수 있을까요?"
            answer="A. 강남대학교 멋쟁이사자처럼은 실력이 아닌, 열정으로 동아리에 임하실 분들을 찾고 있습니다.
     코딩을 전혀 접해보지 않으신 비전공자분들도 활동 가능합니다."
          />
          <FAQBox
            question="Q. 다양한 활동을 하는데 전부 참여해야하나요?"
            answer="A. 멋쟁이사자처럼은 기수 단위로 운영되므로, 수료증을 발급을 위한 활동들은 필참하셔야 합니다.
     수료를 위한 활동에는 중앙 아이디어톤과 해커톤, 파트별 세션과 2학기 연합 행사가 있습니다."
          />
          <FAQBox
            question="Q. 주요 활동인 세션은 무엇인가요?"
            answer="A. 세션이란 각 파트별로 운영진이 진행하는 강의를 의미합니다. 모든 파트들은 10주차 내외 진행되는
     강의를 진행하며 불가피한 사유를 제외한 결석을 허용하고 있지 않습니다."
          />
          <FAQBox
            question="Q. 모든 파트를 전부 지원해도 괜찮나요?"
            answer="A. 수료증을 발급을 위해 활동할 수 있는 파트는 하나로 제한되어 있고, 아기사자의 의사에 따라 타 파트
     세션을 듣는 것은 가능합니다."
          />
          <FAQBox
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
