import { formatDateNotWeek } from "@shared/utils/FormatDate";
import type { ApplicationInfoProps } from "../types/ApplicationInfo";

function ApplicationInfo({ info }: ApplicationInfoProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="tracking-tight-custom max-w-40 text-[12px] leading-140 font-semibold md:max-w-120 md:text-[20px] lg:text-[30px] xl:min-w-173.5">
        {info.title}
      </div>
      <div className="tracking-tight-custom text-sub2 text-[12px] leading-140 font-normal md:text-[20px]">
        {formatDateNotWeek(info.start_at)} ~ {formatDateNotWeek(info.end_at)}
      </div>
    </div>
  );
}

export default ApplicationInfo;
