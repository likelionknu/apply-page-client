import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import type { RecruitFormValues } from "../types/RecruitForm.ts";
import Header from "@shared/components/Header";
import Button from "@shared/components/Button";
import Footer from "@shared/components/Footer";
import Modal from "@shared/components/Modal.tsx";
import { getApplcationQuestions } from "@recruit/apis/index.ts";
import type { ApplicationInfo } from "@recruit/types/ApplicationInfo.ts";
import type { QuestionItem } from "@recruit/types/QuestionItem.ts";
import RecruitQuestionField from "../components/RecruitQuestionField";
import RecruitHeader from "../components/RecruitHeader";

type ModalType =
  | "ERROR"
  | null
  | "SUBMIT"
  | "SUBMIT_SUCCESS"
  | "SAVE"
  | "UNEXPECTED_PATH";

function RecruitPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // id가 숫자 맞는 지 확인
  const applicationId = id ? parseInt(id, 10) : NaN;
  const isValidId = !isNaN(applicationId);

  const [applicationInfo, setApplicationInfo] = useState<ApplicationInfo>({
    title: "",
    start_at: "",
    end_at: "",
  });
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  useEffect(() => {
    if (!isValidId) {
      setActiveModal("UNEXPECTED_PATH");
      return;
    }

    const getData = async () => {
      const { data } = await getApplcationQuestions(applicationId);
      console.log(data);
      const apiData = data.data;
      // const apiError = data.error;

      setApplicationInfo((prev) => ({
        ...prev,
        title: apiData.title,
        start_at: apiData.start_at,
        end_at: apiData.end_at,
      }));
      setQuestions(apiData.questions);

      // if (apiError.code) {
      //   // setErrorMessage(apiError.message);
      //   // setActvieModal("ERROR");
      // }
    };

    getData();
  }, []);

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

    // 폼에 값 주입
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
      {activeModal && (
        <Modal>
          <Modal.Title>🚧 잘못된 접근입니다. 🚧</Modal.Title>
          <Modal.ButtonLayout>
            <Button variant="modal" onClick={() => navigate("/apply")}>
              공고 페이지로 돌아가기
            </Button>
          </Modal.ButtonLayout>
        </Modal>
      )}
      <main className="text-white1 pt-10 pb-35.75">
        <section className="mx-auto flex max-w-360 flex-col items-center px-50">
          <RecruitHeader info={applicationInfo} />
          <form
            className="mt-15 flex w-full flex-col gap-22.5"
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
