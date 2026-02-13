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
    <div className="relative flex w-full max-w-150 flex-col items-center gap-1.5 sm:max-w-248 sm:gap-2.5">
      <div
        onClick={handleToggle}
        className="h-16 w-full max-w-150 cursor-pointer rounded-[10px] border bg-linear-to-b from-white to-[#76cbf6] p-px sm:max-w-248"
      >
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-black">
          <div className="flex w-full items-center justify-between gap-5 px-5 sm:px-9">
            <div className="bg-linear-to-b from-white to-slate-400 bg-clip-text text-xs font-medium text-transparent sm:text-lg">
              {question}
            </div>

            <img
              src={FAQ}
              alt="FAQ"
              className={`h-1.5 w-3 transition-transform duration-300 sm:h-2 sm:w-3.5 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="flex h-16 w-full max-w-150 items-center rounded-[10px] bg-zinc-900 sm:max-w-248">
          <div className="w-full max-w-150 px-5 text-xs font-medium text-white sm:max-w-228 sm:px-9 sm:py-2 sm:text-base">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};
