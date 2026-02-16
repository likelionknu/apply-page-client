import { ErrorModal } from "@shared/components";
import type { ModalType } from "@shared/types/ModalType";
import InfoModal from "./InfoModal";
import DraftModal from "./DraftModal";
import ApplyAlertModal from "./ApplyAlertModal";

interface ApplyModalsProps {
  activeModal: ModalType;
  needWidth?: boolean;
  errorMessage: string;
  errorButton: string;
  onNavigate?: () => void;
  onClose?: () => void;
  onClick?: () => void;
  onDelete?: () => void;
}

function ApplyModals({
  activeModal,
  needWidth,
  errorMessage,
  errorButton,
  onNavigate,
  onClose,
  onClick,
}: ApplyModalsProps) {
  const modals: Partial<Record<Exclude<ModalType, null>, React.ReactNode>> = {
    ERROR: (
      <ErrorModal
        isShow={true}
        className={`${needWidth ? "w-46" : ""}`}
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
  };

  if (!activeModal) return null;

  return <>{modals[activeModal]}</>;
}

export default ApplyModals;
