import Button from "../../../shared/components/Button";
import Header from "../../../shared/components/Header";
import QestionSection from "../components/QuestionSection";

function RecruitPage() {
  return (
    <>
      <Header />
      <main className="text-white1 w-full bg-[#111111] pt-40 pb-40">
        <section className="mx-auto flex max-w-310 flex-col items-center">
          <div className="flex w-full items-end justify-between">
            <div className="flex flex-col gap-8">
              <div className="tracking-tight-custom text-[48px] leading-140 font-semibold">
                14기 아기사자 모집 - 백엔드 파트
              </div>
              <div className="tracking-tight-custom text-[24px] leading-140 font-[400px]">
                2026.02.23 ~ 2026.03.06
              </div>
            </div>
            <div className="pb-2">
              <Button borderWidth="2.02px">제출 완료</Button>
            </div>
          </div>
          <form className="mt-20 flex w-full flex-col gap-8">
            <QestionSection />
            <QestionSection />
            <QestionSection />
            <QestionSection />
          </form>
          <div className="mt-28 flex gap-25">
            <Button borderWidth="2px" radius="40px">
              임시저장
            </Button>
            <Button borderWidth="2px" radius="40px">
              지원하기
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}

export default RecruitPage;
