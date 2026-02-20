import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@shared/components/Button";
import { formatDate } from "@shared/utils/FormatDate";
import type { ApplicationItem } from "@my/types/ApplicationItem";
import { STATUS_TEXT } from "@shared/constants/statusText";

function ApplicationCard({ data }: { data: ApplicationItem }) {
  const navigate = useNavigate();
  const statusLabel = STATUS_TEXT[data.status];
  const applicationId = data.applicationId;
  const periodText = useMemo(
    () => `${formatDate(data.startAt)} ~ ${formatDate(data.endAt)}`,
    [data.startAt, data.endAt],
  );

  const handleClick = () => {
    navigate(`/recruit/my/${applicationId}`);
  };

  return (
    <div className="apply-item-style flex items-center justify-between gap-4 rounded-[9px] px-5 py-4 md:rounded-[19px] md:p-4 lg:px-10 lg:py-7">
      <div className="flex flex-col gap-1 md:gap-4">
        <span className="tracking-tight-custom text-[10px] leading-140 font-semibold md:text-[14px] lg:text-[18px]">
          {data.recruitTitle}
        </span>
        <span className="tracking-tight-custom text-[8px] leading-140 font-medium md:text-[12px] lg:text-[16px]">
          {periodText}
        </span>
      </div>
      <Button variant="myStatus" onClick={handleClick}>
        {statusLabel}
      </Button>
    </div>
  );
}

export default ApplicationCard;
