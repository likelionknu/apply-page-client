import Header from "../../../shared/components/Header";
import ApplyItem from "../components/ApplyItem";
import Button from "../../../shared/components/Button";

function MyPage() {
  return (
    <>
      <Header />
      <main className="text-white1 min-h-dvh w-full bg-[#111111] pt-40">
        <div className="mx-auto flex max-w-310 gap-61.25">
          <section className="">
            <div className="tracking-tight-custom text-[48px] leading-140 font-semibold">
              내 프로필
            </div>
            <div className="mt-17 flex flex-col items-center gap-8.5">
              <div className="bg-white1 h-71 w-71 rounded-[50%]"></div>
              <span className="tracking-tight-custom text-[40px] leading-140 font-semibold">
                황형진
              </span>
              <span className="tracking-tight-custom text-[24px] leading-140 font-[400px]">
                brotherhwang97@gmail.com
              </span>
            </div>
          </section>
          <section className="mt-19.25 flex-1">
            <div className="flex flex-col gap-8.25">
              <div className="tracking-tight-custom text-[32px] leading-140 font-semibold">
                지원 현황
              </div>
              <div className="border-sub1 w-full border-4"></div>
              <ApplyItem />
            </div>
            <div className="mt-[207px] flex justify-end gap-4">
              <Button>정보수정</Button>
              <Button>로그아웃</Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default MyPage;
