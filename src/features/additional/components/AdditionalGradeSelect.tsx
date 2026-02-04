import React from "react";
import ArrowIcon from "../assets/Arrow.png";

interface AdditionalGradeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const uniGrades = ["1학년", "2학년", "3학년", "4학년"];

const AdditionalGradeSelectComponent = ({
  value,
  onChange,
}: AdditionalGradeSelectProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex w-68 flex-row-reverse items-center gap-13 lg:h-13.5 lg:w-99.25">
      <div className="relative rounded-lg bg-[linear-gradient(178deg,#FFF_-42.66%,#427E9C_97.86%)] p-px lg:w-62 lg:rounded-xl">
        <button
          onClick={() => setOpen(!open)}
          className={`flex h-8.25 w-44 items-center justify-between rounded-md bg-black px-5 py-3.5 text-[10px] font-medium lg:h-14 lg:w-full lg:rounded-[11px] lg:pr-3.75 lg:pl-7 lg:text-sm ${
            value ? "text-white" : "text-zinc-500"
          }`}
        >
          {value || "학년을 선택해주세요"}
          <img
            className="lg:w-3.8 h-[4.79px] w-2 lg:h-2"
            src={ArrowIcon}
            alt="arrow icon"
          />
        </button>

        {open && (
          <ul className="absolute left-0 z-50 w-full rounded-lg bg-[linear-gradient(178deg,#FFF_-42.66%,#427E9C_97.86%)] p-px shadow-lg lg:top-15 lg:rounded-xl">
            <div className="rounded-md bg-black lg:rounded-[11px]">
              {uniGrades.map((uniGrade) => (
                <li
                  key={uniGrade}
                  onClick={() => {
                    onChange(uniGrade);
                    setOpen(false);
                  }}
                  className="hover:text-blue cursor-pointer px-5 py-3.5 font-medium text-white lg:px-7 lg:py-3"
                >
                  {uniGrade}
                </li>
              ))}
            </div>
          </ul>
        )}
      </div>
      <div className="text-xs font-medium text-white lg:text-2xl lg:font-semibold">
        학년
      </div>
    </div>
  );
};

export default AdditionalGradeSelectComponent;
