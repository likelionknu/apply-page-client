export type Status =
  | "DRAFT"
  | "SUBMITTED"
  | "CANCELED"
  // 서류 전형
  | "UNDER_DOCUMENT_REVIEW"
  | "DOCUMENT_PASSED"
  | "DOCUMENT_FAILED"
  // 면접 전형
  | "WAITING_INTERVIEW"
  | "DONE_INTERVIEW"
  | "UNDER_INTERVIEW_REVIEW"
  // 최종 결과
  | "FINAL_PASSED"
  | "FAIL_INTERVIEW";

export interface ApplicationItem {
  applicationId: number;
  recruitTitle: string;
  status: Status;
  startAt: string;
  endAt: string;
}
