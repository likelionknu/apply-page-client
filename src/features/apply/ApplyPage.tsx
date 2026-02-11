import Header from "@shared/components/Header";
import Footer from "@shared/components/Footer";
import NoticeCard, { type ApplyNotice } from "@apply/components/NoticeCard";

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

export default function ApplyPage() {
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
                {ONGOING.map((item) => (
                  <NoticeCard key={item.id} item={item} />
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
                {ENDED.map((item) => (
                  <NoticeCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
