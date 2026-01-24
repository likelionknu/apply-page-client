import { useForm, type SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import type { RecruitFormValues } from "../type/RecruitForm";
import type { PartType } from "../../../shared/types/PartType.ts";
import { RecruitData } from "../mock/RecruitData.ts";
import Button from "../../../shared/components/Button";
import Header from "../../../shared/components/Header";
import QuestionSection from "../components/QuestionSection";
import Modal from "../../../shared/components/Modal";
import Footer from "../../../shared/components/Footer.tsx";

const SubmitTag = () => {
  return (
    <div className="recruit-tag-style text-white1 px-9.25 py-3 text-center text-[20px] leading-12 font-medium">
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
    <div className="w-full bg-[#111111]">
      <Header />
      <main className="text-white1 pt-20 pb-35.75">
        <section className="mx-auto flex max-w-360 flex-col items-center px-8">
          {currentPart ? (
            <>
              <div className="flex w-full items-start justify-between">
                <div className="flex flex-col gap-20">
                  <div className="tracking-tight-custom text-[42px] leading-140 font-semibold">
                    14기 아기사자 모집 - {currentPart.label}
                  </div>
                  <div className="tracking-tight-custom text-[24px] leading-140 font-normal">
                    2026.02.23 ~ 2026.03.06
                  </div>
                </div>
                <div>
                  <SubmitTag />
                </div>
              </div>
              <form
                className="mt-25 flex w-full flex-col gap-22.5"
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
              <div className="mt-41.75 flex gap-25">
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
      <Footer />
    </div>
  );
}

export default RecruitPage;
