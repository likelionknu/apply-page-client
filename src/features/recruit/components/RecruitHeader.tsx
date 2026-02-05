import type { ApplicationInfoProps } from "@recruit/types/ApplicationInfo";
import RecruitInfo from "./RecruitInfo";
import SubmitStatusBadge from "./SubmitStatusBadge";

function RecruitHeader({ info }: ApplicationInfoProps) {
  return (
    <div className="flex w-full items-start justify-between">
      <RecruitInfo info={info} />
      <SubmitStatusBadge />
    </div>
  );
}

export default RecruitHeader;
