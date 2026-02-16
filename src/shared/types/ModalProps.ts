export interface ModalProps {
  isShow: boolean;
  className?: string;
  content?: string;
  buttonText?: string;
  onClick?: () => void;
  onNavigate?: () => void;
  onClose?: () => void;
  onDelete?: () => void;
}
