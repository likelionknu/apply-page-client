import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";
import "./apply.css";

type Status = "모집 중" | "모집 마감";

interface ApplyNotice {
  id: string;
  status: Status;
  titleLine1: string;
  titleLine2: string;
  periodFrom: string;
  periodTo: string;
  emphasis?: boolean; 
}

const ONGOING: ApplyNotice[] = [
  {
    id: "o-1",
    status: "모집 중",
    titleLine1: "14기 강남대학교 멋쟁이사자처럼",
    titleLine2: "아기사자 모집 - 백엔드 파트",
    periodFrom: "2025.00.00 00:00",
    periodTo: "2026.00.00 00:00",
  },
  {
    id: "o-2",
    status: "모집 중",
    titleLine1: "14기 강남대학교 멋쟁이사자처럼",
    titleLine2: "아기사자 모집 - 백엔드 파트",
    periodFrom: "2025.00.00 00:00",
    periodTo: "2026.00.00 00:00",
  },
  {
    id: "o-3",
    status: "모집 중",
    titleLine1: "14기 강남대학교 멋쟁이사자처럼",
    titleLine2: "아기사자 모집 - 백엔드 파트",
    periodFrom: "2025.00.00 00:00",
    periodTo: "2026.00.00 00:00",
  },
  {
    id: "o-4",
    status: "모집 중",
    titleLine1: "14기 강남대학교 멋쟁이사자처럼",
    titleLine2: "아기사자 모집 - 백엔드 파트",
    periodFrom: "2025.00.00 00:00",
    periodTo: "2026.00.00 00:00",
  },
];

const ENDED: ApplyNotice[] = [
  {
    id: "e-1",
    status: "모집 마감",
    titleLine1: "14기 강남대학교 멋쟁이사자처럼",
    titleLine2: "아기사자 모집 - 백엔드 파트",
    periodFrom: "2025.00.00 00:00",
    periodTo: "2026.00.00 00:00",
  },
  {
    id: "e-2",
    status: "모집 마감",
    titleLine1: "14기 강남대학교 멋쟁이사자처럼",
    titleLine2: "아기사자 모집 - 백엔드 파트",
    periodFrom: "2025.00.00 00:00",
    periodTo: "2026.00.00 00:00",
  },
  {
    id: "e-3",
    status: "모집 마감",
    titleLine1: "14기 강남대학교 멋쟁이사자처럼",
    titleLine2: "아기사자 모집 - 백엔드 파트",
    periodFrom: "2025.00.00 00:00",
    periodTo: "2026.00.00 00:00",
  },
  {
    id: "e-4",
    status: "모집 마감",
    titleLine1: "14기 강남대학교 멋쟁이사자처럼",
    titleLine2: "아기사자 모집 - 백엔드 파트",
    periodFrom: "2025.00.00 00:00",
    periodTo: "2026.00.00 00:00",
    emphasis: true,
  },
];

function NoticeCard({ item }: { item: ApplyNotice }) {
  const isOpen = item.status === "모집 중";

  return (
    <article className={`apply-card ${item.emphasis ? "is-emphasis" : ""}`}>
      <div className="apply-card__inner">
        <span
          className={`apply-card__status ${isOpen ? "is-open" : "is-closed"}`}
        >
          {item.status}
        </span>

        <h3 className="apply-card__title">
          <span>{item.titleLine1}</span>
          <span>{item.titleLine2}</span>
        </h3>

        <div className="apply-card__period">
          <span>{item.periodFrom} ~</span>
          <span>{item.periodTo}</span>
        </div>

        <div className="apply-card__cta">
          <button type="button" className="apply-card__btn">
            지원하러 가기
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ApplyNoticePage() {
  return (
    <div className="apply-page">
      <Header />

      <main className="apply-page__content">
        <h1 className="apply-page__title">지원 공고</h1>

        <section className="apply-section">
          <h2 className="apply-section__title">진행</h2>

          <div className="apply-grid" aria-label="진행 중 공고 목록">
            {ONGOING.map((item) => (
              <NoticeCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="apply-section">
          <h2 className="apply-section__title">종료</h2>

          <div className="apply-grid" aria-label="종료 공고 목록">
            {ENDED.map((item) => (
              <NoticeCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
