import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";

type Status = "모집 중" | "모집 마감";

interface ApplyNotice {
  id: string;
  status: Status;
  titleLine: string;
  periodFrom: string;
  periodTo: string;
  emphasis?: boolean; 
}

const ONGOING: ApplyNotice[] = [
  {
    id: "o-1",
    status: "모집 중",
    titleLine: "14기 강남대학교 멋쟁이사자처럼 아기사자 모집 - 백엔드 파트",
    periodFrom: "2025.00.00 00:00",
    periodTo: "2026.00.00 00:00",
  },
  {
    id: "o-2",
    status: "모집 중",
    titleLine: "14기 강남대학교 멋쟁이사자처럼 아기사자 모집 - 백엔드 파트",
    periodFrom: "2025.00.00 00:00",
    periodTo: "2026.00.00 00:00",
  },
  {
    id: "o-3",
    status: "모집 중",
    titleLine: "14기 강남대학교 멋쟁이사자처럼 아기사자 모집 - 백엔드 파트",
    periodFrom: "2025.00.00 00:00",
    periodTo: "2026.00.00 00:00",
  },
  {
    id: "o-4",
    status: "모집 중",
    titleLine: "14기 강남대학교 멋쟁이사자처럼 아기사자 모집 - 백엔드 파트",
    periodFrom: "2025.00.00 00:00",
    periodTo: "2026.00.00 00:00",
  },
  {
    id: "o-5",
    status: "모집 중",
    titleLine: "14기 강남대학교 멋쟁이사자처럼 아기사자 모집 - 백엔드 파트",
    periodFrom: "2025.00.00 00:00",
    periodTo: "2026.00.00 00:00",
  },
  {
    id: "o-6",
    status: "모집 중",
    titleLine: "14기 강남대학교 멋쟁이사자처럼 아기사자 모집 - 백엔드 파트",
    periodFrom: "2025.00.00 00:00",
    periodTo: "2026.00.00 00:00",
  },
];

const ENDED: ApplyNotice[] = [
  {
    id: "e-1",
    status: "모집 마감",
    titleLine: "14기 강남대학교 멋쟁이사자처럼 아기사자 모집 - 백엔드 파트",
    periodFrom: "2025.00.00 00:00",
    periodTo: "2026.00.00 00:00",
  },
  {
    id: "e-2",
    status: "모집 마감",
    titleLine: "14기 강남대학교 멋쟁이사자처럼 아기사자 모집 - 백엔드 파트",
    periodFrom: "2025.00.00 00:00",
    periodTo: "2026.00.00 00:00",
  },
  {
    id: "e-3",
    status: "모집 마감",
    titleLine: "14기 강남대학교 멋쟁이사자처럼 아기사자 모집 - 백엔드 파트",
    periodFrom: "2025.00.00 00:00",
    periodTo: "2026.00.00 00:00",
  },
  {
    id: "e-4",
    status: "모집 마감",
    titleLine: "14기 강남대학교 멋쟁이사자처럼 아기사자 모집 - 백엔드 파트",
    periodFrom: "2025.00.00 00:00",
    periodTo: "2026.00.00 00:00",
  },
  {
    id: "e-5",
    status: "모집 마감",
    titleLine: "14기 강남대학교 멋쟁이사자처럼 아기사자 모집 - 백엔드 파트",
    periodFrom: "2025.00.00 00:00",
    periodTo: "2026.00.00 00:00",
  },
  {
    id: "e-6",
    status: "모집 마감",
    titleLine: "14기 강남대학교 멋쟁이사자처럼 아기사자 모집 - 백엔드 파트",
    periodFrom: "2025.00.00 00:00",
    periodTo: "2026.00.00 00:00",
  },
];

