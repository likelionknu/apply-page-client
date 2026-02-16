import { useEffect, useRef, useState } from "react";
import ArrowIcon from "../assets/Arrow.png";

interface AdditionalGradeSelectProps {
  value: number | null;
  onChange: (value: number) => void;
}

// 학년 데이터
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
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // 선택된 값에 해당하는 라벨
  const selectedLabel = uniGrades.find((g) => g.value === value)?.label;

  // 바깥 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="flex w-68 flex-row-reverse items-center gap-13 lg:h-13 lg:w-83.5 lg:gap-7.5"
    >
      {/* 드롭다운 */}
      <div className="relative rounded-lg bg-[linear-gradient(178deg,#FFF_-42.66%,#427E9C_97.86%)] p-px lg:w-62 lg:rounded-xl">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={`flex h-8.25 w-44 items-center justify-between rounded-md bg-black px-5 py-3.5 text-[10px] font-medium lg:h-13 lg:w-full lg:rounded-[11px] lg:px-5 lg:py-3.5 lg:text-sm ${
            value ? "text-white" : "text-zinc-500"
          }`}
        >
          {selectedLabel || "학년을 선택해주세요"}
          <img
            className="h-[4.79px] w-2 lg:h-1.25 lg:w-2"
            src={ArrowIcon}
            alt="arrow icon"
          />
        </button>

        {open && (
          <ul className="lg:bg-black2 absolute left-0 z-50 w-full cursor-pointer rounded-lg p-px shadow-lg lg:top-15 lg:rounded-xl">
            <div className="bg-black2 rounded-md lg:rounded-[11px]">
              {uniGrades.map((grade) => (
                <li
                  key={grade.value}
                  onClick={() => {
                    onChange(grade.value);
                    setOpen(false);
                  }}
                  className="hover:text-blue cursor-pointer px-5 py-2 text-[10px] font-medium text-white lg:text-sm"
                >
                  {grade.label}
                </li>
              ))}
            </div>
          </ul>
        )}
      </div>

      {/* 라벨 */}
      <div className="text-xs font-medium text-white lg:text-right lg:text-base">
        학년
      </div>
    </div>
  );
};

export default AdditionalGradeSelectComponent;
