import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Header, Button, Footer, ErrorModal } from "@shared/components";
import type { ModalType } from "@shared/types/ModalType.ts";
import {
  getApplicationQuestions,
  savedApplicationAnswers,
  submitApplicationAnswers,
} from "../apis/index.ts";
import {
  ApplicationQuestionField,
  ApplicationHeader,
  SubmitModal,
  SavedModal,
} from "@application/components";
import type { ApplicationInfo } from "../types/ApplicationInfo.ts";
import type { QuestionItem } from "../types/QuestionItem.ts";
import type { ApplicationFormValues } from "../types/ApplicationForm.ts";

function ApplicationPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [applicationInfo, setApplicationInfo] = useState<ApplicationInfo>({
    title: "",
    start_at: "",
    end_at: "",
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

  // 공고 질문 내용과 답변 가져오기
  useEffect(() => {
    if (!isValidId) {
      navigate("/apply");
      return;
    }

    const getApplication = async () => {
      try {
        const { data } = await getApplicationQuestions(applicationId);

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
            title: apiData.title,
            start_at: apiData.start_at,
            end_at: apiData.end_at,
          }));
          setQuestions(apiData.questions);
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

  // 지원서 최종 제출
  const onSubmit: SubmitHandler<ApplicationFormValues> = async (datas) => {
    // 빈 답변이 하나라도 있으면 에러 모달 표시
    const hasEmptyAnswer = Object.values(datas.answers).some((val) => {
      if (val === undefined || val === null) return true;
      if (typeof val === "string") return val.trim() === "";
      return false;
    });

    if (hasEmptyAnswer) {
      setErrorMessage("모든 질문에 답변해주세요.");
      setActiveModal("ERROR");
      return;
    }

    // Form 데이터를 API 형식으로 변환
    const formattedItems = Object.entries(datas.answers).map(
      ([key, value]) => ({
        questionId: Number(key),
        answer: value,
      }),
    );

    const payload = {
      recruitId: applicationId,
      items: formattedItems,
    };

    console.log(payload);

    try {
      const { data } = await submitApplicationAnswers(payload);

      const apiError = data.error;

      if (apiError && apiError.code) {
        setErrorMessage(apiError.message);
        setActiveModal("ERROR");
        return;
      }

      // 제출 성공 후 모달 활성화
      setActiveModal("SUBMIT");
    } catch (error) {
      let msg =
        "지원서 제출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";

      if (axios.isAxiosError(error) && error.response?.data?.message) {
        msg = error.response.data.message;
      } else if (error instanceof Error) {
        msg = error.message;
      }

      setErrorMessage(msg);
      setActiveModal("ERROR");
    }
  };

  // 지원서 임시 저장
  const handleTempSave = async () => {
    const currentAnswers = getValues("answers");

    const formattedItems = Object.entries(currentAnswers).map(
      ([key, value]) => ({
        questionId: Number(key),
        answer: value,
      }),
    );

    try {
      const { data } = await savedApplicationAnswers({
        recruitId: applicationId,
        payload: formattedItems,
      });

      const apiError = data.error;

      if (apiError && apiError.code) {
        setErrorMessage(apiError.message);
        setActiveModal("ERROR");
        return;
      }

      // 임시 저장 성공 후 모달 활성화
      setActiveModal("SAVED");
    } catch (error) {
      let msg = "임시 저장 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";

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
        buttonText="공고 페이지로 돌아가기"
        onClick={() => navigate("/apply")}
      />

      <SubmitModal isShow={activeModal === "SUBMIT"} />

      <SavedModal isShow={activeModal === "SAVED"} />

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

export default ApplicationPage;
