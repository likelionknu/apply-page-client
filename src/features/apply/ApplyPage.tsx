import Header from "@shared/components/Header";
import Footer from "@shared/components/Footer";
import NoticeCard from "@apply/components/NoticeCard";
import type { ApplyNotice, ApplyNoticeApi } from "./types/ApplyProps";
import axios from "axios";
import { getApplyAvailability, getApplyNotices } from "./apis";
import { useEffect, useState } from "react";
import type { ModalType } from "@shared/types/ModalType";
import { useNavigate } from "react-router-dom";
import ErrorModal from "@shared/components/modal/ErrorModal";

const getStatusByDate = (start: string, end: string) => {
  //디버그용
  // const now = new Date("2026-02-25T12:00:00").getTime();
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

export default function ApplyPage() {
  const [ongoing, setOngoing] = useState<ApplyNotice[]>([]);
  const [ended, setEnded] = useState<ApplyNotice[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const { data } = await getApplyNotices();
        if (data.error?.code) {
          setErrorMessage(data.error.message);
          setActiveModal("ERROR");
          return;
        }

        const notices: ApplyNotice[] = data.data
          .map(mapApiToNotice)
          .filter((n: ApplyNotice | null) => n !== null);
        setOngoing(notices.filter((n) => n.status === "모집 중"));
        setEnded(notices.filter((n) => n.status === "모집 마감"));
      } catch (error) {
        let msg = "서버와 연결할 수 없습니다.";

        if (axios.isAxiosError(error) && error.response?.data?.message) {
          msg = error.response.data.message;
        } else if (error instanceof Error) {
          msg = error.message;
        }
        setErrorMessage(msg);
        setActiveModal("ERROR");
      }
    };

    fetchNotices();
  }, []);

  const handleApplyClick = async (id: string) => {
    try {
      const { data } = await getApplyAvailability(id);
      if (data.error?.code) {
        setErrorMessage(data.error.message ?? "지원할 수 없습니다.");
        setActiveModal("ERROR");
        return;
      }
      if (!data.availableApply) {
        // setErrorMessage("이미 지원을 완료한 상태입니다.");
        // setActiveModal("ERROR");
        // return;
        // setAllowApplyId(id);
        navigate(`/recruit/my/${id}`);
        return;
      }
    } catch (error) {
      let msg = "서버와 연결할 수 없습니다.";
      if (axios.isAxiosError(error)) {
        if (error.response?.data?.error?.message) {
          msg = error.response.data.error.message;
        } else if (error.response?.data?.message) {
          msg = error.response.data.message;
        }
      } else if (error instanceof Error) {
        msg = error.message;
      }
      setErrorMessage(msg);
      setActiveModal("ERROR");
    }
  };

  return (
    <div className="text-white1 min-h-dvh w-full [background:radial-gradient(1200px_700px_at_55%_20%,rgba(50,160,220,0.2),rgba(0,0,0,0)_55%),radial-gradient(900px_520px_at_20%_35%,rgba(30,120,200,0.14),rgba(0,0,0,0)_55%),#000]">
      <Header />

      <main className="px-0 pt-10 pb-20">
        <div className="mx-auto flex flex-col items-center gap-10.5 px-8 md:max-w-360 md:flex-row md:items-start md:px-31">
          <div className="mx-auto w-298.25 max-[1320px]:w-197.25 max-[860px]:w-96.25 max-[420px]:w-full">
            <h1 className="m-0 text-3xl font-normal tracking-[-0.02em]">
              지원 공고
            </h1>
            <div className="mt-5 mb-15 h-px w-full bg-[rgba(255,255,255,0.2)]" />

            <section className="mb-21.75">
              <h2 className="m-0 mb-8 text-3xl font-normal tracking-[-0.02em]">
                진행
              </h2>

              <div
                className="grid w-full grid-cols-[repeat(3,385px)] gap-x-4.75 gap-y-5 max-[1320px]:grid-cols-[repeat(2,385px)] max-[860px]:grid-cols-1"
                aria-label="진행 중 공고 목록"
              >
                {ongoing.map((item: ApplyNotice) => (
                  <NoticeCard
                    key={item.id}
                    item={item}
                    onApplyClick={handleApplyClick}
                  />
                ))}
              </div>
            </section>

            <section>
              <h2 className="m-0 mb-8 text-3xl font-normal tracking-[-0.02em]">
                종료
              </h2>

              <div
                className="grid w-full grid-cols-[repeat(3,385px)] gap-x-4.75 gap-y-5 max-[1320px]:grid-cols-[repeat(2,385px)] max-[860px]:grid-cols-1"
                aria-label="종료 공고 목록"
              >
                {ended.map((item: ApplyNotice) => (
                  <NoticeCard
                    key={item.id}
                    item={item}
                    onApplyClick={handleApplyClick}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <ErrorModal
        isShow={activeModal === "ERROR"}
        content={errorMessage}
        buttonText="메인으로 돌아가기"
        onClick={() => (window.location.href = "/main")}
      />
      <Footer />
      <Footer />
    </div>
  );
}
