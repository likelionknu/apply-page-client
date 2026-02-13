import { ErrorModal, InputStateModal } from "@shared/components";
import type { ModalType } from "@shared/types/ModalType";
import { SubmitModal, SavedModal, CancelModal } from "@application/components";

interface ApplicationModalsProps {
  activeModal: ModalType;
  errorMessage: string;
  errorButton: string;
  onNavigate?: () => void;
  onClose?: () => void;
  onDelete?: () => void;
}

function ApplicationModals({
  activeModal,
  errorMessage,
  errorButton,
  onNavigate,
  onClose,
  onDelete,
}: ApplicationModalsProps) {
  const modals: Partial<Record<Exclude<ModalType, null>, React.ReactNode>> = {
    ERROR: (
      <ErrorModal
        isShow={true}
        content={errorMessage}
        buttonText={errorButton}
        onClick={onNavigate}
      />
    ),
    InputState: (
      <InputStateModal content={errorMessage} isShow={true} onClose={onClose} />
    ),
    SUBMIT: <SubmitModal isShow={true} />,
    SAVED: <SavedModal isShow={true} />,
    CANCELED: (
      <CancelModal
        isShow={activeModal === "CANCELED"}
        onClose={onClose}
        onDelete={onDelete}
      />
    ),
  };

  if (!activeModal) return null;

  return <>{modals[activeModal]}</>;
}

export default ApplicationModals;
