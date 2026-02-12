import { useNavigate } from "react-router-dom";
import Button from "@shared/components/Button";
import { formatDate } from "@shared/utils/FormatDate";
import type { ApplicationItem } from "@my/types/ApplicationItem";

const STATUS_TEXT: Record<string, string> = {
  // 초기 단계
  DRAFT: "임시저장",
  SUBMITTED: "최종제출",
  CANCELED: "회수",

  // 서류 전형
  UNDER_DOCUMENT_REVIEW: "서류 검토 중",
  DOCUMENT_PASSED: "서류 합격",
  DOCUMENT_FAILED: "서류 불합격",

  // 면접 전형
  WAITING_INTERVIEW: "면접 대기",
  DONE_INTERVIEW: "면접 완료",
  UNDER_INTERVIEW_REVIEW: "면접 검토 중",

  // 최종 결과
  FINAL_PASSED: "최종 합격",
  FAIL_INTERVIEW: "최종 불합격",
};

function ApplicationCard({ data }: { data: ApplicationItem }) {
  const navigate = useNavigate();
  const statusLabel = STATUS_TEXT[data.status];
  const applicationId = data.applicationId;

  const handleClick = () => {
    navigate(`/recruit/my/${applicationId}`);
  };

  return (
    <div className="apply-item-style flex items-center justify-between gap-4 rounded-[9px] px-5 py-4 md:rounded-[19px] md:px-10 md:py-7">
      <div className="flex flex-col gap-1 md:gap-4">
        <span className="tracking-tight-custom text-[10px] leading-140 font-semibold md:text-[18px]">
          {data.recruitTitle}
        </span>
        <span className="tracking-tight-custom text-[8px] leading-140 font-medium md:text-[16px]">
          {formatDate(data.startAt)} ~ {formatDate(data.endAt)}
        </span>
      </div>
      <Button variant="myStatus" onClick={handleClick}>
        {statusLabel}
      </Button>
    </div>
  );
}

export default ApplicationCard;
