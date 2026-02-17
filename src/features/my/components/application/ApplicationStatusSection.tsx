import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { ErrorModal } from "@shared/components";
import type { ModalType } from "@shared/types/ModalType";
import { getUserApplications } from "@my/apis";
import ApplicationWebStatus from "./ApplicationWebStatus";
import ApplicationMobileStatus from "./ApplicationMobileStatus";
import type { ApplicationItem } from "@my/types/ApplicationItem";

interface ApplicationStatusSectionProps {
  onLogout: () => void;
}

function ApplicationStatusSection({ onLogout }: ApplicationStatusSectionProps) {
  const navigate = useNavigate();
  const [applyData, setApplyData] = useState<ApplicationItem[]>([]);
  const [errorMessage, setErrorMessage] =
    useState<string>("🚧 잘못된 접급입니다. 🚧"); // 모달 에러 메세지
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const isDesktop = useMediaQuery({ minWidth: 641 });
  const isMobile = useMediaQuery({ maxWidth: 640 });

  // 날짜 기준 데이터 분리
  const { ongoingApplications, pastApplications } = useMemo(() => {
    const now = new Date();

    return {
      ongoingApplications: applyData.filter(
        (item) => new Date(item.endAt) >= now,
      ),
      pastApplications: applyData.filter((item) => new Date(item.endAt) < now),
    };
  }, [applyData]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getUserApplications();

        const apiData = data.data;

        setApplyData(apiData);
      } catch (error) {
        let msg = "서버와 연결할 수 없습니다.";

        if (axios.isAxiosError(error)) {
          if (error.response?.data?.error?.message) {
            msg = error.response.data.error.message;
          } else if (error.response?.data?.message) {
            msg = error.response.data.message;
          }
        } else if (error instanceof Error) {
          msg = error.message;
        }

        setErrorMessage(msg);
        setActiveModal("ERROR");
      }
    };

    getData();
  }, []);

  return (
    <section className="w-full flex-1">
      <ErrorModal
        isShow={activeModal === "ERROR"}
        content={errorMessage}
        buttonText="공고 페이지로 돌아가기"
        onClick={() => navigate("/apply")}
      />

      <div className="flex flex-col gap-5 md:gap-10">
        <div className="tracking-tight-custom text-[14px] leading-140 font-semibold md:text-[30px]">
          지원 현황
        </div>

        {/* 웹 */}
        {isDesktop && (
          <ApplicationWebStatus
            ongoing={ongoingApplications}
            past={pastApplications}
            onLogout={onLogout}
          />
        )}

        {/* 모바일 */}
        {isMobile && (
          <ApplicationMobileStatus
            applyData={applyData}
            ongoing={ongoingApplications}
            past={pastApplications}
          />
        )}
      </div>
    </section>
  );
}

export default ApplicationStatusSection;
