import { type Control, useController, type Path } from "react-hook-form";
import type { QuestionItem } from "../types/QuestionItem";
import type { ApplicationFormValues } from "../types/ApplicationForm";
import { useState } from "react";

interface RecruitQuestionFieldProps {
  status?: string;
  item: QuestionItem;
  control: Control<ApplicationFormValues>;
}

function ApplicationQuestionField({
  status,
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

  const [isAtBottom, setIsAtBottom] = useState(false);
  const currentLength = (value as string | undefined)?.length || 0;

  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const isBottom = scrollTop + clientHeight >= scrollHeight - 2;
    setIsAtBottom(isBottom);
  };

  const isReadOnly = !!status;

  return (
    <section className="relative flex flex-col">
      <label className="tracking-tight-custom text-[12px] leading-140 font-bold md:text-[20px]">
        Q. {item.question}
      </label>
      <div className="recruit-box-style relative mt-5 h-48.5 w-full rounded-[9px] md:h-67.5 md:rounded-[30px] lg:max-h-67.5 lg:min-h-54">
        <textarea
          ref={ref}
          value={(value as string) || ""}
          onChange={onChange}
          onBlur={onBlur}
          maxLength={800}
          onScroll={handleScroll}
          readOnly={isReadOnly}
          placeholder={isReadOnly ? "" : "질문에 답변 해주세요."}
          className={`scrollbar-hide mt-3 h-42 w-full resize-none overflow-y-auto rounded-lg bg-transparent px-3 text-[10px] break-all placeholder:text-white focus:outline-none md:mt-5 md:h-57 md:px-6 md:text-[14px] lg:mt-0 lg:h-full lg:p-5 lg:px-6 ${
            isAtBottom
              ? ""
              : "mask-[linear-gradient(to_bottom,black_80%,transparent_100%)] [webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
          } `}
        />
        <div className="tracking-tight-custom absolute right-2.5 bottom-2.5 text-[7px] leading-140 font-semibold md:right-5.5 md:bottom-5 md:text-[12px] lg:right-5.5 lg:bottom-4">
          <span className="text-blue">{currentLength}</span>/<span>800</span>
        </div>
      </div>
    </section>
  );
}

export default ApplicationQuestionField;
