import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Footer, Button } from "@shared/components";
import type { ModalType } from "@shared/types/ModalType";
import { getApiErrorMessage } from "@shared/utils/GetApiErrorMessage";
import { emitAuthChanged } from "@shared/utils/authEvents";
import LogoTwo from "@additional/assets/LogoTwo.png";
import { addUserInformation } from "../apis";
import AdditionalStatusComponent from "@additional/components/AdditionalStatusDrop";
import AdditionalsModals from "@additional/components/modal/AdditionalModals";
import AdditionalInputComponent from "../components/AdditionalInput";
import AdditionalGradeSelectComponent from "../components/AdditionalGradeSelect";
import AdditionalPhoneInputComponent from "../components/AdditionalPhoneNum";
import { getUserProfile } from "@my/apis";
import useInfoStore from "@additional/store/userInfoStore";
import {
  normalizeStatusForSubmit,
  normalizeStatusFromApi,
} from "@additional/utils/statusNormalizer";

interface ProfileApiData {
  name: string;
  depart: string;
  grade: number | null;
  phone: string;
  status: string;
  student_id: string;
}

const validateProfile = (profile: ProfileApiData) => {
  const name = profile.name.trim();
  const depart = profile.depart.trim();
  const studentId = profile.student_id.trim();
  const phone = profile.phone.trim();

  if (
    !name ||
    !depart ||
    !studentId ||
    !phone ||
    !profile.grade ||
    !profile.status
  ) {
    return "모든 정보를 입력해주세요.";
  }

  if (!/^[가-힣]{2,4}$/.test(name)) {
    return "이름은 한글 2~4자로 입력해주세요.";
  }

  if (depart.length < 4 || depart.length > 20) {
    return "학부는 4~20자로 입력해주세요.";
  }

  if (!/^\d{8,9}$/.test(studentId)) {
    return "학번은 숫자 8~9자리로 입력해주세요.";
  }

  if (
    !Number.isInteger(profile.grade) ||
    profile.grade < 1 ||
    profile.grade > 4
  ) {
    return "학년은 1~4 사이의 값만 선택할 수 있어요.";
  }

  if (!/^01\d-\d{4}-\d{4}$/.test(phone)) {
    return "연락처는 01X-XXXX-XXXX 형식으로 입력해주세요.";
  }

  if (!normalizeStatusForSubmit(profile.status)) {
    return "학적 상태를 선택해주세요.";
  }

  return null;
};

const requestProfile = async (): Promise<ProfileApiData> => {
  const { data } = await getUserProfile();
  return data.data as ProfileApiData;
};

