import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import type { ApplicationFormValues } from "../types/ApplicationForm.ts";
import { Header, Button, Footer, ErrorModal } from "@shared/components";
import { getMyApplicationQuestions } from "../apis/index.ts";

import type { QuestionItem } from "../types/QuestionItem.ts";
import type { ApplicationInfo } from "../types/ApplicationInfo.ts";
import {
  ApplicationQuestionField,
  ApplicationHeader,
  RetractModal,
} from "@application/components";
import CancelModal from "@application/components/modal/CancelModal.tsx";

type ModalType = "ERROR" | null | "CANCELED";

function MyApplicationPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // id가 숫자 맞는 지 확인
  const applicationId = Number(id);
  const isValidId =
    id !== undefined &&
    !isNaN(applicationId) &&
    Number.isInteger(applicationId);

  const [applicationInfo, setApplicationInfo] = useState<ApplicationInfo>({
    title: "",
    start_at: "",
    end_at: "",
    status: "",
  });
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [errorMessage, setErrorMessage] =
    useState<string>("🚧 잘못된 접급입니다. 🚧"); // 모달 에러 메세지
  // const [activeModal, setActiveModal] = useState<ModalType>("SAVED");
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  // 공고 질문 내용과 답변 가져오기
  useEffect(() => {
    if (!isValidId) {
      navigate("/apply");
      return;
    }

    const getApplication = async () => {
      try {
        const { data } = await getMyApplicationQuestions(applicationId);

        const apiData = data.data;
        const apiError = data.error;

        if (apiError && apiError.code) {
          setErrorMessage(apiError.message);
          setActiveModal("ERROR");
          return;
        }

        if (apiData) {
          setApplicationInfo((prev) => ({
            ...prev,
            title: apiData.recruitTitle,
            start_at: apiData.startAt,
            end_at: apiData.endAt,
            status: apiData.status,
          }));

          const mappedQuestions = apiData.answers.map((item: any) => ({
            id: item.questionId,
            question: item.question,
            savedAnswer: item.answer,
          }));

          setQuestions(mappedQuestions);
        }
      } catch (error) {
        let msg = "서버와 연결할 수 없습니다. 잠시 후 다시 시도해주세요.";

        if (axios.isAxiosError(error) && error.response?.data?.message) {
          msg = error.response.data.message;
        } else if (error instanceof Error) {
          msg = error.message;
        }

        setErrorMessage(msg);
        setActiveModal("ERROR");
      }
    };

    getApplication();
  }, [applicationId, isValidId, navigate]);

  const { control, reset } = useForm<ApplicationFormValues>({
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

    // 폼에 값 주입
    reset({ answers: loadedAnswers });
  }, [questions, reset]);

  return (
    <div className="w-full bg-[#111111]">
      <Header />

      <ErrorModal
        isShow={activeModal === "ERROR"}
        content={errorMessage}
        buttonText="공고 페이지로 돌아가기"
        onClick={() => navigate("/apply")}
      />

      <CancelModal
        isShow={activeModal === "CANCELED"}
        onClose={() => setActiveModal(null)}
      />

      <main className="text-white1 pt-10 pb-35.75">
        <section className="mx-auto flex max-w-360 flex-col items-center px-50">
          <ApplicationHeader info={applicationInfo} />
          <form
            className="mt-15 flex w-full flex-col gap-22.5"
            onSubmit={(e) => e.preventDefault()}
          >
            {questions.map((item) => (
              <ApplicationQuestionField
                item={item}
                key={item.id}
                control={control}
              />
            ))}
          </form>
          <div className="mt-41.75 flex gap-25">
            <Button variant="recruit">지원서 회수하기</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MyApplicationPage;
