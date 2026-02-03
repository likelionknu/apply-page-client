import { useMemo, useState } from "react";
import type { ApplyItem } from "@my/types/ApplyItem";
import Button from "@shared/components/Button";
import ApplyGroup from "./ApplyGroup";

function ApplyStatusSection() {
  const [applyData, setApplyData] = useState<ApplyItem[]>([
    {
      applicationId: 1,
      recruitsTitle: "13기 아기사자 모집",
      status: "SUBMITTED",
      startAt: "2026-01-15T12:00:00",
      endAt: "2026-02-20T12:00:00", // 진행중
    },
    {
      applicationId: 2,
      recruitsTitle: "13기 아기사자 모집",
      status: "SUBMITTED",
      startAt: "2026-01-15T12:00:00",
      endAt: "2026-02-20T12:00:00", // 진행중
    },
    {
      applicationId: 3,
      recruitsTitle: "지난 해커톤",
      status: "REJECTED",
      startAt: "2025-01-01T00:00:00",
      endAt: "2025-01-10T00:00:00", // 종료
    },
    {
      applicationId: 4,
      recruitsTitle: "지난 해커톤",
      status: "REJECTED",
      startAt: "2025-01-01T00:00:00",
      endAt: "2025-01-10T00:00:00", // 종료
    },
    {
      applicationId: 5,
      recruitsTitle: "지난 해커톤",
      status: "REJECTED",
      startAt: "2025-01-01T00:00:00",
      endAt: "2025-01-10T00:00:00", // 종료
    },
  ]);

  // 날짜 기준 데이터 분리
  const { ongoingApplications, pastApplications } = useMemo(() => {
    const now = new Date();

    return {
      ongoingApplications: applyData.filter(
        (item) => new Date(item.endAt) >= now,
      ),
      pastApplications: applyData.filter((item) => new Date(item.endAt) < now),
    };
  }, [applyData]);

  return (
    <section className="mt-19.25 flex-1">
      <div className="flex flex-col gap-8.25">
        <div className="tracking-tight-custom text-[32px] leading-140 font-semibold">
          지원 현황
        </div>
        <div className="border-sub1 w-full border-3"></div>
        <ApplyGroup
          title="진행"
          list={ongoingApplications}
          className="flex flex-col gap-6"
        />
        <ApplyGroup
          title="종료"
          list={pastApplications}
          className="mt-18.75 flex flex-col gap-6"
        />
      </div>
      <div className="mt-51.75 flex justify-end gap-4">
        <Button variant="my">정보수정</Button>
        <Button variant="my">로그아웃</Button>
      </div>
    </section>
  );
}

export default ApplyStatusSection;
