import { useEffect, useMemo, useState } from "react";
import Button from "@shared/components/Button";
import { getUserApplications } from "@my/apis";
import type { ApplicationItem } from "@my/types/ApplicationItem";
import ApplicationGroup from "./ApplicationGroup";
import { useNavigate } from "react-router-dom";
import ApplicationCard from "./ApplicationCard";
import axios from "axios";
import type { ModalType } from "@shared/types/ModalType";
import { ErrorModal } from "@shared/components";

type FilterType = "ALL" | "DONE" | "PROCESS";

interface ApplicationStatusSectionProps {
  onLogout: () => void;
}

function ApplicationStatusSection({ onLogout }: ApplicationStatusSectionProps) {
  const navigate = useNavigate();
  const [applyData, setApplyData] = useState<ApplicationItem[]>([]);
  const [filter, setFilter] = useState<FilterType>("ALL");
  const [errorMessage, setErrorMessage] =
    useState<string>("🚧 잘못된 접급입니다. 🚧"); // 모달 에러 메세지
  const [activeModal, setActiveModal] = useState<ModalType>(null);

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
        const apiError = data.error;

        if (apiError && apiError.code) {
          setErrorMessage(apiError.message);
          setActiveModal("ERROR");
          return;
        }

        setApplyData(apiData);
      } catch (error) {
        let msg = "서버와 연결할 수 없습니다. 잠시 후 다시 시도해주세요.";

        if (axios.isAxiosError(error) && error.response?.data?.message) {
          msg = error.response.data.message;
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
        <div className="tracking-tight-custom text-[30px] leading-140 font-semibold">
          지원 현황
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col gap-10">
            <ApplicationGroup
              title="진행"
              list={ongoingApplications}
              className="flex flex-col gap-5"
            />
            <ApplicationGroup
              title="종료"
              list={pastApplications}
              className="flex flex-col gap-5"
            />
          </div>
          <div className="flex justify-end gap-4">
            <Button variant="my" onClick={() => navigate("/additional")}>
              정보수정
            </Button>
            <Button variant="my" onClick={onLogout}>
              로그아웃
            </Button>
          </div>
        </div>
        <div className="md:hidden">
          <div className="flex gap-2 md:hidden">
            <Button
              variant="myMobile"
              selected={filter === "ALL"}
              onClick={() => setFilter("ALL")}
            >
              전체
            </Button>
            <Button
              variant="myMobile"
              selected={filter === "PROCESS"}
              onClick={() => setFilter("PROCESS")}
            >
              진행 중
            </Button>
            <Button
              variant="myMobile"
              selected={filter === "DONE"}
              onClick={() => setFilter("DONE")}
            >
              완료
            </Button>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            {applyData.length > 0 ? (
              applyData.map((item) => (
                <ApplicationCard key={item.applicationId} data={item} />
              ))
            ) : (
              <div className="text-gray-500">지원 내역이 없습니다.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplicationStatusSection;
