import type { Status } from "@my/types/ApplicationItem";

export const STATUS_TEXT: Record<Status, string> = {
  // 초기 단계
  DRAFT: "임시저장",
  SUBMITTED: "최종 제출",
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
