import { ErrorModal } from "@shared/components";
import type { ModalType } from "@shared/types/ModalType";
import InfoModal from "./InfoModal";
import DraftModal from "./DraftModal";

interface ApplyModalsProps {
  activeModal: ModalType;
  errorMessage: string;
  errorButton: string;
  onNavigate?: () => void;
  onClose?: () => void;
  onDelete?: () => void;
}

function ApplyModals({
  activeModal,
  errorMessage,
  errorButton,
  onNavigate,
  onClose,
}: ApplyModalsProps) {
  const modals: Partial<Record<Exclude<ModalType, null>, React.ReactNode>> = {
    ERROR: (
      <ErrorModal
        isShow={true}
        content={errorMessage}
        buttonText={errorButton}
        onClick={onNavigate}
        onClose={onClose}
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
