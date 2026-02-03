import { useState } from "react";
import type { ApplyItem } from "@my/types/ApplyItem";
import Button from "@shared/components/Button";
import ApplyCard from "./ApplyCard";

const StatusLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="tracking-tight-custom text-[24px] leading-140 font-bold">
      {children}
    </span>
  );
};

const ApplyLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-10">{children}</div>;
};

// const mock = {
//   data: [
//     {
//       applicationId: 1,
//       recruitsTitle: "테스트 공고",
//       status: "SUBMITTED",
//       startAt: "2026-01-15T12:21:27",
//       endAt: "2026-01-22T12:21:27",
//     },
//   ],
//   error: {
//     code: null,
//     message: null,
//   },
// };
function ApplyStatusSection() {
  const now = new Date();
  const [applyData, setApplyData] = useState<ApplyItem[]>([
    {
      applicationId: 1,
      recruitsTitle: "13기 아기사자 모집",
      status: "SUBMITTED",
      startAt: "2026-01-15T12:00:00",
      endAt: "2026-02-20T12:00:00", // 미래 (진행중)
    },
    {
      applicationId: 2,
      recruitsTitle: "13기 아기사자 모집",
      status: "SUBMITTED",
      startAt: "2026-01-15T12:00:00",
      endAt: "2026-02-20T12:00:00", // 미래 (진행중)
    },
    {
      applicationId: 3,
      recruitsTitle: "지난 해커톤",
      status: "REJECTED",
      startAt: "2025-01-01T00:00:00",
      endAt: "2025-01-10T00:00:00", // 과거 (종료)
    },
    {
      applicationId: 4,
      recruitsTitle: "지난 해커톤",
      status: "REJECTED",
      startAt: "2025-01-01T00:00:00",
      endAt: "2025-01-10T00:00:00", // 과거 (종료)
    },
    {
      applicationId: 5,
      recruitsTitle: "지난 해커톤",
      status: "REJECTED",
      startAt: "2025-01-01T00:00:00",
      endAt: "2025-01-10T00:00:00", // 과거 (종료)
    },
  ]);

  const ongoingApplys = applyData.filter((item) => new Date(item.endAt) >= now);
  const endApplys = applyData.filter((item) => new Date(item.endAt) < now);

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
            {ongoingApplys.length > 0 ? (
              ongoingApplys.map((item) => (
                <ApplyCard key={item.applicationId} data={item} />
              ))
            ) : (
              <div className="text-gray-500">
                진행 중인 지원 내역이 없습니다.
              </div>
            )}
          </ApplyLayout>
        </div>
        <div className="mt-18.75 flex flex-col gap-6">
          <StatusLabel>종료</StatusLabel>
          <ApplyLayout>
            {endApplys.length > 0 ? (
              endApplys.map((item) => (
                <ApplyCard key={item.applicationId} data={item} />
              ))
            ) : (
              <div className="text-gray-500">
                진행 중인 지원 내역이 없습니다.
              </div>
            )}
          </ApplyLayout>
        </div>
      </div>
      <div className="mt-51.75 flex justify-end gap-4">
        <Button variant="my">정보수정</Button>
        <Button variant="my">로그아웃</Button>
      </div>
    </section>
  );
}

export default ApplyStatusSection;
