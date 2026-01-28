import { useState } from "react";
import Header from "../../../shared/components/Header";
import "./project.css";

import farmtoImg from "../assets/11th/farmto.png";
import dlifeboatImg from "../assets/11th/dlifeboat.png";
import investmoneyImg from "../assets/11th/investmoney.png";
import safetyImg from "../assets/11th/safety.png";
import coinshooterImg from "../assets/11th/coinshooter.png";
import mimikiImg from "../assets/11th/mimiki.png";
import seniormondImg from "../assets/11th/seniormond.png";
import chellengersImg from "../assets/11th/challengers.png";
import applyImg from "../assets/11th/apply.png";
import nodeImg from "../assets/12th/node.png";
import promptfriendImg from "../assets/12th/promptfriend.png";
import freshtimeImg from "../assets/12th/fresh-time.png";
import time2doImg from "../assets/12th/time2do.png";
import nespectImg from "../assets/12th/newspect.png";
import knockImg from "../assets/13th/knock.png";
import gabomImg from "../assets/13th/gabom.png";
import marketbeeImg from "../assets/13th/marketbee.png";
import reriseImg from "../assets/13th/rerise.png";
import festivalImg from "../assets/13th/festival.png";
import lococoImg from "../assets/13th/lococo.png";

type Generation = 11 | 12 | 13;
type CardLayout = "split" | "center";

interface ProjectCard {
  id: string;
  generation: Generation;
  title: string;
  subtitle: string;
  description: string;
  layout?: CardLayout;
}

