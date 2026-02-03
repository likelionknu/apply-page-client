import type { ApplyItem } from "@my/types/ApplyItem";
import Button from "@shared/components/Button";

const STATUS_TEXT: Record<string, string> = {
  SUBMITTED: "서류 제출",
  REJECTED: "서류 탈락",
};

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const dayOfWeek = WEEKDAYS[date.getDay()];
  return `${year}.${month}.${day} ${dayOfWeek}`;
};

function ApplyCard({ data }: { data: ApplyItem }) {
  const statusLabel = STATUS_TEXT[data.status];
  return (
    <div className="apply-item-style flex items-center justify-between gap-4 p-4">
      <div>
        <span className="tracking-tight-custom text-[25px] leading-140 font-semibold">
          {data.recruitsTitle}
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
