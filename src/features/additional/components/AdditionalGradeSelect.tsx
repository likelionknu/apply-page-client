import React from "react";
import ArrowIcon from "../assets/Arrow.png";

interface AdditionalGradeSelectProps {
  // value도 이제 숫자로 받도록 변경합니다.
  value: number | null;
  onChange: (value: number) => void;
}

// 1. 데이터 구조를 객체 배열로 변경
const uniGrades = [
  { label: "1학년", value: 1 },
  { label: "2학년", value: 2 },
  { label: "3학년", value: 3 },
  { label: "4학년", value: 4 },
];

const AdditionalGradeSelectComponent = ({
  value,
  onChange,
}: AdditionalGradeSelectProps) => {
  const [open, setOpen] = React.useState(false);

  // 2. 현재 선택된 숫자에 맞는 한글 라벨 찾기
  const selectedLabel = uniGrades.find((g) => g.value === value)?.label;

  return (
    <div className="flex w-68 flex-row-reverse items-center gap-13 lg:h-13.5 lg:w-99.25">
      <div className="relative rounded-lg bg-[linear-gradient(178deg,#FFF_-42.66%,#427E9C_97.86%)] p-px lg:w-62 lg:rounded-xl">
        <button
          type="button" // form 안에 있을 경우 대비
          onClick={() => setOpen(!open)}
          className={`flex h-8.25 w-44 items-center justify-between rounded-md bg-black px-5 py-3.5 text-[10px] font-medium lg:h-14 lg:w-full lg:rounded-[11px] lg:pr-3.75 lg:pl-7 lg:text-sm ${
            value ? "text-white" : "text-zinc-500"
          }`}
        >
          {/* 3. 숫자가 아닌 한글 라벨을 보여줌 */}
          {selectedLabel || "학년을 선택해주세요"}
          <img
            className="lg:w-3.8 h-[4.79px] w-2 lg:h-2"
            src={ArrowIcon}
            alt="arrow icon"
          />
        </button>

        {open && (
          <ul className="absolute left-0 z-50 w-full rounded-lg bg-[linear-gradient(178deg,#FFF_-42.66%,#427E9C_97.86%)] p-px shadow-lg lg:top-15 lg:rounded-xl">
            <div className="rounded-md bg-black lg:rounded-[11px]">
              {uniGrades.map((grade) => (
                <li
                  key={grade.value}
                  onClick={() => {
                    // 4. 클릭 시 grade.value(숫자)를 전달
                    onChange(grade.value);
                    setOpen(false);
                  }}
                  className="hover:text-blue cursor-pointer px-5 py-3.5 font-medium text-white lg:px-7 lg:py-3"
                >
                  {grade.label}
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
