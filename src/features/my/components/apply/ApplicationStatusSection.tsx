import { useEffect, useMemo, useState } from "react";
import Button from "@shared/components/Button";
import { getUserApplications } from "@my/apis";
import type { ApplicationItem } from "@my/types/ApplicationItem";
import ApplicationGroup from "./ApplicationGroup";

interface ApplicationStatusSectionProps {
  onLogout: () => void;
  onEdit: () => void;
}

function ApplicationStatusSection({
  onLogout,
  onEdit,
}: ApplicationStatusSectionProps) {
  const [applyData, setApplyData] = useState<ApplicationItem[]>([]);

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
    <section className="flex-1">
      <div className="flex flex-col gap-10">
        <div className="tracking-tight-custom text-[30px] leading-140 font-semibold">
          지원 현황
        </div>
        <ApplicationGroup
          title="진행"
          list={ongoingApplications}
          className="flex flex-col gap-5"
        />
        <ApplicationGroup
          title="종료"
          list={pastApplications}
          className="flex flex-col gap-5"
        />
      </div>
      <div className="mt-10 flex justify-end gap-4">
        <Button variant="my" onClick={onEdit}>
          정보수정
        </Button>
        <Button variant="my" onClick={onLogout}>
          로그아웃
        </Button>
      </div>
    </section>
  );
}

export default ApplicationStatusSection;
