import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Footer } from "@shared/components";
import type { ModalType } from "@shared/types/ModalType";
import { getApiErrorMessage } from "@shared/utils/GetApiErrorMessage";
import { getApplyAvailability, getApplyNotices } from "../apis";
import NoticeCard from "@apply/components/NoticeCard";
import ApplyModals from "../components/modal/ApplyModals";
import type { ApplyNotice, ApplyNoticeApi } from "../types/ApplyProps";

type MobileFilter = "ALL" | "ONGOING" | "ENDED";

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
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [ongoing, setOngoing] = useState<ApplyNotice[]>([]);
  const [ended, setEnded] = useState<ApplyNotice[]>([]);
  const [mobileFilter, setMobileFilter] = useState<MobileFilter>("ALL");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleApplyClick = async (id: string) => {
    try {
      const { data } = await getApplyAvailability(id);

      // 임시 저장 여부
      if (data.data?.existDraft === true) {
        setActiveModal("DRAFT");
        return;
      }

      // 정보 입력 여부
      if (data.data?.availableApply === false) {
        setActiveModal("APPLY_FAILED");
        return;
      }

      setSelectedId(id);
      setActiveModal("APPLY_ALERT");
    } catch (error) {
      let msg = "서버와 연결할 수 없습니다.";

      msg = getApiErrorMessage(error, msg);

      setErrorMessage(msg);
      setActiveModal("ERROR");
    }
  };

  const handleConfirm = () => {
    if (selectedId) {
      navigate(`/recruit/${selectedId}`);
      setActiveModal(null);
    }
  };
  const handleClose = () => {
    setActiveModal(null);
  };

  useEffect(() => {
    const hasToken = sessionStorage.getItem("accessToken");

    if (!hasToken) {
      navigate("/main");
      return;
    }

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

        msg = getApiErrorMessage(error, msg);
        setErrorMessage(msg);
        setActiveModal("ERROR");
      }
    };

    fetchNotices();
  }, [navigate]);

  const mobileNotices =
    mobileFilter === "ALL"
      ? [...ongoing, ...ended]
      : mobileFilter === "ONGOING"
        ? ongoing
        : ended;
  const mobileFilterButtonBase =
    "button-style inline-flex h-[29px] w-[39px] items-center justify-center rounded-[12px] border-[1.01px] px-0 text-[8px] leading-none font-medium tracking-[-0.01em] text-white";
  const mobileFilterButtonActive = "button-style--active";

  return (
    <div className="text-white1 min-h-dvh w-full [background:radial-gradient(1200px_700px_at_55%_20%,rgba(50,160,220,0.2),rgba(0,0,0,0)_55%),radial-gradient(900px_520px_at_20%_35%,rgba(30,120,200,0.14),rgba(0,0,0,0)_55%),#000]">
      <Header />

      <ApplyModals
        activeModal={activeModal}
        errorMessage={errorMessage}
        errorButton="마이 페이지로 이동"
        onNavigate={() => navigate("/my")}
        onClick={handleConfirm}
        onClose={handleClose}
      />

      <main className="min-h-dvh px-4 pt-1.25 pb-20 md:px-0 md:pt-10 md:pb-75">
        <div className="mx-auto w-full max-w-360 md:px-12">
          <div className="mx-auto w-full max-w-298.25">
            <div className="mx-auto w-89.75 max-w-full md:mx-0 md:w-auto">
              <h1 className="m-0 h-8.25 w-14.75 text-base leading-8 font-bold tracking-[-0.02em] md:h-auto md:w-auto md:text-3xl md:leading-[1.1] md:font-normal">
                지원 공고
              </h1>
            </div>

            <div className="mx-auto mt-2.5 mb-6.75 flex w-89.75 max-w-full items-center gap-2 md:hidden">
              <button
                type="button"
                className={`${mobileFilterButtonBase} ${mobileFilter === "ALL" ? mobileFilterButtonActive : ""}`}
                onClick={() => setMobileFilter("ALL")}
              >
                전체
              </button>
              <button
                type="button"
                className={`${mobileFilterButtonBase} ${mobileFilter === "ONGOING" ? mobileFilterButtonActive : ""}`}
                onClick={() => setMobileFilter("ONGOING")}
              >
                진행중
              </button>
              <button
                type="button"
                className={`${mobileFilterButtonBase} ${mobileFilter === "ENDED" ? mobileFilterButtonActive : ""}`}
                onClick={() => setMobileFilter("ENDED")}
              >
                완료
              </button>
            </div>

            <div className="mx-auto w-89.75 max-w-full space-y-4 md:hidden">
              {mobileNotices.length > 0 ? (
                mobileNotices.map((item: ApplyNotice) => (
                  <NoticeCard
                    key={`${item.id}-${item.status}`}
                    item={item}
                    onApplyClick={handleApplyClick}
                    mobile
                  />
                ))
              ) : (
                <div className="text-[12px] text-gray-500 md:text-[16px]">
                  작성된 공고가 없습니다.
                </div>
              )}
            </div>

            <div className="mt-5 mb-15 hidden h-px w-full bg-[rgba(255,255,255,0.2)] md:block" />

            <section className="mb-21.75 hidden md:block">
              <h2 className="m-0 mb-8 text-3xl font-normal tracking-[-0.02em]">
                진행
              </h2>

              <div
                className="grid w-full grid-cols-[repeat(3,385px)] gap-x-4.75 gap-y-5 max-[1320px]:grid-cols-[repeat(2,385px)]"
                aria-label="진행 중 공고 목록"
              >
                {ongoing.length > 0 ? (
                  ongoing.map((item: ApplyNotice) => (
                    <NoticeCard
                      key={`${item.id}-${item.status}`}
                      item={item}
                      onApplyClick={handleApplyClick}
                    />
                  ))
                ) : (
                  <div className="text-[12px] text-gray-500 md:text-[16px]">
                    작성된 공고가 없습니다.
                  </div>
                )}
              </div>
            </section>

            <section className="hidden md:block">
              <h2 className="m-0 mb-8 text-3xl font-normal tracking-[-0.02em]">
                종료
              </h2>

              <div
                className="grid w-full grid-cols-[repeat(3,385px)] gap-x-4.75 gap-y-5 max-[1320px]:grid-cols-[repeat(2,385px)]"
                aria-label="종료 공고 목록"
              >
                {ended.length > 0 ? (
                  ended.map((item: ApplyNotice) => (
                    <NoticeCard
                      key={`${item.id}-${item.status}`}
                      item={item}
                      onApplyClick={handleApplyClick}
                    />
                  ))
                ) : (
                  <div className="text-[12px] text-gray-500 md:text-[16px]">
                    작성된 공고가 없습니다.
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
