import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Header, Button, Footer, ErrorModal } from "@shared/components";
import type { ModalType } from "@shared/types/ModalType.ts";
import {
  cancelMyApplication,
  getMyApplicationQuestions,
} from "../apis/index.ts";
import {
  ApplicationQuestionField,
  ApplicationHeader,
  CancelModal,
} from "@application/components";
import type { ApplicationFormValues } from "../types/ApplicationForm.ts";
import type { QuestionItem } from "../types/QuestionItem.ts";
import type { ApplicationInfo } from "../types/ApplicationInfo.ts";

interface ApiAnswer {
  questionId: number;
  question: string;
  answer: string | null;
}

function MyApplicationPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [applicationInfo, setApplicationInfo] = useState<ApplicationInfo>({
    title: "",
    start_at: "",
    end_at: "",
    status: "",
  });
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [errorMessage, setErrorMessage] =
    useState<string>("🚧 잘못된 접급입니다. 🚧"); // 모달 에러 메세지
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  // id가 숫자 맞는 지 확인
  const applicationId = Number(id);
  const isValidId =
    id !== undefined &&
    !isNaN(applicationId) &&
    Number.isInteger(applicationId);

  // 모달 비활성화
  const handleCloseModal = () => {
    setActiveModal(null);
  };

  // 내 지원서 정보 조회
  useEffect(() => {
    if (!isValidId) {
      navigate("/my");
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

          const mappedQuestions = (apiData.answers as ApiAnswer[]).map(
            (item) => ({
              id: item.questionId,
              question: item.question,
              savedAnswer: item.answer,
            }),
          );

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
        acc[curr.id] = curr.savedAnswer || "";
        return acc;
      },
      {} as Record<number, string>,
    );

    // 폼에 값 주입
    reset({ answers: loadedAnswers });
  }, [questions, reset]);

  // 지원서 회수
  const handleCancel = async () => {
    try {
      const { data } = await cancelMyApplication(applicationId);
      const apiError = data.error;

      if (apiError.code) {
        setErrorMessage(apiError.message);
        setActiveModal("ERROR");
        console.log(apiError.message);
      }

      navigate("/main");
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

  return (
    <div className="w-full bg-[#111111]">
      <Header />

      <ErrorModal
        isShow={activeModal === "ERROR"}
        content={errorMessage}
        buttonText="마이 페이지로 돌아가기"
        onClick={() => navigate("/my")}
      />

      <CancelModal
        isShow={activeModal === "CANCELED"}
        onClose={handleCloseModal}
        onDelete={handleCancel}
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
            {applicationInfo.status === "SUBMITTED" && (
              <Button
                variant="recruit"
                onClick={() => setActiveModal("CANCELED")}
              >
                지원서 회수하기
              </Button>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MyApplicationPage;
