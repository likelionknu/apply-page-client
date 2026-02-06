const BUTTON_VARIANTS = {
  // 지원서 페이지
  recruit: "w-64.5 h-26.5 rounded-[40px] border-2 text-[32px]",
  // 마이 페이지
  my: "w-31.75 h-14.5 rounded-[20px] border-[1.35px] text-[18px]",
  // 마이 페이지 - 어플라이 상태
  myStatus: "w-21 h-11.5 rounded-[20px] border-[1.01px] text-[14px]",
  // 모달
  modal: "min-w-32 h-11.75 rounded-[20px] border-[1px] text-[14px] px-4 py-2",
  // 기타
  etc: "w-49 h-26 rounded-[20px] border-[1.35px] text-[20px]",
  // 파트 페이지
  part: "w-21.75 h-13.75 rounded-[15px] border-[1.01px] text-[18px]",
};

type ButtonVariantType = keyof typeof BUTTON_VARIANTS;

// onClick 옵셔널 제거 예정
interface ButtonProps {
  variant: ButtonVariantType;
  children: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
}

// 모달 버튼을 기본값으로
function Button({
  variant = "modal",
  children,
  onClick,
  selected = false,
}: ButtonProps) {
  const styles = BUTTON_VARIANTS[variant];

  return (
    <button
      type="button"
      className={`button-style ${styles} ${selected ? "button-style--active" : ""} flex items-center justify-center leading-6 font-medium`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
