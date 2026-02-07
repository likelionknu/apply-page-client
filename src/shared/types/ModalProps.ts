export interface ModalProps {
  isShow: boolean;
  content?: string;
  buttonText?: string;
  onClick?: () => void; // 에러 모달
  onClose?: () => void;
  onDelete?: () => void; // 회원탈퇴
}
