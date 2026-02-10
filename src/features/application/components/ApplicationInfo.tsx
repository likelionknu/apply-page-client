import { formatDateNotWeek } from "@shared/utils/FormatDate";
import type { ApplicationInfoProps } from "../types/ApplicationInfo";

function ApplicationInfo({ info }: ApplicationInfoProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="tracking-tight-custom max-w-62.5 text-[14px] leading-140 font-semibold md:text-[30px]">
        {info.title}
      </div>
      <div className="tracking-tight-custom text-sub2 text-[12px] leading-140 font-normal md:text-[20px]">
        {formatDateNotWeek(info.start_at)} ~ {formatDateNotWeek(info.end_at)}
      </div>
    </div>
  );
}

export default ApplicationInfo;
