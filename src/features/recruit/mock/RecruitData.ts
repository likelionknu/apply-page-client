import type { PartType } from "../../../shared/types/PartType";
import type { QuestionItem } from "../type/QuestionItem";

interface PartDataInterface {
  label: string;
  questions: QuestionItem[];
}

export const RecruitData: Record<PartType, PartDataInterface> = {
  PM: {
    label: "기획",
    questions: [
      {
        id: 1,
        question:
          "Q. 본인이 만들고 싶은 서비스는 무엇이며, 그 이유는 무엇인가요?",
        maxLength: 800,
      },
      {
        id: 2,
        question:
          "Q. 팀 프로젝트 진행 중 의견 충돌이 발생했을 때, 이를 해결한 경험이 있나요?",
        maxLength: 800,
      },
      {
        id: 3,
        question:
          "Q. 평소 자주 사용하는 앱의 장점 한 가지와 개선하고 싶은 단점 한 가지를 서술해주세요.",
        maxLength: 800,
      },
      {
        id: 4,
        question:
          "Q. 개발자, 디자이너와 원활하게 소통하기 위해 가장 중요하다고 생각하는 것은 무엇인가요?",
        maxLength: 800,
      },
    ],
  },

  DE: {
    label: "디자인",
    questions: [
      {
        id: 1,
        question:
          "Q. 멋쟁이사자처럼 대학 14기에 지원하게 된 동기와 디자이너로서 이루고 싶은 목표는 무엇인가요?",
        maxLength: 800,
      },
      {
        id: 2,
        question:
          "Q. 본인이 생각하는 '좋은 디자인'이란 무엇인가요? (심미성, 사용성 등)",
        maxLength: 800,
      },
      {
        id: 3,
        question:
          "Q. 협업 과정에서 개발자에게 디자인 의도를 전달하기 위해 노력했던 경험이 있나요?",
        maxLength: 800,
      },
      {
        id: 4,
        question:
          "Q. 사용자 경험(UX)을 개선하기 위해 기존 서비스를 분석하거나 리디자인해본 경험을 적어주세요.",
        maxLength: 800,
      },
    ],
  },

  BE: {
    label: "백엔드",
    questions: [
      {
        id: 1,
        question:
          "Q. 백엔드 개발에 관심을 갖게 된 계기와, 지금까지 학습한 내용을 간략히 적어주세요.",
        maxLength: 800,
      },
      {
        id: 2,
        question:
          "Q. 프로젝트나 학습 중 발생한 에러를 해결하기 위해 끈기 있게 파고들었던 경험이 있나요?",
        maxLength: 800,
      },
      {
        id: 3,
        question:
          "Q. 다수의 클라이언트 요청을 효율적으로 처리하기 위해 API 설계 시 가장 중요하게 생각하는 점은 무엇인가요?",
        maxLength: 800,
      },
      {
        id: 4,
        question:
          "Q. 프론트엔드 팀원과 API 연동을 할 때, 어떤 방식으로 소통하고 문서를 공유하고 싶으신가요?",
        maxLength: 800,
      },
    ],
  },

  FE: {
    label: "프론트엔드",
    questions: [
      {
        id: 1,
        question:
          "Q. 프론트엔드 파트에 지원한 동기와 본인이 만들고 싶은 웹 서비스의 모습은 무엇인가요?",
        maxLength: 800,
      },
      {
        id: 2,
        question:
          "Q. 사용자에게 더 나은 경험(UI/UX)을 제공하기 위해 기술적으로 고민해본 경험이 있다면 서술해주세요.",
        maxLength: 800,
      },
      {
        id: 3,
        question:
          "Q. React 혹은 JS 학습 중 가장 이해하기 어려웠던 개념은 무엇이며, 이를 어떻게 극복했나요?",
        maxLength: 800,
      },
      {
        id: 4,
        question:
          "Q. 백엔드 개발자와 협업 시 데이터 연동 과정에서 발생할 수 있는 문제는 무엇이라고 생각하며, 어떻게 대비하겠습니까?",
        maxLength: 800,
      },
    ],
  },
};
