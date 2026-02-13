import { ErrorModal, InputStateModal } from "@shared/components";
import type { ModalType } from "@shared/types/ModalType";

interface AdditionalModalsProps {
  activeModal: ModalType;
  errorMessage: string;
  errorButton: string;
  onNavigate?: () => void;
  onClose?: () => void;
}

function AdditionalModals({
  activeModal,
  errorMessage,
  errorButton,
  onNavigate,
  onClose,
}: AdditionalModalsProps) {
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
  };

  if (!activeModal) return null;

  return <>{modals[activeModal]}</>;
}

export default AdditionalModals;
