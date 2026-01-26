import { useForm, type SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import type { PartType } from "../../../shared/types/PartType.ts";
import type { RecruitFormValues } from "../type/RecruitForm";
import { RecruitData } from "../mock/RecruitData.ts";
import Header from "../../../shared/components/Header";
import Modal from "../../../shared/components/Modal";
import Button from "../../../shared/components/Button";
import Footer from "../../../shared/components/Footer";
import RecruitQuestionField from "../components/RecruitQuestionField";
import RecruitHeader from "../components/RecruitHeader";

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
              <RecruitHeader part={currentPart.label} />
              <form
                className="mt-25 flex w-full flex-col gap-22.5"
                onSubmit={(e) => e.preventDefault()}
              >
                {currentPart.questions.map((item) => (
                  <RecruitQuestionField
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
