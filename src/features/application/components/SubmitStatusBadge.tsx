function SubmitStatusBadge({ status }: { status: string }) {
  if (status === "DRAFT") return;

  return (
    <div className="recruit-tag-style text-white1 px-8.5 py-3 text-center text-[14px] font-medium">
      제출 완료
    </div>
  );
}

export default SubmitStatusBadge;
