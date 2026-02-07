import { api } from "@shared/apis/index";

interface ApplicationItem {
  questionId: number;
  answer: string;
}

interface SubmitApplicationPayload {
  recruitId: number;
  items: ApplicationItem[];
}

interface SaveApplicationPayload {
  recruitId: number;
  payload: ApplicationItem[];
}

// 공고 질문과 답변 조회
export const getApplicationQuestions = async (recruitId: number) => {
  const res = await api.get(`/v1/recruits/${recruitId}/questions`);

  return res;
};

// 마이 페이지 - 지원서 상세 정보 조회
export const getMyApplicationQuestions = async (recruitId: number) => {
  const res = await api.get(`/v1/applications/${recruitId}`);

  return res;
};

// 지원서 제출
export const submitApplicationAnswers = async (
  payload: SubmitApplicationPayload,
) => {
  const res = await api.post("/v1/applications", payload);

  return res;
};

// 지원서 임시 저장
export const savedApplicationAnswers = async ({
  recruitId,
  payload,
}: SaveApplicationPayload) => {
  const res = await api.put(`/v1/applications/drafts/${recruitId}`, payload);

  return res;
};

// 지원서 회수
