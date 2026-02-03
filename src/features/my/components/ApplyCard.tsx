import type { ApplyItem } from "@my/types/ApplyItem";
import Button from "@shared/components/Button";

function ApplyCard({ data }: { data: ApplyItem }) {
  return (
    <div className="apply-item-style flex items-center justify-between gap-4 p-4">
      <div>
        <span className="tracking-tight-custom text-[25px] leading-140 font-semibold">
          {data.recruitsTitle}
        </span>
        <span className="tracking-tight-custom ml-7.5 text-[20px] leading-140 font-medium">
          {data.startAt} ~ {data.endAt}
        </span>
      </div>
      <Button variant="myStatus">서류 탈락</Button>
    </div>
  );
}

export default ApplyCard;
