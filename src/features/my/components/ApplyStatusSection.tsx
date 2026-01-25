import Button from "../../../shared/components/Button";
import ApplyItem from "./ApplyItem";
import ApplyLayout from "./ApplyLayout";

const StatusLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="tracking-tight-custom text-[24px] leading-140 font-bold">
      {children}
    </span>
  );
};

function ApplyStatusSection() {
  return (
    <section className="mt-19.25 flex-1">
      <div className="flex flex-col gap-8.25">
        <div className="tracking-tight-custom text-[32px] leading-140 font-semibold">
          지원 현황
        </div>
        <div className="border-sub1 w-full border-3"></div>
        <div className="flex flex-col gap-6">
          <StatusLabel>진행</StatusLabel>
          <ApplyLayout>
            <ApplyItem />
          </ApplyLayout>
        </div>
        <div className="mt-18.75 flex flex-col gap-6">
          <StatusLabel>종료</StatusLabel>
          <ApplyLayout>
            <ApplyItem />
            <ApplyItem />
          </ApplyLayout>
        </div>
      </div>
      <div className="mt-51.75 flex justify-end gap-4">
        <Button>정보수정</Button>
        <Button>로그아웃</Button>
      </div>
    </section>
  );
}

export default ApplyStatusSection;
