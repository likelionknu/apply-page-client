import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";
import axios from "axios";
import "./apply.css";
import { useEffect, useState } from "react";
import { getApplyNotices } from "./apis";
import type { ModalType } from "@shared/types/ModalType";
import ErrorModal from "@shared/components/modal/ErrorModal";

// type CalculatedStatus = "UPCOMING" | "ONGOING" | "CLOSED";
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
interface ApplyNoticeApi {
  id: number;
  title: string;
  startAt: string;
  endAt: string;
}

const getStatusByDate = (start: string, end: string) => {
  const now = Date.now();
  const s = new Date(start).getTime();
  const e = new Date(end).getTime();

  if (now < s) return "UPCOMING";
  if (now > e) return "CLOSED";
  return "ONGOING";
};

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(
    d.getDate(),
  ).padStart(2, "0")} ${String(d.getHours()).padStart(2, "0")}:${String(
    d.getMinutes(),
  ).padStart(2, "0")}`;
};

const mapApiToNotice = (item: ApplyNoticeApi): ApplyNotice | null => {
  const status = getStatusByDate(item.startAt, item.endAt);
  const [line1, line2] = item.title.split(" - ");
  if (status === "UPCOMING") return null;

  return {
    id: String(item.id),
    status: status === "CLOSED" ? "모집 마감" : "모집 중",
    titleLine1: line1,
    titleLine2: line2 ?? "",
    periodFrom: formatDate(item.startAt),
    periodTo: formatDate(item.endAt),
    emphasis: status === "ONGOING",
  };
};

// const MOCK_NOTICES: ApplyNoticeApi[] = [
//   {
//     id: 1,
//     title: "모집 전 테스트",
//     startAt: "2030-01-01T00:00:00",
//     endAt: "2030-01-10T00:00:00",
//   },
//   {
//     id: 2,
//     title: "모집 중 테스트",
//     startAt: "2020-01-01T00:00:00",
//     endAt: "2030-01-01T00:00:00",
//   },
//   {
//     id: 3,
//     title: "모집 마감 테스트",
//     startAt: "2020-01-01T00:00:00",
//     endAt: "2020-01-10T00:00:00",
//   },
// ];

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
          <span>{item.periodFrom}~</span>
          <span>{item.periodTo}</span>
        </div>

        <div className="apply-card__cta">
          <button type="button" className="apply-card__btn" disabled={!isOpen}>
            {isOpen ? "지원하러 가기" : "모집 마감"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ApplyNoticePage() {
  const [ongoing, setOngoing] = useState<ApplyNotice[]>([]);
  const [ended, setEnded] = useState<ApplyNotice[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const { data } = await getApplyNotices();
        // const apiData: ApplyNoticeApi[] = data.data;

        if (data.error?.code) {
          setErrorMessage(data.error.message);
          setActiveModal("ERROR");
          return;
        }

        const notices: ApplyNotice[] = data.data.map(mapApiToNotice);
        // .filter((n): n is ApplyNotice => n !== null);

        // const notices: ApplyNotice[] = MOCK_NOTICES.map(mapApiToNotice).filter(
        //   (n): n is ApplyNotice => n !== null,
        // );

        setOngoing(notices.filter((n) => n.status === "모집 중"));
        setEnded(notices.filter((n) => n.status === "모집 마감"));
      } catch (error) {
        let msg = "서버와 연결할 수 없습니다.";

        if (axios.isAxiosError(error)) {
          if (error.response?.status === 403) msg = "접근 권한이 없습니다.";
          if (error.response?.status === 500)
            msg = "서버 내부 오류가 발생하였습니다.";
        }

        setErrorMessage(msg);
        setActiveModal("ERROR");
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="apply-page">
      <Header />

      <main className="apply-page__content">
        <div className="apply-page__container">
          <h1 className="apply-page__title">지원 공고</h1>

          <section className="apply-section">
            <h2 className="apply-section__title">진행</h2>

            <div className="apply-grid" aria-label="진행 중 공고 목록">
              {ongoing.map((item) => (
                <NoticeCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          <section className="apply-section">
            <h2 className="apply-section__title">종료</h2>

            <div className="apply-grid" aria-label="종료 공고 목록">
              {ended.map((item) => (
                <NoticeCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <ErrorModal
        isShow={activeModal === "ERROR"}
        content={errorMessage}
        buttonText="메인으로 돌아가기"
        onClick={() => (window.location.href = "/main")}
      />
      <Footer />
    </div>
  );
}
