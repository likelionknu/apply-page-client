import { ErrorModal, InputStateModal } from "@shared/components";
import type { ModalType } from "@shared/types/ModalType";
import SuccessModal from "./SuccessModal";

interface AdditionalsModalsProps {
  activeModal: ModalType;
  errorMessage: string;
  errorButton: string;
  onNavigate?: () => void;
  onClose?: () => void;
}

function AdditionalsModals({
  activeModal,
  errorMessage,
  errorButton,
  onNavigate,
  onClose,
}: AdditionalsModalsProps) {
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
    InputState: (
      <InputStateModal content={errorMessage} isShow={true} onClose={onClose} />
    ),
    SUCCESS: <SuccessModal isShow={true} onClick={onNavigate} />,
  };

  if (!activeModal) return null;

  return <>{modals[activeModal]}</>;
}

export default AdditionalsModals;