const AdditionalPage = () => {
  const navigate = useNavigate();
  const { profile, setField, setProfile } = useInfoStore();
  const [errorMessage, setErrorMessage] =
    useState<string>("🚧 잘못된 접근입니다. 🚧"); // 모달 에러 메세지
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const needFetchProfile = useRef(false);
  const isEditingProfile = useRef(false);

  const handleProfileSuccess = useCallback(
    (apiData: ProfileApiData) => {
      if (isEditingProfile.current) return;

      setProfile({
        name: apiData.name,
        depart: apiData.depart,
        grade: apiData.grade,
        phone: apiData.phone,
        status: normalizeStatusFromApi(apiData.status),
        student_id: apiData.student_id,
      });

      sessionStorage.setItem("userName", apiData.name);
      emitAuthChanged();
      needFetchProfile.current = true;
    },
    [setProfile],
  );

  const handleProfileError = useCallback((error: unknown) => {
    let msg = "서버에 연결할 수 없습니다.";
    msg = getApiErrorMessage(error, msg);

    setErrorMessage(msg);
    setActiveModal("RETRY");
  }, []);

  const handleSubmit = async () => {
    const validationError = validateProfile(profile);
    const normalizedStatus = normalizeStatusForSubmit(profile.status);

    if (validationError) {
      setErrorMessage(validationError);
      setActiveModal("InputState");
      return;
    }

    const payload = {
      name: profile.name.trim(),
      depart: profile.depart.trim(),
      grade: profile.grade,
      phone: profile.phone.trim(),
      status: normalizedStatus,
      student_id: profile.student_id.trim(),
    };

    try {
      await addUserInformation(payload);
      sessionStorage.setItem("userName", profile.name);
      emitAuthChanged();

      setActiveModal("SUCCESS");
    } catch (error) {
      let msg = "서버와 연결할 수 없습니다.";
      msg = getApiErrorMessage(error, msg);

      setErrorMessage(msg);
      setActiveModal("ERROR");
    }
  };

  const handleSkip = () => {
    navigate("/my");
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleRetryProfile = useCallback(() => {
    setActiveModal(null);
    requestProfile().then(handleProfileSuccess).catch(handleProfileError);
  }, [handleProfileError, handleProfileSuccess]);

  const handleChangeField = useCallback(
    (field: keyof ProfileApiData, value: string | number | null) => {
      isEditingProfile.current = true;
      setField(field, value);
    },
    [setField],
  );

  useEffect(() => {
    if (needFetchProfile.current) return;

    const hasData = Object.values(profile).some(
      (value) => value !== null && value !== "" && value !== 0,
    );

    if (hasData) {
      needFetchProfile.current = true;
      return;
    }

    requestProfile().then(handleProfileSuccess).catch(handleProfileError);
  }, [profile, handleProfileError, handleProfileSuccess]);

  return (
    <div className="flex h-full w-full flex-col items-center overflow-hidden bg-black bg-[linear-gradient(178deg,rgba(0,0,0,0)_-38.64%,rgba(118,203,246,0.2)_-38.62%,rgba(59,102,123,0.1)_87.16%)]">
      <Header />

      <AdditionalsModals
        activeModal={activeModal}
        errorMessage={errorMessage}
        errorButton="확인"
        onRetry={handleRetryProfile}
        onClose={handleCloseModal}
        onNavigate={() => navigate("/my")}
      />

      <div className="flex w-75 flex-col items-center lg:mb-60 lg:min-h-screen lg:w-190">
        <div className="mt-8 flex w-32.5 items-center justify-between lg:mt-27.5 lg:h-11 lg:w-72">
          <img src={LogoTwo} alt="logo" className="h-6 w-4 lg:h-9 lg:w-6" />
          <div className="font-semibold text-white lg:text-4xl">
            LIKELION KNU
          </div>
        </div>
        <div className="mt-5.5 justify-start text-xs font-medium text-zinc-500 lg:mt-9.5 lg:text-center lg:text-2xl">
          몇 가지 정보만 더 입력하면 모든 서비스 기능을 이용할 수 있어요
        </div>
        <div className="mt-12 flex h-88.25 w-full flex-col items-center justify-between sm:flex sm:w-190 lg:mt-27.5 lg:flex lg:h-64 lg:w-190 lg:flex-row lg:justify-between">
          <div className="flex h-40.5 w-68 flex-col justify-between lg:h-full lg:w-85.5">
            <AdditionalInputComponent
              label="이름"
              placeholder="이름를 입력해주세요."
              value={profile.name}
              onChange={(value) => handleChangeField("name", value)}
              maxLength={4}
            />
            <AdditionalInputComponent
              label="학번"
              placeholder="학번을 입력해주세요."
              value={profile.student_id}
              onChange={(value) =>
                handleChangeField(
                  "student_id",
                  value.replace(/\D/g, "").slice(0, 9),
                )
              }
              maxLength={9}
              inputMode="numeric"
            />
            <AdditionalPhoneInputComponent
              label="연락처"
              placeholder="연락처를 입력해주세요."
              value={profile.phone}
              onChange={(value) => handleChangeField("phone", value)}
            />
          </div>
          <div className="flex h-40.5 w-68 flex-col justify-between lg:mr-4.75 lg:h-full lg:w-85.5 lg:items-end">
            <AdditionalInputComponent
              label="학부"
              placeholder="학부를 입력해주세요."
              value={profile.depart}
              onChange={(value) => handleChangeField("depart", value)}
              maxLength={20}
            />

            <AdditionalGradeSelectComponent
              value={profile.grade}
              onChange={(value) => handleChangeField("grade", Number(value))}
            />

            <AdditionalStatusComponent
              value={profile.status}
              onChange={(value) => handleChangeField("status", value)}
            />
          </div>
        </div>
        <div className="mt-15 cursor-pointer lg:mt-27.5">
          <Button variant="modal" onClick={handleSubmit}>
            <div className="text-white">제출하기</div>
          </Button>
        </div>
        <div
          onClick={handleSkip}
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
