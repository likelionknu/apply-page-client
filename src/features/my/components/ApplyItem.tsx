import Button from "../../../shared/components/Button";

function ApplyItem() {
  return (
    <div className="apply-item-style flex items-center justify-between gap-4 p-4">
      <div>
        <span className="tracking-tight-custom text-[25px] leading-140 font-semibold">
          14기 기획 파트 공고
        </span>
        <span className="tracking-tight-custom ml-7.5 text-[20px] leading-140 font-medium">
          2026.02.28 MON ~ 2026.03.14 FRI
        </span>
      </div>
      <Button width="87px" borderWidth="1.01px" radius="20px" fontSize="14px">
        서류 탈락
      </Button>
    </div>
  );
}

export default ApplyItem;
