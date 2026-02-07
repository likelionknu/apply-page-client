import Button from "@shared/components/Button";
import { formatDate } from "@shared/utils/FormatDate";
import type { ApplicationItem } from "@my/types/ApplicationItem";
import { useNavigate } from "react-router-dom";

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
  // const applicationId = data.applicationId;
  // data.applicationId 사용

  // const handleClick = (applicationId) => {
  //   navigate(`/recruit/${applicationId}`);
  // };

  return (
    <div className="apply-item-style flex items-center justify-between gap-4 p-4">
      <div className="flex flex-col">
        <span className="tracking-tight-custom text-[25px] leading-140 font-semibold">
          {data.recruitTitle}
        </span>
        <span className="tracking-tight-custom text-[20px] leading-140 font-medium">
          {formatDate(data.startAt)} ~ {formatDate(data.endAt)}
        </span>
      </div>
      <Button variant="myStatus">{statusLabel}</Button>
    </div>
  );
}

export default ApplicationCard;
