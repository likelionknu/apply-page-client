import { ErrorModal } from "@shared/components";
import type { ModalType } from "@shared/types/ModalType";
import WithdrawalModal from "./WithdrawalModal";

interface MyModalsProps {
  activeModal: ModalType;
  errorMessage: string;
  errorButton: string;
  onNavigate?: () => void;
  onClose?: () => void;
  onDelete?: () => void;
}

function MyModals({
  activeModal,
  errorMessage,
  errorButton,
  onNavigate,
  onClose,
  onDelete,
}: MyModalsProps) {
  const modals: Partial<Record<Exclude<ModalType, null>, React.ReactNode>> = {
    ERROR: (
      <ErrorModal
        isShow={true}
        content={errorMessage}
        buttonText={errorButton}
        onClick={onNavigate}
      />
    ),
    CONFIRM: (
      <WithdrawalModal
        isShow={activeModal === "CONFIRM"}
        onClose={onClose}
        onDelete={onDelete}
      />
    ),
  };

  if (!activeModal) return null;

  return <>{modals[activeModal]}</>;
}

export default MyModals;
