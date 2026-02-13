import Header from "../../../shared/components/Header";
import Footer from "../../../shared/components/Footer";
import AdditionalInputComponent from "../components/AdditionalInput";

import { addUserInformation } from "../apis";
import { useNavigate } from "react-router-dom";

import LogoTwo from "@additional/assets/LogoTwo.png";
import Button from "../../../shared/components/Button";
import { useState } from "react";
import AdditionalGradeSelectComponent from "../components/AdditionalGradeSelect";
import AdditionalStatusComponent from "@additional/components/AdditionalStatusDrop";
import AdditionalPhoneInputComponent from "../components/AdditionalPhoneNum";

const AdditionalPage = () => {
  const [name, setName] = useState<string>(""); // 이름
  const [phone, setPhone] = useState<string>(""); //연락처
  const [student_id, setStudent_id] = useState<string>(""); //학번
  const [depart, setDepart] = useState<string>(""); // 학부
  const [grade, setGrade] = useState<number | null>(null);
  const [status, setStatus] = useState<string>(""); //학적상태

  const navigate = useNavigate();

  const SubmissionButton = () => {
    navigate("/main");
    const payload = {
      name,
      phone,
      student_id,
      depart,
      grade,
      status,
    };

    addUserInformation(payload);
  };

  const NextTimeButton = () => {
    navigate("/my");
  };

  return (
    <div className="flex h-full w-full flex-col items-center overflow-hidden bg-black bg-[linear-gradient(178deg,rgba(0,0,0,0)_-38.64%,rgba(118,203,246,0.2)_-38.62%,rgba(59,102,123,0.1)_87.16%)]">
      <Header />

      <div className="flex w-75 flex-col items-center lg:mb-60 lg:min-h-screen lg:w-185">
        <div className="mt-8 flex w-32.5 items-center justify-between lg:mt-27.5 lg:h-11 lg:w-72">
          <img src={LogoTwo} alt="logo" className="h-6 w-4 lg:h-9 lg:w-6" />
          <div className="font-semibold text-white lg:text-4xl">
            LIKELION KNU
          </div>
        </div>
        <div className="mt-5.5 justify-start text-xs font-medium text-zinc-500 lg:mt-9.5 lg:text-center lg:text-2xl">
          몇 가지 정보만 더 입력하면 모든 서비스 기능을 이용할 수 있어요
        </div>
        <div className="mt-12 flex h-88.25 w-full flex-col items-center justify-between sm:flex sm:w-190 lg:mt-27.5 lg:flex lg:h-64 lg:w-185 lg:flex-row lg:justify-between lg:gap-21.25">
          <div className="flex h-40.5 w-68 flex-col justify-between lg:h-full lg:w-80">
            <AdditionalInputComponent
              label="이름"
              placeholder="이름를 입력해주세요."
              value={name}
              onChange={setName}
            />
            <AdditionalInputComponent
              label="학번"
              placeholder="학번을 입력해주세요."
              value={student_id}
              onChange={setStudent_id}
            />
            <AdditionalPhoneInputComponent
              label="연락처"
              placeholder="연락처를 입력해주세요."
              value={phone}
              onChange={setPhone}
            />
          </div>
          <div className="flex h-40.5 w-68 flex-col justify-between lg:h-full lg:w-83.5 lg:items-end">
            <AdditionalInputComponent
              label="학부"
              placeholder="학부를 입력해주세요."
              value={depart}
              onChange={setDepart}
            />

            <AdditionalGradeSelectComponent value={grade} onChange={setGrade} />

            <AdditionalStatusComponent value={status} onChange={setStatus} />
          </div>
        </div>
        <div className="mt-15 cursor-pointer lg:mt-27.5">
          <Button variant="modal" onClick={() => SubmissionButton()}>
            <div className="text-white">제출하기</div>
          </Button>
        </div>
        <div
          onClick={() => NextTimeButton()}
          className="mt-4 mb-20 cursor-pointer justify-center text-sm font-medium text-neutral-500"
        >
          다음에 제출하기
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdditionalPage;
