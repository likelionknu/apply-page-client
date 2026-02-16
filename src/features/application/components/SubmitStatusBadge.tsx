import { STATUS_TEXT } from "@shared/constants/statusText";

function SubmitStatusBadge({ status }: { status: string }) {
  if (status === "DRAFT") return null;

  const badgeText = STATUS_TEXT[status];

  return (
    <div className="recruit-tag-style text-white1 mt-1.25 border-[1.01px] px-3 py-2 text-center text-[8px] font-medium md:min-w-19.5 md:border-[2.02px] md:text-[14px]">
      {badgeText}
    </div>
  );
}

export default SubmitStatusBadge;
