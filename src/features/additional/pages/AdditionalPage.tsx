import Header from "../../../shared/components/Header";
import Footer from "../../../shared/components/Footer";
import AdditionalInputComponent from "../components/AdditionalInput";

import { addUserInformation } from "../apis";

import Logo from "@/shared/assets/logo.png";
import Button from "../../../shared/components/Button";
import { useState } from "react";
import AdditionalGradeSelectComponent from "../components/AdditionalGradeSelect";
import AdditionalStatusComponent from "../components/AdditionalStatus";
import AdditionalPhoneInputComponent from "../components/AdditionalPhoneNum";

const AdditionalPage = () => {
  const [name, setName] = useState<string>(""); // 이름
  const [phone, setPhone] = useState<string>(""); //연락처
  const [student_id, setStudent_id] = useState<string>(""); //학번
  const [depart, setDepart] = useState<string>(""); // 학부
  const [grade, setGrade] = useState<number | null>(null);
  const [status, setStatus] = useState<string>(""); //학적상태

  const SubmissionButton = () => {
    const payload = {
      name,
      phone,
      student_id,
      depart,
      grade,
      status,
    };

    console.log("보낼 데이터", payload);
    addUserInformation(payload);
  };

  return (
    <div className="flex h-full w-full flex-col items-center overflow-hidden bg-black bg-[linear-gradient(178deg,rgba(0,0,0,0)_-38.64%,rgba(118,203,246,0.2)_-38.62%,rgba(59,102,123,0.1)_87.16%)]">
      {/* <Header /> */}
      <div className="flex w-75 flex-col items-center lg:mb-60 lg:min-h-screen lg:w-360 lg:px-12">
        <div className="flex w-37.5 items-center justify-between lg:mt-12.5 lg:h-[108.018px] lg:w-97">
          <img
            src={Logo}
            alt="logo"
            className="h-10.25 w-10.25 lg:h-[108.016px] lg:w-[108.016px]"
          />
          <div className="font-semibold text-white lg:w-70 lg:justify-start lg:text-4xl">
            LIKELION KNU
          </div>
        </div>
        <div className="mt-5.5 justify-start text-xs font-medium text-neutral-300 lg:mt-15 lg:text-2xl">
          몇 가지 정보만 더 입력하면 모든 서비스 기능을 이용할 수 있어요
        </div>
        <div className="mt-12 flex h-88.25 w-full flex-col items-center justify-between sm:flex sm:w-190 lg:mt-30 lg:flex lg:h-75.5 lg:w-250 lg:flex-row lg:justify-between">
          <div className="flex h-40.5 w-68 flex-col justify-between lg:h-full lg:w-100">
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
          <div className="flex h-40.5 w-68 flex-col justify-between lg:h-full lg:w-100">
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
        <div className="mt-15 cursor-pointer lg:mt-50">
          <Button variant="modal" onClick={() => SubmissionButton()}>
            <div className="text-white">제출하기</div>
          </Button>
        </div>
        <div className="flex-reverse flex w-full justify-end lg:mt-12.75 lg:w-245">
          <div className="mt-5 cursor-pointer justify-center text-[10px] text-white lg:text-xl lg:leading-8 lg:font-medium">
            다음에 제출하기
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AdditionalPage;