const PROJECTS: ProjectCard[] = [
  {
    id: "11-farmto",
    generation: 11,
    title: "팜투마켓",
    subtitle: "소외계층 중개 커뮤니티 시스템",
    description:
      "온라인 거래가 없으면 수익을 내기 어려운 현대 사회에서 전자기기 사용에 어려움을 겪는 노년층은 온라인 시장에서 자연스레 소외된다. 이처럼 소외계층 중심으로 기획된 농산물 공급자와 판매자를 중개 해주는 웹 커뮤니티 시스템 팜투마켓입니다.",
    layout: "split",
  },
  {
    id: "11-dlifeboat",
    generation: 11,
    title: "D.LIFEBOAT",
    subtitle: "여행 정보 검색 챗봇",
    description:
      "방대한 정보의 홍수 속에서, 사용자가 정확하고 원하는 여행 정보만을 필요로할 때 사용할 수 있는 chatgpt 챗봇 형태의 서비스 입니다. 사용자가 입력한 키워드를 기반으로 유튜브 영상까지 추천해줍니다.",
    layout: "split",
  },
  {
    id: "11-investmoney",
    generation: 11,
    title: "투자가머니",
    subtitle: "블록체인 기반 모의 투자 서비스",
    description:
      "라인연령제한, 지식부족, 자금부족, 사전에 정의되지 않은 주식 시장만의 용어로 인해 금융 투자에 어려움 느껴 시도조차 못하거나, 포기한 잘파세대들을 위한 블록체인 거래 기반 모의 주식 서비스 투자가머니 입니다.",
    layout: "split",
  },

  {
    id: "11-safety",
    generation: 11,
    title: "안전행",
    subtitle: "여행 안전 정보 공유 플랫폼",
    description:
      "외교부 정보를 바탕으로 여행 경보 단계 확인, 유의할 점 제시 등 해외 안전 정보를 사용자에게 간단하고 알기 쉽게 전달하며, 안전 커뮤니티를 통해 모든 유저가 서로 안전 정보를 공유 할 수 있는 서비스 입니다.",
    layout: "split",
  },
  {
    id: "11-coinshooter",
    generation: 11,
    title: "코인슈터",
    subtitle: "암호화폐 학습 웹 서비스",
    description: "진입 장벽이 높은 가상화폐 거래, '디지털 격차'를 해소하기 위해 '암호화폐'와 '가상화폐 거래소 이용 방법에 대한 다양한 문제들을 사용자가 직접 풀어보며 단순히 지식 전달이 아닌 지식 학습이 가능한 웹 서비스 코인슈터입니다.",
    layout: "split",
  },
  {
    id: "11-mimiki",
    generation: 11,
    title: "미미키",
    subtitle: "언어 격차 극복 켜뮤니티",
    description: "세대 간의 깊어지는 언어 격차를 극복하고자 기획한 서비스입니다. 예전에 사용했던 용어, 현재 뜨는 밈 등 세대가 지나며 새로 생긴 모든 유행어들을 모아 놓은 웹 커뮤니티 서비스 미미키입니다.",
    layout: "split",
  },
  {
    id: "11-seniormond",
    generation: 11,
    title: "시니어몬드",
    subtitle: "시니어 UI 교육 멘토 플랫폼",
    description: "시니어몬드는 어르신들을 고려하지 않고 UI를 단순히 제공하기만 하는 현 시대의 문제점을 발견하였습니다. 아무리 좋은 UX여도 사용하는 방법 자체가 어려운 어르신들께서 UI 교육을 제공하는 교육 멘토 플랫폼을 개발하였습니다.",
    layout: "split",
  },

  {
    id: "11-chellengers",
    generation: 11,
    title: "Chellengers",
    subtitle: "사이드 프로젝트 추적 저장소",
    description: "교내의 사이드 프로젝트 추적이 가능한 저장소 서비스입니다. 현재 교내 부재인 저장소 서비스를 구축함에 따라 멋사 일원 뿐만 아니라 전교 학생들의 사이드 프로젝트 참여율과 동기부여를 높이고, 학교의 개발 문화도 외부로 알릴 수 있는 메리트가 있습니다.",
    layout: "split",
  },
  {
    id: "11-apply",
    generation: 11,
    title: "Apply",
    subtitle: "멋쟁이사자처럼 지원 페이지",
    description: "강대 멋사만의 아기사자들을 모집하기 위해 필요한 지원 페이지를 지속 가능하게 개발하는 팀입니다. 예비 아기사자들을 위한 지원 페이지부터, 유저의 정보, 권한을 수정하고 지원서를 보며 결과를 정하는 운영진 페이지까지 제작합니다.",
    layout: "split",
  },
  {
    id: "12-node",
    generation: 12,
    title: "Node",
    subtitle: "4D블럭 기반 AI 치매 예방 서비스",
    description: "Node는 치매 예방 및 증세 완화 서비스로, 4D블럭이라는 별도의 매개체와 AI의 이미지 학습을 통해 사용자가 여러가지 블럭을 조합하고 정확도를 평가하고 기록해나가는 서비스입니다.그 외에 숫자 맞추기, 그림 맞추기와 일기 작성, 치매 진단 평가 등의 기능을 통해 사용자의 증상 파악과 완화에 초점을 맞춘 치매 관리 및 예방 서비스입니다.",
    layout: "split",
  },
  {
    id: "12-promptfriend",
    generation: 12,
    title: "프롬프렌",
    subtitle: "AI 프롬포트 공유 플랫폼",
    description: "프롬프렌은 AI 사용이 어려운 사람들도 효과적으로 사용할 수 있도록 돕는 프롬포트 공유 서비스입니다. 다양한 카테고리의 프롬포트를 검색하고, 공유해 다양한 프롬포트를 활용할 수 있고, 관련 예시를 제공합니다. 또한 6가지 핵심 요소를 제시해, 보다 정확한 결과를 생성할 수 있도록 가이드를 제공합니다. Chat-GPT 연동을 통해 제공받은 프롬프트를 바로 사용할 수 있어 보다 사용자 친화적인 서비스입니다.",
    layout: "split",
  },
  {
    id: "12-fresh-time",
    generation: 12,
    title: "FRESH-TIME",
    subtitle: "패턴 분석 기반 자세 교정 서비스",
    description: "FRESH-TIME은 사용자의 행동 패턴을 분석하고 알림을 통해, 바른 자세의 유지를 통해 신체 건강의 유지를 촉진하는 서비스입니다. 사용자의 활동 데이터를 기반으로 시각화 된 통계를 제공하고, 도전과제와 출석 기능을 통해 적극적인 참여를 유도합니다.",
    layout: "split",
  },
  {
    id: "12-time2do",
    generation: 12,
    title: "TIME2DO",
    subtitle: "도파밍 해결 서비스",
    description: "TIME2DO는 2024년의 신규 키워드 도파밍(Dopamine + Farming)을 해결하기 위한 서비스입니다. 도파민 중독에서 벗어나 업무 집중도와 효율성을 높이기 위해 뽀모도로 기능과 투두리스트를 통한 사용자의 업무 및 휴식 관리를 유도합니다. 목표 달성 여부에 대해 즉각적인 피드백을 통해서, 사용자에게 서비스 활용을 독려합니다.",
    layout: "split",
  },
  {
    id: "12-nespect",
    generation: 12,
    title: "Nespect",
    subtitle: "다각도 뉴스 큐레이션 플랫폼",
    description: "NEWSPECT는 필터버블과 확증편향에 치우져진 현대 사회의 정신 건강을 해결하기 위한 서비스로서, 특정 주제에 관한 키워드를 다양한 언론사에서 제공하는 기사를 보여주고, 편향적이지 않은 객관적이고 공정적인 정보만을 제공합니다. 이를 통해서 사후 판단 편향을 줄이고, 사용자가 다양한 관점에서 정보를 습득할 수 있도록 도와주는 서비스입니다.",
    layout: "split",
  },

  {
    id: "13-knock",
    generation: 13,
    title: "Knock",
    subtitle: "등기부등본 분석 기반 전세사기 예방 AI 서비스",
    description: "Knock는 파인튜닝을한 이상탐지모델을 바탕으로, 사용자가 제출한 등기부등본을 바탕으로 거주하고자 하는 집의 전세사기 위험도를 분석하는 서비스입니다. 모델이 분석한 리포트를 발행해 사용자의 이해를 돕고, 전문가와의 매칭 시스템을 통해 더욱 상세한 상담 및 분석이 가능합니다.",
    layout: "split",
  },
  {
    id: "13-gabom",
    generation: 13,
    title: "가봄",
    subtitle: "AI 추천 및 방문인증 스템프 수집 지역 경제 활성화 플랫폼",
    description: "가봄은 게이미피케이션 기법을 활용한 소상공인 경제 활성화 플랫폼입니다. 서비스에서 지정된 가게들을 방문하고 스탬프를 찍는 활동을 하여 일정 기준 이상을 도달했을때 칭호가 부여되며 사용자의 흥미를 이끄는 서비스입니다.",
    layout: "split",
  },
  {
    id: "13-marketbee",
    generation: 13,
    title: "marketBEE",
    subtitle: "소상공인 마케팅 및 관리 플랫폼",
    description: "market Bee는 AI 기술을 통하여 소상공인의 어려움을 돕고 매출 증대를 기여하는 AI 플랫폼입니다. 가게, 매출, 리뷰 데이터를 기반으로 AI가 홍보 카드뉴스를 생성하고 스마트 리포트와 맞춤형 마케팅을 제안하여 쉽고 간편하게 운영 마케팅을 돕습니다.",
    layout: "split",
  },
  {
    id: "13-rerise",
    generation: 13,
    title: "Rerise",
    subtitle: "운둔청년 일상회복 서비스",
    description: "은둔 번아웃 청년을 위한 맞춤형 성장 플랫폼 리라이즈는 설문 기반 10초 감정 기록과 캐릭터 성장으로 은둔 청년의 첫걸음을 돕습니다. AI 테마 추천과 미션, 지역 맞춤 프로그램으로 온라인 동기를 실제 외출과 사회 참여로 자연스럽게 연결합니다.",
    layout: "split",
  },
  {
    id: "13-festival",
    generation: 13,
    title: "잔치",
    subtitle: "개인 맞춤형 축제 및 여행 코스 추천 서비스",
    description: "잔치는 AI 기술을 통해 사용자의 취향과 상황에 꼭 맞는 지역 축제와 여행 코스를 추천하는 지능형 서비스입니다. 단순히 정보를 나열하는 것을 넘어 AI가 사용자의 여행 파트너가 되어 특별한 경험을 제공합니다.",
    layout: "split",
  },
  {
    id: "13-lococo",
    generation: 13,
    title: "LOCOCO",
    subtitle: "AI 지역 축제 관광, 큐레이션 서비스",
    description: "LOCOCO는 지역 축제의 기획자와 방문자 간 정보 비대칭을 해소하고, 침체된 지역 행사의 활성화를 목표로 제작된 지역 축제 큐레이션 서비스입니다. 기획자에게는 지역축제 데이터를 기반으로 축제 기획 문서와 홍보물을 자동 생성하며, 방문자에게는 관심사와 방문 이력을 바탕으로 한 맞춤형 축제 추천과 여행 일정 추천 기능을 제공합니다.",
    layout: "split",
  },
];

