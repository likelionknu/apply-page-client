import { useState } from "react";
import FAQ from "@main/assets/FAQ.png";

interface FAQCardProps {
  question: string;
  answer: string;
}

export const FAQCard: React.FC<FAQCardProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative flex flex-col items-center gap-2.5">
      <div
        onClick={handleToggle}
        className="h-16 w-248 cursor-pointer rounded-[10px] border bg-linear-to-b from-white to-[#76cbf6] p-px"
      >
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-black">
          <div className="flex w-228 items-center justify-between">
            <div className="bg-linear-to-b from-white to-slate-400 bg-clip-text text-lg font-medium text-transparent">
              {question}
            </div>

            <img
              src={FAQ}
              alt="FAQ"
              className={`h-2 w-3.5 transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </div>

      {/* 답변 박스 */}
      {isOpen && (
        <div className="flex h-16 w-248 items-center rounded-[10px] bg-zinc-900">
          <div className="ml-10 w-228 text-base font-medium text-white">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};
