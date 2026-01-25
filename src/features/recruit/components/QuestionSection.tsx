import { type Control, useController, type Path } from "react-hook-form";
import type { QuestionItem } from "../type/QuestionItem";
import type { RecruitFormValues } from "../type/RecruitForm";

interface QuestionProps {
  item: QuestionItem;
  control: Control<RecruitFormValues>;
}

function QestionSection({ item, control }: QuestionProps) {
  const {
    field: { onChange, value, ref, onBlur },
    // fieldState: { error },
  } = useController({
    name: `answers.${item.id}` as Path<RecruitFormValues>,
    control,
    rules: {
      required: "답변을 입력해주세요.",
      maxLength: {
        value: item.maxLength,
        message: `최대 ${item.maxLength}자까지 입력 가능합니다.`,
      },
    },
  });

  const currentLength = (value as string | undefined)?.length || 0;

  return (
    <section className="relative flex flex-col justify-start">
      <label className="tracking-tight-custom text-[32px] leading-140 font-bold">
        {item.question}
      </label>
      <textarea
        ref={ref}
        value={(value as string) || ""}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={item.maxLength}
        placeholder="나는 문어 꿈을 꾸는 문어"
        className="recruit-box-style scrollbar-hide mt-15 h-125 resize-none px-11.5 py-10 text-[24px]"
      />
      <div className="tracking-tight-custom absolute right-8.5 bottom-6 text-[30px] leading-140 font-semibold">
        <span className="text-blue">{currentLength}</span>/
        <span>{item.maxLength}</span>
      </div>
    </section>
  );
}

export default QestionSection;
