import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Header, Button, Footer, Spinner } from "@shared/components";
import type { ModalType } from "@shared/types/ModalType.ts";
import { getApiErrorMessage } from "@shared/utils/GetApiErrorMessage";
import {
  getApplicationQuestions,
  savedApplicationAnswers,
  submitApplicationAnswers,
} from "../apis/index.ts";
import {
  ApplicationQuestionField,
  ApplicationHeader,
  ApplicationModals,
  ButtonLayout,
} from "@application/components";
import type { ApplicationInfo } from "../types/ApplicationInfo.ts";
import type { QuestionItem } from "../types/QuestionItem.ts";
import type { ApplicationFormValues } from "../types/ApplicationForm.ts";

type ErrorAction = "APPLY" | "CLOSE";

function ApplicationPage() {
  const navigate = useNavigate();
  const { recruitId } = useParams<{ recruitId: string }>();
  const [applicationInfo, setApplicationInfo] = useState<ApplicationInfo>({
    title: "",
    start_at: "",
    end_at: "",
  });
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] =
    useState<string>("🚧 잘못된 접근입니다. 🚧"); // 모달 에러 메세지
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorAction, setErrorAction] = useState<ErrorAction>("APPLY");

  // id가 숫자 맞는 지 확인
  const recruitID = Number(recruitId);
  const isValidId =
    recruitId !== undefined && !isNaN(recruitID) && Number.isInteger(recruitID);
  const endAtTime = new Date(applicationInfo.end_at).getTime();
  const isRecruitClosed = Number.isFinite(endAtTime) && Date.now() > endAtTime;

  const onInvalid = () => {
    setErrorMessage("모든 질문에 대한 답변을 입력해주세요.");
    setActiveModal("InputState");
  };

  // 모달 비활성화
  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleErrorModalAction = () => {
    if (errorAction === "APPLY") {
      navigate("/apply");
      return;
    }

    handleCloseModal();
  };

  const errorButtonText =
    errorAction === "APPLY" ? "공고 페이지로 이동" : "닫기";

  // 지원서 최종 제출
  const onSubmit: SubmitHandler<ApplicationFormValues> = async (datas) => {
    if (isSubmitting || isRecruitClosed) return;

    setIsLoading(true);
    setIsSubmitting(true);

    // Form 데이터를 API 형식으로 변환
    const formattedItems = Object.entries(datas.answers).map(
      ([key, value]) => ({
        questionId: Number(key),
        answer: value,
      }),
    );

    const payload = {
      recruitId: recruitID,
      items: formattedItems,
    };

    try {
      await submitApplicationAnswers(payload);

      // 제출 성송 모달 활성화
      setActiveModal("SUBMIT");
    } catch (error) {
      let msg =
        "지원서 제출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";

      msg = getApiErrorMessage(error, msg);

      setErrorMessage(msg);
      setErrorAction("CLOSE");
      setActiveModal("ERROR");
    } finally {
      setIsLoading(false);
      setIsSubmitting(false);
    }
  };

  // 지원서 임시 저장
  const handleTempSave = async () => {
    if (isSubmitting || isRecruitClosed) return;

    setIsSubmitting(true);

    const currentAnswers = getValues("answers");

    const formattedItems = Object.entries(currentAnswers).map(
      ([key, value]) => ({
        questionId: Number(key),
        answer: value,
      }),
    );

    try {
      await savedApplicationAnswers({
        recruitId: recruitID,
        payload: formattedItems,
      });

      // 임시 저장 성공 후 모달 활성화
      setActiveModal("SAVED");
    } catch (error) {
      let msg = "임시 저장 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";

      msg = getApiErrorMessage(error, msg);

      setErrorMessage(msg);
      setErrorAction("CLOSE");
      setActiveModal("ERROR");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 공고 질문 내용과 답변 가져오기
  useEffect(() => {
    if (!isValidId) {
      navigate("/apply");
      return;
    }

    const getApplication = async () => {
      try {
        const { data } = await getApplicationQuestions(recruitID);

        const apiData = data.data;

        if (apiData) {
          setApplicationInfo((prev) => ({
            ...prev,
            title: apiData.title,
            start_at: apiData.start_at,
            end_at: apiData.end_at,
          }));
          setQuestions(apiData.questions);
        }
      } catch (error) {
        let msg = "서버와 연결할 수 없습니다.";

        msg = getApiErrorMessage(error, msg);

        setErrorMessage(msg);
        setErrorAction("APPLY");
        setActiveModal("ERROR");
      }
    };

    getApplication();
  }, [recruitID, isValidId, navigate]);

  useEffect(() => {
    if (!isRecruitClosed) return;

    navigate("/main", { replace: true });
  }, [isRecruitClosed, navigate]);

  const { control, handleSubmit, getValues, reset } =
    useForm<ApplicationFormValues>({
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
    <div className="bg-mobile-page-dark md:bg-web-background w-full bg-black md:bg-none">
      <Header />

      {/* 모달 */}
      <ApplicationModals
        activeModal={activeModal}
        errorMessage={errorMessage}
        errorButton={errorButtonText}
        onNavigate={handleErrorModalAction}
        onClose={handleCloseModal}
      />

      {isLoading && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Spinner />
        </div>
      )}

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
                item={item}
                key={item.id}
                control={control}
              />
            ))}
          </form>
          <ButtonLayout>
            <Button
              variant="recruit"
              onClick={handleTempSave}
              disabled={isSubmitting || isRecruitClosed}
            >
              임시저장
            </Button>
            <Button
              variant="recruit"
              onClick={handleSubmit(onSubmit, onInvalid)}
              disabled={isSubmitting || isRecruitClosed}
            >
              지원하기
            </Button>
          </ButtonLayout>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ApplicationPage;
