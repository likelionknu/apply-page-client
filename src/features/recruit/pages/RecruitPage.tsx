import Header from "../../../shared/components/Header";

function RecruitPage() {
  return (
    <>
      <Header />
      <main className="text-white1 h-dvh w-full bg-[#111111] pt-30">
        <section className="mx-auto flex max-w-310 flex-col items-center">
          <div className="flex w-full items-end justify-between">
            <div className="flex flex-col gap-8">
              <div className="text-[48px] leading-[140%] font-semibold tracking-[-0.025em]">
                14기 아기사자 모집 - 백엔드 파트
              </div>
              <div className="text-[24px] leading-[140%] font-[400px] tracking-[-0.025em]">
                2026.02.23 ~ 2026.03.06
              </div>
            </div>
            <div className="modal-button-style">제출완료</div>
          </div>
        </section>
      </main>
    </>
  );
}

export default RecruitPage;
