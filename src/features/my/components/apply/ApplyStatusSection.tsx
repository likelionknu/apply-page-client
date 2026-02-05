import { useEffect, useMemo, useState } from "react";
import type { ApplyItem } from "@my/types/ApplyItem";
import Button from "@shared/components/Button";
import ApplyGroup from "./ApplyGroup";
import { getUserApplications } from "@my/apis";

interface ApplyStatusSectionProps {
  onLogout: () => void;
}

function ApplyStatusSection({ onLogout }: ApplyStatusSectionProps) {
  const [applyData, setApplyData] = useState<ApplyItem[]>([]);

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

  useEffect(() => {
    const getData = async () => {
      const { data } = await getUserApplications();

      const apiData = data.data;
      // const apiError = data.error;

      // if (apiError.code) {
      // }
      setApplyData(apiData);
    };

    getData();
  }, []);

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
        <Button variant="my" onClick={onLogout}>
          로그아웃
        </Button>
      </div>
    </section>
  );
}

export default ApplyStatusSection;