function NoticeCard({ item }: { item: ApplyNotice }) {
  const isOpen = item.status === "모집 중";
  const cardBaseClass =
    "relative h-[231px] w-[385px] rounded-[33px] border border-transparent [background-image:linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(20,20,20,0.9)_100%),linear-gradient(#000,#000),linear-gradient(180deg,rgba(255,255,255,0.75),rgba(66,126,156,1),rgba(0,238,255,0.8))] [background-origin:border-box] [background-clip:padding-box,padding-box,border-box] [box-shadow:0_0_0_1px_rgba(255,255,255,0.05)_inset,_0_12px_28px_rgba(0,0,0,0.55),_0_0_36px_rgba(72,185,255,0.18)]";
  const emphasisClass =
    item.emphasis
      ? " [background-image:linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(20,20,20,0.9)_100%),linear-gradient(#000,#000),linear-gradient(180deg,rgba(255,255,255,0.85),rgba(0,180,255,1),rgba(0,238,255,0.95))] [box-shadow:0_0_0_1px_rgba(255,255,255,0.06)_inset,_0_12px_28px_rgba(0,0,0,0.55),_0_0_60px_rgba(0,170,255,0.28)]"
      : "";

  return (
    <article className={cardBaseClass + emphasisClass}>
      <div className="relative flex h-full flex-col gap-[13px] px-10 pt-[35px] pb-5">
        <span
          className={`h-[17px] w-[318px] self-center text-[14px] font-normal tracking-[-0.01em] ${isOpen ? "text-blue" : "text-red"}`}
        >
          {item.status}
        </span>

        <h3 className="m-0 h-[50px] w-[318px] self-center text-[18px] leading-[1.2] font-normal tracking-[-0.02em] text-[rgba(255,255,255,0.92)]">
          {item.titleLine}
        </h3>

        <div className="h-[17px] w-[318px] self-center text-[14px] font-normal tracking-[-0.01em] text-[rgba(255,255,255,0.55)]">
          <span>{item.periodFrom} ~ {item.periodTo}</span>
        </div>

        <div className="absolute right-[39px] bottom-[30px] m-0 block">
          <button
            type="button"
            className="inline-flex h-[39px] w-[100.93px] items-center justify-center rounded-[55px] bg-[radial-gradient(ellipse_70.71%_70.71%_at_50%_50%,rgba(0,0,0,0.50)_50%,#0A7CFF_100%)] px-0 py-0 text-[12px] font-normal tracking-[-0.01em] text-[rgba(255,255,255,0.92)] outline outline-[0.40px] outline-offset-[-0.40px] outline-[rgba(255,255,255,1)] transition-transform duration-[120ms] hover:-translate-y-px focus-visible:outline-none"
          >
            지원하기
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ApplyPage() {
  return (
    <div className="text-white1 min-h-dvh w-full [background:radial-gradient(1200px_700px_at_55%_20%,rgba(50,160,220,0.2),rgba(0,0,0,0)_55%),radial-gradient(900px_520px_at_20%_35%,rgba(30,120,200,0.14),rgba(0,0,0,0)_55%),#000]">
      <Header />

      <main className="px-0 pt-[40px] pb-[80px]">
        <div className="mx-auto box-border w-full max-w-[1440px] px-[48px] max-[1200px]:px-[56px] max-[768px]:px-[24px]">
          <h1 className="m-0 text-[30px] font-normal tracking-[-0.02em]">
            지원 공고
          </h1>
          <div className="mt-5 mb-[60px] h-px w-full bg-[rgba(255,255,255,0.2)]" />

          <section className="mb-[87px]">
            <h2 className="mt-0 mr-0 mb-[32px] ml-0 text-[30px] font-normal tracking-[-0.02em]">
              진행
            </h2>

            <div
              className="mx-auto grid w-[1193px] grid-cols-[repeat(3,385px)] gap-x-[19px] gap-y-[20px] max-[1320px]:w-[789px] max-[1320px]:grid-cols-[repeat(2,385px)] max-[860px]:w-[385px] max-[860px]:grid-cols-1 max-[420px]:w-full"
              aria-label="진행 중 공고 목록"
            >
              {ONGOING.map((item) => (
                <NoticeCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="mt-0 mr-0 mb-[32px] ml-0 text-[30px] font-normal tracking-[-0.02em]">
              종료
            </h2>

            <div
              className="mx-auto grid w-[1193px] grid-cols-[repeat(3,385px)] gap-x-[19px] gap-y-[20px] max-[1320px]:w-[789px] max-[1320px]:grid-cols-[repeat(2,385px)] max-[860px]:w-[385px] max-[860px]:grid-cols-1 max-[420px]:w-full"
              aria-label="종료 공고 목록"
            >
              {ENDED.map((item) => (
                <NoticeCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
