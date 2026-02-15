function SubmitStatusBadge({ status }: { status: string }) {
  if (status === "DRAFT") return null;

  const badgeText = status === "CANCELED" ? "회수" : "제출 완료";

  return (
    <div className="recruit-tag-style text-white1 border-[1.01px] px-3 py-2 text-center text-[8px] font-medium md:min-w-19.5 md:border-[2.02px] md:text-[14px]">
      {badgeText}
    </div>
  );
}

export default SubmitStatusBadge;
