import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Header, Button, Footer } from "@shared/components";
import type { ModalType } from "@shared/types/ModalType.ts";
import { getApiErrorMessage } from "@shared/utils/GetApiErrorMessage";
import {
  cancelMyApplication,
  getMyApplicationQuestions,
} from "../apis/index.ts";
import {
  ApplicationQuestionField,
  ApplicationHeader,
  ApplicationModals,
  ButtonLayout,
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
  const { applicationId } = useParams<{ applicationId: string }>();
  const [applicationInfo, setApplicationInfo] = useState<ApplicationInfo>({
    recruitId: 0,
    title: "",
    start_at: "",
    end_at: "",
    status: "",
  });
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [errorMessage, setErrorMessage] =
    useState<string>("🚧 잘못된 접근입니다. 🚧"); // 모달 에러 메세지
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  // id가 숫자 맞는 지 확인
  const applicationID = Number(applicationId);
  const isValidId =
    applicationId !== undefined &&
    !isNaN(applicationID) &&
    Number.isInteger(applicationID);

  // 모달 비활성화
  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const { control, reset } = useForm<ApplicationFormValues>({
    mode: "onChange",
    defaultValues: { answers: {} },
  });

  // 지원서 회수
  const handleCancel = async () => {
    if (!applicationInfo.recruitId) return;

    try {
      await cancelMyApplication(applicationInfo.recruitId);

      navigate("/my");
    } catch (error) {
      let msg = "서버와 연결할 수 없습니다.";

      msg = getApiErrorMessage(error, msg);

      setErrorMessage(msg);
      setActiveModal("ERROR");
    }
  };

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

  // 내 지원서 정보 조회
  useEffect(() => {
    if (!isValidId) {
      navigate("/my", { replace: true });
      return;
    }

    const getApplication = async () => {
      try {
        const { data } = await getMyApplicationQuestions(applicationID);

        const apiData = data.data;

        if (apiData) {
          // 임시 저장이면 지원서 페이지로 이동
          if (apiData.status === "DRAFT") {
            navigate(`/recruit/${apiData.recruitId}`);
            return;
          }

          setApplicationInfo((prev) => ({
            ...prev,
            recruitId: apiData.recruitId,
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
        let msg = "서버와 연결할 수 없습니다.";

        msg = getApiErrorMessage(error, msg);

        setErrorMessage(msg);
        setActiveModal("ERROR");
      }
    };

    getApplication();
  }, [applicationID, isValidId, navigate]);

  return (
    <div className="bg-mobile-page-dark md:bg-web-background w-full bg-black md:bg-none">
      <Header />

      {/* 모달 */}
      <ApplicationModals
        activeModal={activeModal}
        errorMessage={errorMessage}
        errorButton="마이 페이지로 이동"
        onNavigate={() => navigate("/my")}
        onClose={handleCloseModal}
        onDelete={handleCancel}
      />

      {/* 컨텐츠 */}
      <main className="text-white1 min-h-dvh pt-6 pb-30 md:pt-10 md:pb-75">
        <section className="mx-auto flex max-w-360 flex-col items-center px-8 lg:px-50">
          <ApplicationHeader info={applicationInfo} />
          <form
            className="mt-7.5 flex w-full flex-col gap-11"
            onSubmit={(e) => e.preventDefault()}
          >
            {questions.map((item) => (
              <ApplicationQuestionField
                status={applicationInfo.status}
                item={item}
                key={item.id}
                control={control}
              />
            ))}
          </form>
          {applicationInfo.status === "SUBMITTED" && (
            <ButtonLayout>
              <Button
                variant="recruit"
                onClick={() => setActiveModal("CANCELED")}
              >
                회수하기
              </Button>
            </ButtonLayout>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default MyApplicationPage;
