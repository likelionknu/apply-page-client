import { formatDate } from "@shared/utils/FormatDate";
import Button from "@shared/components/Button";
import type { ApplicationItem } from "@my/types/ApplicationItem";
import { STATUS_TEXT } from "@shared/constants/statusText";

function ApplyCard({ data }: { data: ApplicationItem }) {
  const statusLabel = STATUS_TEXT[data.status];

  return (
    <div className="apply-item-style flex items-center justify-between gap-4 p-4">
      <div>
        <span className="tracking-tight-custom text-[25px] leading-140 font-semibold">
          {data.recruitTitle}
        </span>
        <span className="tracking-tight-custom ml-7.5 text-[20px] leading-140 font-medium">
          {formatDate(data.startAt)} ~ {formatDate(data.endAt)}
        </span>
      </div>
      <Button variant="myStatus">{statusLabel}</Button>
    </div>
  );
}

export default ApplyCard;
