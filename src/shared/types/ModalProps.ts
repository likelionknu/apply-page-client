export interface ModalProps {
  isShow: boolean;
  content?: string;
  buttonText?: string;
  onClick?: () => void;
  onNavigate?: () => void;
  onClose?: () => void;
  onDelete?: () => void;
}
