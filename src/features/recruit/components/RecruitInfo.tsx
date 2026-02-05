import type { ApplicationInfoProps } from "@recruit/types/ApplicationInfo";
import { formatDateNotWeek } from "@shared/utils/FormatDate";

function RecruitInfo({ info }: ApplicationInfoProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="tracking-tight-custom text-[30px] leading-140 font-semibold">
        {info.title}
      </div>
      <div className="tracking-tight-custom text-sub2 text-[20px] leading-140 font-normal">
        {formatDateNotWeek(info.start_at)} ~{formatDateNotWeek(info.end_at)}
      </div>
    </div>
  );
}

export default RecruitInfo;
