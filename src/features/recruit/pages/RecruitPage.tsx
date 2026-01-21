import { useForm, type SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import type { RecruitFormValues } from "../type/RecruitForm";
import type { PartType } from "../../../shared/types/PartType.ts";
import { RecruitData } from "../mock/RecruitData.ts";
import Button from "../../../shared/components/Button";
import Header from "../../../shared/components/Header";
import QuestionSection from "../components/QuestionSection";
import Modal from "../../../shared/components/Modal";

const SubmitTag = () => {
  return (
    <div className="text-white1 border-white1 rounded-[88px] border-[2.02px] bg-[#004ca3] px-8.75 py-5 text-center text-[28px] leading-12 font-medium">
      제출 완료
    </div>
  );
};

function RecruitPage() {
  const { part } = useParams<{ part: PartType }>();

  const currentPart = RecruitData[part as PartType];

  const {
    control,
    handleSubmit,
    getValues,
    // formState: { isSubmitting },
  } = useForm<RecruitFormValues>({
    mode: "onChange",
    defaultValues: { answers: {} },
  });

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
    <>
      <Header />
      <main className="text-white1 min-h-dvh w-full bg-[#111111] pt-40 pb-40">
        <section className="mx-auto flex max-w-310 flex-col items-center">
          {currentPart ? (
            <>
              <div className="flex w-full items-end justify-between">
                <div className="flex flex-col gap-8">
                  <div className="tracking-tight-custom text-[48px] leading-140 font-semibold">
                    14기 아기사자 모집 - {currentPart.label}
                  </div>
                  <div className="tracking-tight-custom text-[24px] leading-140 font-normal">
                    2026.02.23 ~ 2026.03.06
                  </div>
                </div>
                <div className="pb-2">
                  <SubmitTag />
                </div>
              </div>
              <form
                className="mt-20 flex w-full flex-col gap-16.25"
                onSubmit={(e) => e.preventDefault()}
              >
                {currentPart.questions.map((item) => (
                  <QuestionSection
                    item={item}
                    key={item.id}
                    control={control}
                  />
                ))}
              </form>
              <div className="mt-28 flex gap-25">
                <Button
                  borderWidth="2px"
                  radius="40px"
                  onClick={handleTempSave}
                >
                  임시저장
                </Button>
                <Button
                  borderWidth="2px"
                  radius="40px"
                  onClick={handleSubmit(onSubmit)}
                >
                  지원하기
                </Button>
              </div>
            </>
          ) : (
            <Modal>
              <Modal.Title>🚧 잘못된 접근입니다. 🚧</Modal.Title>
              <Modal.ButtonLayout>
                <Button>메인으로 돌아가기</Button>
              </Modal.ButtonLayout>
            </Modal>
          )}
        </section>
      </main>
    </>
  );
}

export default RecruitPage;
