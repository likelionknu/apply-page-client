import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";
import Logo from "@/shared/assets/logo.png";
import React from "react";
// import ArrowIcon from "./images/ArrowIcon.png";
import Button from "../../shared/components/Button";
import { useState } from "react";

const [name, setName] = useState(""); // 이름
const [phoneNum, setPhoneNum] = useState(""); //연락처
const [studentId, setStudentId] = useState(""); //학번
const [grade, setGrade] = useState(""); // 학년
const [status, setStatus] = useState(""); //학적상태
const [depart, setDepart] = useState(""); // 학부

interface AdditionalInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const AdditionalInputComponent = ({
  label,
  placeholder,
  value,
  onChange,
}: AdditionalInputProps) => {
  return (
    <div className="flex h-13.5 w-99.25 cursor-pointer flex-row-reverse items-center gap-13">
      <div className="inline-block rounded-xl bg-[linear-gradient(178deg,#FFF_-42.66%,#427E9C_97.86%)] p-px">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-14 w-62 rounded-[11px] bg-black px-5 py-3 text-sm font-medium text-white outline-none placeholder:text-zinc-500"
        />
      </div>
      <div className="text-2xl font-semibold text-white">{label}</div>
    </div>
  );
};

const AdditionalSelectComponent = ({ label }: { label: string }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const uniGrades = ["1학년", "2학년", "3학년", "4학년"];

  return (
    <div className="flex h-13.5 w-99.25 flex-row-reverse items-center gap-13">
      <div className="relative w-62 rounded-xl bg-[linear-gradient(178deg,#FFF_-42.66%,#427E9C_97.86%)] p-px">
        <button
          onClick={() => setOpen(!open)}
          className={`flex h-14 w-full cursor-pointer items-center justify-between rounded-[11px] bg-black pr-3.75 pl-7 text-sm font-medium ${
            value ? "text-white" : "text-zinc-500"
          }`}
        >
          {value || "학년을 선택해주세요"}
          {/* <img className="h-6 w-6" src={ArrowIcon} alt="arrow icon" /> */}
        </button>

        {/* 드롭다운 */}
        {open && (
          <ul className="absolute top-15 left-0 z-50 w-full rounded-xl bg-black bg-[linear-gradient(178deg,#FFF_-42.66%,#427E9C_97.86%)] p-px shadow-lg">
            <div className="rounded-[11px] bg-black">
              {uniGrades.map((uniGrade) => (
                <li
                  key={uniGrade}
                  onClick={() => {
                    setValue(uniGrade);
                    setOpen(false);
                    setGrade(uniGrade);
                  }}
                  className="hover:text-blue cursor-pointer px-7 py-3 text-white"
                >
                  {uniGrade}
                </li>
              ))}
            </div>
          </ul>
        )}
      </div>
      <div className="text-2xl font-semibold text-white">{label}</div>
    </div>
  );
};

interface StatusSelectButtonProps {
  text: string;
  selected: boolean;
  onClick: () => void;
}

const StatusSelectButton = ({
  text,
  selected,
  onClick,
}: StatusSelectButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="inline-block cursor-pointer rounded-xl bg-[linear-gradient(178deg,#FFF_-42.66%,#427E9C_97.86%)] p-px"
    >
      <div
        className={`flex h-13.5 w-[70.116px] items-center justify-center rounded-[11px] text-white transition ${
          selected
            ? "bg-[rgba(0,63,135)]" // 선택 고정
            : "bg-black hover:bg-[rgba(0,63,135)]"
        } `}
      >
        {text}
      </div>
    </div>
  );
};

interface AdditionalStatusProps {
  label: string;
  status: string; // 부모로부터 받은 현재 상태
  setStatus: (value: string) => void; // 부모의 상태를 변경하는 함수
}

const AdditionalStatusComponent = ({
  label,
  status,
  setStatus,
}: AdditionalStatusProps) => {
  return (
    <div className="flex h-13.5 w-100 flex-row-reverse items-center gap-13">
      <div className="flex h-14 w-60 flex-row justify-between">
        <StatusSelectButton
          text="재학"
          selected={status === "재학"}
          onClick={() => setStatus("재학")}
        />
        <StatusSelectButton
          text="휴학"
          selected={status === "휴학"}
          onClick={() => setStatus("휴학")}
        />
        <StatusSelectButton
          text="졸업유예"
          selected={status === "졸업유예"}
          onClick={() => setStatus("졸업유예")}
        />
      </div>

      <div className="justify-start text-2xl font-semibold text-white">
        {label}
      </div>
    </div>
  );
};

const AdditionalPage = () => {
  const SubmissionButton = () => {
    console.log(name);
    console.log(phoneNum);
    console.log(studentId);
    console.log(depart);
    console.log(grade);
    console.log(status);
  };

  // ----------------------- 컴포넌트 부문 -----------------------

  return (
    <div className="flex w-full flex-col items-center bg-black bg-[linear-gradient(178deg,rgba(0,0,0,0)_-38.64%,rgba(118,203,246,0.2)_-38.62%,rgba(59,102,123,0.1)_87.16%)]">
      <Header />
      <div className="mb-60 flex min-h-screen w-360 flex-col items-center px-12">
        <div className="mt-12.5 flex h-[108.018px] w-97 items-center">
          <img
            src={Logo}
            alt="logo"
            className="h-[width: 108.016px; height: 108.016px;]"
          />
          <div className="w-[280px]justify-start text-4xl font-semibold text-white">
            LIKELION KNU
          </div>
        </div>
        <div className="mt-15 justify-start text-2xl font-medium text-neutral-200">
          몇 가지 정보만 더 입력하면 모든 서비스 기능을 이용할 수 있어요
        </div>
        <div className="mt-30 flex h-75.5 w-250 justify-between">
          <div className="flex h-full w-100 flex-col justify-between">
            <AdditionalInputComponent
              label="이름"
              placeholder="이름를 입력해주세요."
              value={name}
              onChange={setName}
            />
            <AdditionalInputComponent
              label="학번"
              placeholder="학번을 입력해주세요."
              value={studentId}
              onChange={setStudentId}
            />
            <AdditionalInputComponent
              label="연락처"
              placeholder="연락처를 입력해주세요."
              value={phoneNum}
              onChange={setPhoneNum}
            />
          </div>
          <div className="flex h-full w-100 flex-col justify-between">
            <AdditionalInputComponent
              label="학부"
              placeholder="학부를 입력해주세요."
              value={depart}
              onChange={setDepart}
            />

            <AdditionalSelectComponent label="학년" />
            <AdditionalStatusComponent
              label="학적 상태"
              status={status}
              setStatus={setStatus}
            ></AdditionalStatusComponent>
          </div>
        </div>
        <div className="mt-50 cursor-pointer">
          <Button variant="modal" onClick={() => SubmissionButton()}>
            <div className="text-white">제출하기</div>
          </Button>
        </div>
        <div className="flex-reverse mt-12.75 flex w-245 justify-end">
          <div className="cursor-pointer justify-center text-xl leading-8 font-medium text-white">
            다음에 제출하기
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdditionalPage;
