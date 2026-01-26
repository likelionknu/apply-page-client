import RecruitInfo from "./RecruitInfo";
import SubmitStatusBadge from "./SubmitStatusBadge";

function RecruitHeader({ part }: { part: string }) {
  return (
    <div className="flex w-full items-start justify-between">
      <RecruitInfo part={part} />
      <SubmitStatusBadge />
    </div>
  );
}

export default RecruitHeader;
