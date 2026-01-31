import Header from "../../../../shared/components/Header";
import "./Additional.css";
import Logo from "@/shared/assets/logo.png";
import React from "react";
import ArrowIcon from "./ArrowIcon.png";
import Button from "../../../../shared/components/Button";

const AdditionalPage = () => {
  interface AdditionalInputProps {
    label: string;
    placeholder: string;
  }

  const AdditionalInputComponent = ({
    label,
    placeholder,
  }: AdditionalInputProps) => {
    return (
      <div className="flex h-[54px] w-[397px] items-center justify-end">
        <div className="justify-start text-2xl font-semibold text-white">
          {label}
        </div>

        <div className="ml-[92px] inline-block rounded-xl bg-[linear-gradient(180deg,#62E1EF_-5.87%,#92ADFF_100%)] p-[1px]">
          <input
            type="text"
            placeholder={placeholder}
            className="h-14 w-60 rounded-[11px] bg-black px-7 py-3.5 text-sm leading-6 font-medium text-white outline-none placeholder:text-zinc-500"
          />
        </div>
      </div>
    );
  };

  const AdditionalSelectComponent = ({ label }: { label: string }) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    const grades = ["1학년", "2학년", "3학년", "4학년"];

    return (
      <div className="flex h-[54px] w-[397px] items-center justify-end">
        <div className="text-2xl font-semibold text-white">{label}</div>

        <div className="relative ml-[92px] w-60 rounded-xl bg-[linear-gradient(180deg,#62E1EF_-5.87%,#92ADFF_100%)] p-[1px]">
          <button
            onClick={() => setOpen(!open)}
            className={`flex h-14 w-full cursor-pointer items-center justify-between rounded-[11px] bg-black pr-[15px] pl-[28px] text-sm font-medium ${
              value ? "text-white" : "text-zinc-500"
            }`}
          >
            {value || "학년을 선택해주세요"}
            <img className="h-6 w-6" src={ArrowIcon} alt="arrow icon" />
          </button>

          {/* 드롭다운 */}
          {open && (
            <ul className="absolute top-[60px] left-0 z-50 w-full rounded-xl bg-black shadow-lg">
              {grades.map((grade) => (
                <li
                  key={grade}
                  onClick={() => {
                    setValue(grade);
                    setOpen(false);
                  }}
                  className="cursor-pointer rounded-xl px-7 py-3 text-white hover:bg-zinc-800"
                >
                  {grade}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  interface StatusSelectButtonProps {
    text: string;
    // state: boolean;
  }

  const StatusSelectButton = ({ text }: StatusSelectButtonProps) => {
    return (
      <div className="inline-block cursor-pointer rounded-xl bg-[linear-gradient(178deg,#FFF_-42.66%,#427E9C_97.86%)] p-[1px]">
        <div className="flex h-[54px] w-[70.116px] items-center justify-center rounded-[11px] bg-black text-white hover:bg-[rgba(0,63,135)]">
          {text}
        </div>
      </div>
    );
  };

  const AdditionalStatusComponent = ({ label }: { label: string }) => {
    return (
      <div className="flex h-[54px] w-[427px] items-center justify-end">
        <div className="justify-start text-2xl font-semibold text-white">
          {label}
        </div>

        <div className="ml-[92px] flex h-14 w-60 flex-row justify-between">
          <StatusSelectButton text="재학" />
          <StatusSelectButton text="휴학" />
          <StatusSelectButton text="졸업유예" />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div className="AdditionalPage">
        <div className="mt-[130px] flex h-[108.018px] w-[388px] items-center">
          <img
            src={Logo}
            alt="logo"
            className="h-[width: 108.016px; height: 108.016px;]"
          />
          <div className="w-[280px]justify-start text-4xl font-semibold text-white">
            LIKELION KNU
          </div>
        </div>
        <div className="mt-[60px] justify-start text-2xl font-medium text-neutral-200">
          몇 가지 정보만 더 입력하면 모든 서비스 기능을 이용할 수 있어요
        </div>
        <div className="mt-[120px] flex h-[302px] w-[980px] flex-col justify-between">
          <div className="flex h-[54px] w-[980px] justify-between">
            <AdditionalInputComponent
              label="이름"
              placeholder="이름를 입력해주세요."
            />
            <AdditionalInputComponent
              label="학부"
              placeholder="학부를 입력해주세요."
            />
          </div>
          <div className="flex h-[54px] w-[980px] justify-between">
            <AdditionalInputComponent
              label="학번"
              placeholder="학번을 입력해주세요."
            />
            <AdditionalSelectComponent label="학년" />
          </div>

          <div className="flex h-[54px] w-[980px] justify-between">
            <AdditionalInputComponent
              label="연락처"
              placeholder="연락처를 입력해주세요."
            />
            <AdditionalStatusComponent label="학적상태" />
          </div>
        </div>
        <div className="mt-[200px] cursor-pointer">
          <Button radius="20px">
            <div className="text-white">제출하기</div>
          </Button>
        </div>
        <div className="flex-reverse mt-[51px] flex w-[980px] justify-end">
          <div className="cursor-pointer justify-center text-xl leading-8 font-medium text-white">
            다음에 제출하기
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalPage;
