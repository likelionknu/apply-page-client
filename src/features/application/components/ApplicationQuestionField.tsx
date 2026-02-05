import { type Control, useController, type Path } from "react-hook-form";
import type { QuestionItem } from "../types/QuestionItem";
import type { ApplicationFormValues } from "../types/RecruitForm";

interface RecruitQuestionFieldProps {
  item: QuestionItem;
  control: Control<ApplicationFormValues>;
}

function ApplicationQuestionField({
  item,
  control,
}: RecruitQuestionFieldProps) {
  const {
    field: { onChange, value, ref, onBlur },
    // fieldState: { error },
  } = useController({
    name: `answers.${item.id}` as Path<ApplicationFormValues>,
    control,
    rules: {
      required: "답변을 입력해주세요.",
      maxLength: {
        value: 800,
        message: `최대 800자까지 입력 가능합니다.`,
      },
    },
  });

  const currentLength = (value as string | undefined)?.length || 0;

  return (
    <section className="relative flex flex-col">
      <label className="tracking-tight-custom text-[20px] leading-140 font-bold">
        Q. {item.question}
      </label>
      <textarea
        ref={ref}
        value={(value as string) || ""}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={800}
        placeholder="나는 문어 꿈을 꾸는 문어"
        className="recruit-box-style scrollbar-hide mt-5 h-67.5 resize-none px-6 py-6 text-[14px]"
      />
      <div className="tracking-tight-custom absolute right-8.5 bottom-6 text-[12px] leading-140 font-semibold">
        <span className="text-blue">{currentLength}</span>/<span>800</span>
      </div>
    </section>
  );
}

export default ApplicationQuestionField;
