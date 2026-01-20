import "../pages/main.css";
import Header from "../../../shared/components/Header";
import EarthSphere from "./TestEarth";

import FigmaImg from "@/assets/images/FigmaImg.png";
import Magnifier from "@/assets/images/Magnifier.png";
import Folder from "@/assets/images/Folder.png";
import Laptop from "@/assets/images/Laptop.png";
import Knock from "@/assets/images/Knock.png";
import 가봄 from "@/assets/images/가봄.png";
import MarketBee from "@/assets/images/MarketBee.png";
import Rerise from "@/assets/images/Rerise.png";
import Lococo from "@/assets/images/Lococo.png";
import 잔치 from "@/assets/images/잔치.png";
import TestStars from "./StarTest";

const MainPage = () => {
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
  }

  const PartIntroduceComponent = ({
    titleText,
    titleKoreanText,
    subText,
    img,
  }: PartIntroduceComponentProps) => {
    return (
      <div className="flex h-111.5 w-83.25 flex-col items-center justify-between">
        <div className="flex h-72 w-80 items-center justify-center rounded-[44px] border border-white bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,rgba(0,112.05,255,0.49)_3%,rgba(0,67.23,153,0.06)_100%)] shadow-[0px_5px_20px_4px_rgba(158,216,245,0.53)]">
          <img src={img} />
        </div>
        <div className="flex h-28.75 w-75 flex-col justify-between">
          <div className="flex flex-row items-baseline justify-start">
            <div className="font-pretendard bg-linear-to-r from-white to-[#9EEAFF] bg-clip-text text-center text-[42px] leading-[140%] font-bold tracking-[-0.025em] text-transparent">
              {titleText}
            </div>
            <div className="font-pretendard ml-3.5 text-center text-[22px] leading-5.75 font-medium text-white">
              {titleKoreanText}
            </div>
          </div>
          <div className="font-pretendard flex bg-linear-to-r from-white to-[#999999] bg-clip-text text-center text-[20px] leading-5.75 font-bold text-transparent">
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
      <div className="MovingItemContainer">
        <div className="MovingItemTitle">{titleText}</div>
        <img src={img} />
        <div className="MovingItemSub">{subText}</div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div className="MainPageFrame">
        <div className="flex h-309.25 w-480 flex-col">
          <div className="relative flex h-270 w-480 bg-black">
            <TestStars />
            <div className="absolute top-42.25 h-115 w-115 rotate-[-140.22deg] rounded-full bg-[linear-gradient(76deg,#FFF_14.95%,var(--Color,#518BD5)_36.99%,rgba(0,0,0,0)_79.01%)] [mask:radial-gradient(circle,transparent_70%,black_71%)]" />
          </div>
          <div className="flex h-39.25 w-480 bg-amber-200"></div>
        </div>
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
        <div className="PartIntroduceSection">
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
          <div className="PartIntroduceSectionContainer">
            <PartIntroduceComponent
              titleText="PM"
              titleKoreanText="기획"
              subText="상상을 현실과 이상적인 맞물림"
              img={FigmaImg}
            />
            <PartIntroduceComponent
              titleText="DE"
              titleKoreanText="디자인"
              subText="끝없는 정교함과 아름다움"
              img={Magnifier}
            />
            <PartIntroduceComponent
              titleText="BE"
              titleKoreanText="백엔드"
              subText="보이지 않는 구체화, 구조의 안정성"
              img={Folder}
            />
            <PartIntroduceComponent
              titleText="FE"
              titleKoreanText="프론트"
              subText="픽셀로 구현하는 그림"
              img={Laptop}
            />
          </div>
        </div>
        <div className="MainPageSpaceTwo"></div>
        <div className="ProjectIntroduceSection">
          <MainPageTextComponent
            titleText="프로젝트 소개"
            subText="기술의 혁신과 아이디어의 결합을 위해 매 기수마다 다양한 프로젝트를 진행해요."
          ></MainPageTextComponent>
          <div className="MainPageSpaceOne" />
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
          </MovingContainer>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
