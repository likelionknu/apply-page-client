function RecruitInfo({ part }: { part: string }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="tracking-tight-custom text-[30px] leading-140 font-semibold">
        14기 아기사자 모집 - {part}
      </div>
      <div className="tracking-tight-custom text-[20px] leading-140 font-normal">
        2026.02.23 ~ 2026.03.06
      </div>
    </div>
  );
}

export default RecruitInfo;
