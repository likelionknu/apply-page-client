import { useState } from "react";
import Header from "../../../shared/components/Header";
import "./project.css";

import farmtoImg from "../assets/farmto.png";
import knockImg from "../assets/knock.png";

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

/** 더미 데이터 */
const PROJECTS: ProjectCard[] = [
  {
    id: "p-11-1",
    generation: 11,
    title: "팜투마켓",
    subtitle: "소외계층 중개 커뮤니티 시스템",
    description:
      "온라인 거래가 증가함에 따라 소외된 이들이 어려운 현대 사회에서 정착기까지 사회에 어려움을 겪는 노년층을 온라인 시장에서 자연스럽게 소외된다. 이에따라 소외계층 중개모임을 기반으로 지역별 활성화 공동체와 문화활동 등을 해결하는 커뮤니티 시스템을 팜투마켓입니다.",
    layout: "split",
  },
  {
    id: "p-12-1",
    generation: 12,
    title: "팜투마켓",
    subtitle: "소외계층 중개 커뮤니티 시스템",
    description:
      "온라인 거래가 증가함에 따라 소외된 이들이 어려운 현대 사회에서 정착기까지 사회에 어려움을 겪는 노년층을 온라인 시장에서 자연스럽게 소외된다. 이에따라 소외계층 중개모임을 기반으로 지역별 활성화 공동체와 문화활동 등을 해결하는 커뮤니티 시스템을 팜투마켓입니다.",
    layout: "split",
  },
  {
    id: "p-13-1",
    generation: 13,
    title: "팜투마켓",
    subtitle: "소외계층 중개 커뮤니티 시스템",
    description:
      "온라인 거래가 증가함에 따라 소외된 이들이 어려운 현대 사회에서 정착기까지 사회에 어려움을 겪는 노년층을 온라인 시장에서 자연스럽게 소외된다. 이에따라 소외계층 중개모임을 기반으로 지역별 활성화 공동체와 문화활동 등을 해결하는 커뮤니티 시스템을 팜투마켓입니다.",
    layout: "split",
  },

  {
    id: "p-11-2",
    generation: 11,
    title: "팜투마켓",
    subtitle: "소외계층 중개 커뮤니티 시스템",
    description:
      "온라인 거래가 증가함에 따라 소외된 이들이 어려운 현대 사회에서 정착기까지 사회에 어려움을 겪는 노년층을 온라인 시장에서 자연스럽게 소외된다. 이에따라 소외계층 중개모임을 기반으로 지역별 활성화 공동체와 문화활동 등을 해결하는 커뮤니티 시스템을 팜투마켓입니다.",
    layout: "split",
  },
  {
    id: "k-12-1",
    generation: 12,
    title: "Knock",
    subtitle: "등기부등본 분석 기반 전세사기 예방 AI 서비스",
    description: "",
    layout: "center",
  },
  {
    id: "k-13-1",
    generation: 13,
    title: "Knock",
    subtitle: "등기부등본 분석 기반 전세사기 예방 AI 서비스",
    description: "",
    layout: "center",
  },

  {
    id: "k-11-2",
    generation: 11,
    title: "Knock",
    subtitle: "등기부등본 분석 기반 전세사기 예방 AI 서비스",
    description: "",
    layout: "center",
  },
  {
    id: "k-12-2",
    generation: 12,
    title: "Knock",
    subtitle: "등기부등본 분석 기반 전세사기 예방 AI 서비스",
    description: "",
    layout: "center",
  },
  {
    id: "k-13-2",
    generation: 13,
    title: "Knock",
    subtitle: "등기부등본 분석 기반 전세사기 예방 AI 서비스",
    description: "",
    layout: "center",
  },
];

const GENERATIONS: Generation[] = [11, 12, 13];

function getCardImage(title: string) {
   if (title === "팜투마켓") return farmtoImg;
   if (title === "Knock") return knockImg;
   return farmtoImg; // fallback
 }

export default function ProjectDetailPage() {
  const [selectedGen, setSelectedGen] = useState<Generation>(11);
  const displayed = PROJECTS;

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

            return (
              <article key={item.id} className="project-card">
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
                        <h2 className="project-card__title">{item.title}</h2>

                        <div className="project-card__media">
                          <img
                            src={imgSrc}
                            alt={`${item.title} 미리보기`}
                            className="project-card__img"
                          />
                        </div>
                      </div>

                      <p className="project-card__subtitle">{item.subtitle}</p>
                      <p className="project-card__desc">{item.description}</p>
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
