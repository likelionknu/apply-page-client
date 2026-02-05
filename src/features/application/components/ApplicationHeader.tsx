import type { ApplicationInfoProps } from "src/features/application/types/ApplicationInfo";
import ApplicationInfo from "./ApplicationInfo";
import SubmitStatusBadge from "./SubmitStatusBadge";

function ApplicationHeader({ info }: ApplicationInfoProps) {
  return (
    <div className="flex w-full items-start justify-between">
      <ApplicationInfo info={info} />
      <SubmitStatusBadge />
    </div>
  );
}

export default ApplicationHeader;