const GENERATIONS: Generation[] = [11, 12, 13];

function getCardImage(title: string) {
   if (title === "팜투마켓") return farmtoImg;
   if (title === "D.LIFEBOAT") return dlifeboatImg;
   if (title === "투자가머니") return investmoneyImg;
   if (title === "안전행") return safetyImg;
   if (title === "코인슈터") return coinshooterImg;
   if (title === "미미키") return mimikiImg;
   if (title === "시니어몬드") return seniormondImg;
   if (title === "Chellengers") return chellengersImg;
   if (title === "Apply") return applyImg;
   if (title === "Node") return nodeImg;
   if (title === "프롬프렌") return promptfriendImg;
   if (title === "FRESH-TIME") return freshtimeImg;
   if (title === "TIME2DO") return time2doImg;
   if (title === "Nespect") return nespectImg;
   if (title === "Knock") return knockImg;
   if (title === "가봄") return gabomImg;
   if (title === "marketBEE") return marketbeeImg;
   if (title === "Rerise") return reriseImg;
   if (title === "잔치") return festivalImg;
   if (title === "LOCOCO") return lococoImg;
   return farmtoImg; 
 }

export default function ProjectDetailPage() {
  const [selectedGen, setSelectedGen] = useState<Generation>(11);
  const displayed = PROJECTS.filter((p) => p.generation === selectedGen);

  return (
    <div className="bg-black1 text-white1 min-h-dvh w-full">
      <Header />

      <main className="project-page__content">
        <div className="project-page__top">
          <div className="project-page__title-wrap">
            <h1 className="project-page__title">프로젝트</h1>
          </div>

          <div
            className="project-page__filters"
            role="tablist"
            aria-label="기수 선택"
          >
            {GENERATIONS.map((gen) => {
              const active = gen === selectedGen;
              return (
                <button
                  key={gen}
                  type="button"
                  className={`gen-chip ${active ? "is-active" : ""}`}
                  onClick={() => setSelectedGen(gen)}
                  role="tab"
                  aria-selected={active}
                >
                  {gen}기
                </button>
              );
            })}
          </div>
        </div>

        <section className="project-grid" aria-label="프로젝트 목록">
          {displayed.map((item) => {
            const imgSrc = getCardImage(item.title);

            const isFarmto = item.title === "팜투마켓";
            const isDlifeboat = item.title === "D.LIFEBOAT";
            const isInvestmoney = item.title === "투자가머니";
            const isSafety = item.title === "안전행";
            const isCoinshooter = item.title === "코인슈터";
            const isMimiki = item.title === "미미키";
            const isSeniormond = item.title === "시니어몬드";
            const isChellengers = item.title === "Chellengers";
            const isApply = item.title === "Apply";
            const isNode = item.title === "Node";
            const isPromptfriend = item.title === "프롬프렌";
            const isFreshtime = item.title === "FRESH-TIME";
            const isTime2do = item.title === "TIME2DO";
            const isNespect = item.title === "Nespect";
            const isKnock = item.title === "Knock";
            const isGabom = item.title === "가봄";
            const isMarketbee = item.title === "marketBEE";
            const isRerise = item.title === "Rerise";
            const isFestival = item.title === "잔치";
            const isLococo = item.title === "LOCOCO";

            return (
              <article
                key={item.id}
                className={`project-card ${isFarmto ? "project-card--farmto" : ""} ${isDlifeboat ? "project-card--dlifeboat" : ""}
                ${isInvestmoney ? "project-card--investmoney" : ""} ${isSafety ? "project-card--safety" : ""}
                ${isCoinshooter ? "project-card--coinshooter" : ""} ${isMimiki ? "project-card--mimiki" : ""}
                ${isSeniormond ? "project-card--seniormond" : ""} ${isChellengers ? "project-card--chellengers" : ""}
                ${isApply ? "project-card--apply" : ""} ${isNode ? "project-card--node" : ""}
                ${isPromptfriend ? "project-card--promptfriend" : ""} ${isFreshtime ? "project-card--freshtime" : ""}
                ${isTime2do ? "project-card--time2do" : ""} ${isNespect ? "project-card--nespect" : ""} 
                ${isKnock ? "project-card--knock" : ""} ${isGabom ? "project-card--gabom" : ""}
                ${isMarketbee ? "project-card--marketbee" : ""} ${isRerise ? "project-card--rerise" : ""}
                ${isFestival ? "project-card--festival" : ""} ${isLococo ? "project-card--lococo" : ""}`}
              >
                <div className="project-card__inner">
                  {item.layout === "center" ? (
                    <>
                      <h2 className="project-card__title project-card__title--center">
                        {item.title}
                      </h2>

                      <div className="project-card__media project-card__media--center">
                        <img
                          src={imgSrc}
                          alt={`${item.title} 미리보기`}
                          className="project-card__img"
                        />
                      </div>

                      <p className="project-card__subtitle project-card__subtitle--center">
                        {item.subtitle}
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="project-card__row">
                        <h2
                          className={`project-card__title ${
                            isFarmto ? "project-card__title--farmto" : isDlifeboat ? "project-card__title--dlifeboat" : 
                            isInvestmoney ? "project-card__title--investmoney" : isSafety ? "project-card__title--investmoney" :
                            isCoinshooter ? "project-card__title--coinshooter" : isMimiki ? "project-card__title--mimiki" :
                            isSeniormond ? "project-card__title--seniormond" : isChellengers ? "project-card__title--chellengers" : 
                            isApply ? "project-card__title--apply" : isNode ? "project-card__title--node" : 
                            isPromptfriend ? "project-card__title--promptfriend" : isFreshtime ? "project-card__title--freshtime" :
                            isTime2do ? "project-card__title--time2do" : isNespect ? "project-card__title--nespect" :
                            isKnock ? "project-card__title--knock" : isGabom ? "project-card__title--gabom" :
                            isMarketbee ? "project-card__title--marketbee" : isRerise ? "project-card__title--rerise" :
                            isFestival ? "project-card__title--festival" : isLococo ? "project-card__title--lococo" :""
                          }`}
                        >
                          {item.title}
                        </h2>

                        <div
                          className={`project-card__media ${
                            isFarmto ? "project-card__media--farmto" : isDlifeboat ? "project-card__media--dlifeboat" : 
                            isInvestmoney ? "project-card__media--investmoney" : isSafety ? "project-card__media--safety" : 
                            isCoinshooter ? "project-card__media--coinshooter" : isMimiki ? "project-card__media--mimiki" : 
                            isSeniormond ? "project-card__media--seniormond" : isChellengers ? "project-card__media--chellengers" :
                            isApply ? "project-card__media--apply" : isNode ? "project-card__media--node" :
                            isPromptfriend ? "project-card__media--promptfriend" : isFreshtime ? "project-card__media--freshtime" :
                            isTime2do ? "project-card__media--time2do" : isNespect ? "project-card__media--nespect" :
                            isKnock ? "project-card__media--knock" : isGabom ? "project-card__media--gabom" :
                            isMarketbee ? "project-card__media--marketbee" : isRerise ? "project-card__media--rerise" :
                            isFestival ? "project-card__media--festival" : isLococo ? "project-card__media--lococo" :""
                          }`}
                        >
                          <img
                            src={imgSrc}
                            alt={`${item.title} 미리보기`}
                            className="project-card__img"
                          />
                        </div>
                      </div>

                      <p
                        className={`project-card__subtitle ${
                          isFarmto ? "project-card__subtitle--farmto" : isDlifeboat ? "project-card__subtitle--dlifeboat" : 
                          isInvestmoney ? "project-card__subtitle--investmoney" : isSafety ? "project-card__subtitle--safety" : 
                          isCoinshooter ? "project-card__subtitle--coinshooter" : isMimiki ? "project-card__subtitle--mimiki" :
                          isSeniormond ? "project-card__subtitle--seniormond" : isChellengers ? "project-card__subtitle--chellengers" : 
                          isApply ? "project-card__subtitle--apply" : isNode ? "project-card__subtitle--node" :
                          isPromptfriend ? "project-card__subtitle--promptfriend" : isFreshtime ? "project-card__subtitle--freshtime" :
                          isTime2do ? "project-card__subtitle--time2do" : isNespect ? "project-card__subtitle--nespect" :
                          isKnock ? "project-card__subtitle--knock" : isGabom ? "project-card__subtitle--gabom" :
                          isMarketbee ? "project-card__subtitle--marketbee" : isRerise ? "project-card__subtitle--rerise" :
                          isFestival ? "project-card__subtitle--festival" : isLococo ? "project-card__subtitle--lococo" :""
                        }`}
                      >
                        {item.subtitle}
                      </p>

                      <p
                        className={`project-card__desc ${
                          isFarmto ? "project-card__desc--farmto" : isDlifeboat ? "project-card__desc--dlifeboat" : 
                          isInvestmoney ? "project-card__desc--investmoney" : isSafety ? "project-card__desc--safety" : 
                          isCoinshooter ? "project-card__desc--coinshooter" : isMimiki ? "project-card__desc--mimiki" : 
                          isSeniormond ? "project-card__desc--seniormond" : isChellengers ? "project-card__desc--chellengers" : 
                          isApply ? "project-card__desc--apply" : isNode ? "project-card__desc--node" :
                          isPromptfriend ? "project-card__desc--promptfriend" : isFreshtime ? "project-card__desc--freshtime" :
                          isTime2do ? "project-card__desc--time2do" : isNespect ? "project-card__desc--nespect" :
                          isKnock ? "project-card__desc--knock" : isGabom ? "project-card__desc--gabom" :
                          isMarketbee ? "project-card__desc--marketbee" : isRerise ? "project-card__desc--rerise" :
                          isFestival ? "project-card__desc--festival" : isLococo ? "project-card__desc--lococo" :""
                        }`}
                      >
                        {item.description}
                      </p>
                    </>
                  )}
                </div>
              </article>
            );
          })}

        </section>
      </main>
    </div>
  );
}

//승준 왔다감