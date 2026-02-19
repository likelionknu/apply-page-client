import { ErrorModal } from "@shared/components";
import type { ModalType } from "@shared/types/ModalType";
import InfoModal from "./InfoModal";
import DraftModal from "./DraftModal";
import ApplyAlertModal from "./ApplyAlertModal";
import ApplyFailedModal from "./ApplyFailedModal";

interface ApplyModalsProps {
  activeModal: ModalType;
  errorMessage: string;
  errorButton: string;
  onNavigate?: () => void;
  onClose?: () => void;
  onClick?: () => void;
  onDelete?: () => void;
}

function ApplyModals({
  activeModal,
  errorMessage,
  errorButton,
  onNavigate,
  onClose,
  onClick,
}: ApplyModalsProps) {
  const shouldApplyErrorWidth =
    errorMessage === "상세정보 미기입 상태에서는 지원이 불가능해요.";

  const modals: Partial<Record<Exclude<ModalType, null>, React.ReactNode>> = {
    ERROR: (
      <ErrorModal
        isShow={true}
        className={shouldApplyErrorWidth ? "w-46 md:w-auto" : ""}
        content={errorMessage}
        buttonText={errorButton}
        onClick={onNavigate}
        onClose={onClose}
      />
    ),
    APPLY_ALERT: (
      <ApplyAlertModal
        isShow={activeModal === "APPLY_ALERT"}
        onClick={onClick}
      />
    ),
    INFO: (
      <InfoModal
        isShow={activeModal === "INFO"}
        onClose={onClose}
        onNavigate={onNavigate}
      />
    ),
    DRAFT: (
      <DraftModal
        isShow={activeModal === "DRAFT"}
        onClose={onClose}
        onNavigate={onNavigate}
      />
    ),
    APPLY_FALIED: (
      <ApplyFailedModal
        isShow={activeModal === "APPLY_FAILED"}
        onClose={onClose}
      />
    ),
  };

  if (!activeModal) return null;

  return <>{modals[activeModal]}</>;
}

export default ApplyModals;
