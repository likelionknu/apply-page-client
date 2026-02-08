import type { ApplicationInfoProps } from "../types/ApplicationInfo";
import ApplicationInfo from "./ApplicationInfo";
import SubmitStatusBadge from "./SubmitStatusBadge";

function ApplicationHeader({ info }: ApplicationInfoProps) {
  return (
    <div className="flex w-full items-start justify-between">
      <ApplicationInfo info={info} />
      {info.status && <SubmitStatusBadge status={info.status} />}
    </div>
  );
}

export default ApplicationHeader;
