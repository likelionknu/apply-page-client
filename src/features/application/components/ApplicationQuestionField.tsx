import { type Control, useController, type Path } from "react-hook-form";
import type { QuestionItem } from "../types/QuestionItem";
import type { ApplicationFormValues } from "../types/ApplicationForm";

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
      <label className="tracking-tight-custom text-[12px] leading-140 font-bold md:text-[20px]">
        Q. {item.question}
      </label>
      <div className="recruit-box-style relative mt-5 h-48.5 w-full rounded-[9px] md:h-67.5 md:rounded-[44px]">
        <textarea
          ref={ref}
          value={(value as string) || ""}
          onChange={onChange}
          onBlur={onBlur}
          maxLength={800}
          placeholder="나는 문어 꿈을 꾸는 문어"
          className="scrollbar-hide h-full w-full resize-none rounded-lg bg-transparent p-3 pb-8 text-[10px] break-all placeholder:text-gray-500 focus:outline-none md:p-5 md:text-[14px]"
        />
        <div className="tracking-tight-custom absolute right-2.5 bottom-2 text-[7px] leading-140 font-semibold md:right-6 md:bottom-5 md:text-[12px]">
          <span className="text-blue">{currentLength}</span>/<span>800</span>
        </div>
      </div>
    </section>
  );
}

export default ApplicationQuestionField;
