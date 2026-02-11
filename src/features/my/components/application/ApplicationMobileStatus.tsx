import { useState } from "react";
import { Button } from "@shared/components";
import ApplicationCard from "./ApplicationCard";
import type { ApplicationItem } from "@my/types/ApplicationItem";

type FilterType = "ALL" | "PAST" | "ONGOING";

interface ApplicationMobileStatusProps {
  applyData: ApplicationItem[];
  ongoing: ApplicationItem[];
  past: ApplicationItem[];
}

function ApplicationMobileStatus({
  applyData,
  ongoing,
  past,
}: ApplicationMobileStatusProps) {
  const [filter, setFilter] = useState<FilterType>("ALL");

  const getCurrentList = () => {
    switch (filter) {
      case "ONGOING":
        return ongoing;
      case "PAST":
        return past;
      default:
        return applyData;
    }
  };

  const filteredList = getCurrentList();

  return (
    <div className="md:hidden">
      <div className="flex gap-2 md:hidden">
        <Button
          variant="myMobile"
          selected={filter === "ALL"}
          onClick={() => setFilter("ALL")}
        >
          전체
        </Button>
        <Button
          variant="myMobile"
          selected={filter === "ONGOING"}
          onClick={() => setFilter("ONGOING")}
        >
          진행 중
        </Button>
        <Button
          variant="myMobile"
          selected={filter === "PAST"}
          onClick={() => setFilter("PAST")}
        >
          완료
        </Button>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        {filteredList.length > 0 ? (
          filteredList.map((item) => (
            <ApplicationCard key={item.applicationId} data={item} />
          ))
        ) : (
          <div className="text-[12px] text-gray-500 md:text-[16px]">
            지원 내역이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}

export default ApplicationMobileStatus;
