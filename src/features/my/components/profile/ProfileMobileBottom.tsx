import { useNavigate } from "react-router-dom";
import { Button } from "@shared/components";
import LogoutText from "./LogoutText";

interface ProfilMobileBottomProps {
  onDelete: () => void;
  onLogout: () => void;
}

function ProfileMobileBottom({ onDelete, onLogout }: ProfilMobileBottomProps) {
  const navigate = useNavigate();
  return (
    <div className="mt-11 flex items-end justify-between">
      <LogoutText onDelete={onDelete} />
      <div className="flex gap-4">
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

export default ProfileMobileBottom;
