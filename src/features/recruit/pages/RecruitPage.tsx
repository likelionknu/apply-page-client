import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import type { PartType } from "@shared/types/PartType.ts";
import type { RecruitFormValues } from "../types/RecruitForm.ts";
import Header from "@shared/components/Header";
import Button from "@shared/components/Button";
import Footer from "@shared/components/Footer";
import RecruitQuestionField from "../components/RecruitQuestionField";
import RecruitHeader from "../components/RecruitHeader";

interface RecruitAnswerItem {
  id: number;
  question: string;
  maxLength: number;
  savedAnswer: string | null;
}

const CURRENT_PART = {
  PM: "기획",
  DE: "디자인",
  BE: "백엔드",
  FE: "프론트엔드",
};

function RecruitPage() {
  const { part } = useParams<{ part: PartType }>();
  const [questions, setQuestions] = useState<RecruitAnswerItem[]>([
    {
      id: 1,
      question:
        "Q. 본인이 만들고 싶은 서비스는 무엇이며, 그 이유는 무엇인가요?",
      maxLength: 800,
      savedAnswer: "사용자들의 불편함을 해소하는 서비스를 만들고 싶습니다.",
    },
    {
      id: 2,
      question:
        "Q. 팀 프로젝트 진행 중 의견 충돌이 발생했을 때, 이를 해결한 경험이 있나요?",
      maxLength: 800,
      savedAnswer: "나는 문어",
    },
    {
      id: 3,
      question:
        "Q. 평소 자주 사용하는 앱의 장점 한 가지와 개선하고 싶은 단점 한 가지를 서술해주세요.",
      maxLength: 800,
      savedAnswer: null,
    },
    {
      id: 4,
      question:
        "Q. 개발자, 디자이너와 원활하게 소통하기 위해 가장 중요하다고 생각하는 것은 무엇인가요?",
      maxLength: 800,
      savedAnswer: null,
    },
  ]);
  const partLabel = CURRENT_PART[part as PartType];

  const {
    control,
    handleSubmit,
    getValues,
    reset,
    // formState: { isSubmitting },
  } = useForm<RecruitFormValues>({
    mode: "onChange",
    defaultValues: { answers: {} },
  });

  // 저장된 답변 폼에 넣기
  useEffect(() => {
    const loadedAnswers = questions.reduce(
      (acc, curr) => {
        acc[curr.id] = curr.savedAnswer || ""; // null이면 빈 문자열로 변환
        return acc;
      },
      {} as Record<number, string>,
    );

    // 폼에 값 주입!
    reset({ answers: loadedAnswers });
  }, [questions, reset]);

  const onSubmit: SubmitHandler<RecruitFormValues> = async (data) => {
    console.log(data);
    console.log("최종 제출 데이터:", data.answers);
    // await api.post('/submit', { ... })
  };

  const handleTempSave = () => {
    const currentData = getValues();

    console.log("임시 저장할 데이터:", currentData.answers);
  };

  return (
    <div className="w-full bg-[#111111]">
      <Header />
      <main className="text-white1 pt-20 pb-35.75">
        <section className="mx-auto flex max-w-360 flex-col items-center px-8">
          <RecruitHeader part={partLabel} />
          <form
            className="mt-25 flex w-full flex-col gap-22.5"
            onSubmit={(e) => e.preventDefault()}
          >
            {questions.map((item) => (
              <RecruitQuestionField
                item={item}
                key={item.id}
                control={control}
              />
            ))}
          </form>
          <div className="mt-41.75 flex gap-25">
            <Button variant="recruit" onClick={handleTempSave}>
              임시저장
            </Button>
            <Button variant="recruit" onClick={handleSubmit(onSubmit)}>
              지원하기
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default RecruitPage;
