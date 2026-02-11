import { useNavigate } from "react-router-dom";
import { Button } from "@shared/components";
import ApplicationGroup from "./ApplicationGroup";
import type { ApplicationItem } from "@my/types/ApplicationItem";

interface ApplicationWebStatusProps {
  ongoing: ApplicationItem[];
  past: ApplicationItem[];
  onLogout: () => void;
}

function ApplicationWebStatus({
  ongoing,
  past,
  onLogout,
}: ApplicationWebStatusProps) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col gap-10">
        <ApplicationGroup
          title="진행"
          list={ongoing}
          className="flex flex-col gap-5"
        />
        <ApplicationGroup
          title="종료"
          list={past}
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
  );
}

export default ApplicationWebStatus;
