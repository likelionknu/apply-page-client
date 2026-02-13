function SubmitStatusBadge({ status }: { status: string }) {
  if (status === "DRAFT") return;

  return (
    <div className="recruit-tag-style text-white1 border-[1.01px] px-3 py-2 text-center text-[8px] font-medium md:border-[2.02px] md:text-[14px]">
      제출 완료
    </div>
  );
}

export default SubmitStatusBadge;
