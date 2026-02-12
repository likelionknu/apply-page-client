import "@main/components/MoveCard/MovingComponent.css";

import NewsPect from "@main/assets/NewsPect.png";
import LOCOCO from "@main/assets/LOCOCO.png";
import 잔치 from "@main/assets/잔치.png";
import 가봄 from "@main/assets/가봄.png";
import 투자가머니 from "@main/assets/투자가머니.png";
import Knock from "@main/assets/Knock.png";
import Market from "@main/assets/Market.png";
import Rerise from "@main/assets/Rerise.png";

export interface ProjectCardProps {
  img: string;
  title: string;
  description: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  title,
  description,
}) => {
  return (
    <div className="project-card-wrapper">
      <div className="project-card-inner">
        <div className="project-card-image">
          <img src={img} alt={title} />
        </div>

        <div className="project-card-title">{title}</div>

        <div className="project-card-description">{description}</div>
      </div>
    </div>
  );
};

export const RightMoveContainer = () => {
  return (
    <div className="mt-12.5 h-64 w-1000 overflow-hidden">
      <div className="slide-track">
        <ProjectCard
          img={NewsPect}
          title="NewsPect"
          description="다각도 뉴스 큐레이션 플랫폼"
        />
        <ProjectCard
          img={투자가머니}
          title="투자가머니"
          description="블록체인 기반 모의 투자 서비스"
        />
        <ProjectCard
          img={Knock}
          title="Knock"
          description="등기부등본 분석 기반 전세사기 예방 AI 서비스"
        />
        <ProjectCard
          img={Rerise}
          title="Rerise"
          description="은둔청년의 일상 회복을 돕는 서비스"
        />
        <ProjectCard
          img={Market}
          title="Market Bee"
          description="소상공인을 위한 마케팅 및 관리 플랫폼"
        />
        <ProjectCard
          img={가봄}
          title="가봄"
          description="AI 추천 및 방문인증 스탬프 수집 지역 경제 활성화 플랫폼"
        />
        <ProjectCard
          img={잔치}
          title="잔치"
          description="개인 맞춤형 축제 및 여행 코스 추천 플랫폼"
        />
        <ProjectCard
          img={LOCOCO}
          title="LOCOCO"
          description="AI 지역 출제 관광 / 큐레이션 서비스"
        />
        <ProjectCard
          img={NewsPect}
          title="NewsPect"
          description="다각도 뉴스 큐레이션 플랫폼"
        />
        <ProjectCard
          img={투자가머니}
          title="투자가머니"
          description="블록체인 기반 모의 투자 서비스"
        />
        <ProjectCard
          img={Knock}
          title="Knock"
          description="등기부등본 분석 기반 전세사기 예방 AI 서비스"
        />
        <ProjectCard
          img={Rerise}
          title="Rerise"
          description="은둔청년의 일상 회복을 돕는 서비스"
        />
        <ProjectCard
          img={Market}
          title="Market Bee"
          description="소상공인을 위한 마케팅 및 관리 플랫폼"
        />
        <ProjectCard
          img={가봄}
          title="가봄"
          description="AI 추천 및 방문인증 스탬프 수집 지역 경제 활성화 플랫폼"
        />
        <ProjectCard
          img={잔치}
          title="잔치"
          description="개인 맞춤형 축제 및 여행 코스 추천 플랫폼"
        />
        <ProjectCard
          img={LOCOCO}
          title="LOCOCO"
          description="AI 지역 출제 관광 / 큐레이션 서비스"
        />
      </div>
    </div>
  );
};

export const LeftMoveContainer = () => {
  return (
    <div className="mt-12.5 h-64 w-1000 overflow-hidden">
      <div className="slide-track-left">
        <ProjectCard
          img={NewsPect}
          title="NewsPect"
          description="다각도 뉴스 큐레이션 플랫폼"
        />
        <ProjectCard
          img={투자가머니}
          title="투자가머니"
          description="블록체인 기반 모의 투자 서비스"
        />
        <ProjectCard
          img={Knock}
          title="Knock"
          description="등기부등본 분석 기반 전세사기 예방 AI 서비스"
        />
        <ProjectCard
          img={Rerise}
          title="Rerise"
          description="은둔청년의 일상 회복을 돕는 서비스"
        />
        <ProjectCard
          img={Market}
          title="Market Bee"
          description="소상공인을 위한 마케팅 및 관리 플랫폼"
        />
        <ProjectCard
          img={가봄}
          title="가봄"
          description="AI 추천 및 방문인증 스탬프 수집 지역 경제 활성화 플랫폼"
        />
        <ProjectCard
          img={잔치}
          title="잔치"
          description="개인 맞춤형 축제 및 여행 코스 추천 플랫폼"
        />
        <ProjectCard
          img={LOCOCO}
          title="LOCOCO"
          description="AI 지역 출제 관광 / 큐레이션 서비스"
        />
        <ProjectCard
          img={NewsPect}
          title="NewsPect"
          description="다각도 뉴스 큐레이션 플랫폼"
        />
        <ProjectCard
          img={투자가머니}
          title="투자가머니"
          description="블록체인 기반 모의 투자 서비스"
        />
        <ProjectCard
          img={Knock}
          title="Knock"
          description="등기부등본 분석 기반 전세사기 예방 AI 서비스"
        />
        <ProjectCard
          img={Rerise}
          title="Rerise"
          description="은둔청년의 일상 회복을 돕는 서비스"
        />
        <ProjectCard
          img={Market}
          title="Market Bee"
          description="소상공인을 위한 마케팅 및 관리 플랫폼"
        />
        <ProjectCard
          img={가봄}
          title="가봄"
          description="AI 추천 및 방문인증 스탬프 수집 지역 경제 활성화 플랫폼"
        />
        <ProjectCard
          img={잔치}
          title="잔치"
          description="개인 맞춤형 축제 및 여행 코스 추천 플랫폼"
        />
        <ProjectCard
          img={LOCOCO}
          title="LOCOCO"
          description="AI 지역 출제 관광 / 큐레이션 서비스"
        />
      </div>
    </div>
  );
};
