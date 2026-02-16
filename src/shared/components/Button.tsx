const BUTTON_VARIANTS = {
  // 지원서 페이지
  recruit:
    "min-w-26.5 py-1.25 rounded-[9px] border-[1.2px] text-[11px] md:min-w-33.25 md:py-4 md:rounded-[40px] md:border-[2px] md:text-[16px]",

  // 마이 페이지
  my: "md:min-w-33.25 min-h-7 min-w-14 md:py-2.25 rounded-[7px] md:rounded-[40px] border-[0.5px] md:py-4 md:border-[2px] text-[10px] md:text-[16px]",

  // 마이 페이지 - 어플라이 상태
  myStatus:
    "h-7 min-w-12 rounded-[7px] border-[1px] text-[8px] md:h-10 lg:h-11.75 md:min-w-19  lg:min-w-21 md:text-[10px] lg:px-4 lg:py-2 md:rounded-[20px] lg:text-[14px]",

  // 마이 페이지 - 모바일
  myMobile: "min-w-14 h-8  rounded-[10px] border-[1.01px] text-[12px]",

  // 모달
  modal:
    "md:h-11 md:min-w-32 md:px-4 md:py-2 rounded-[9px] md:rounded-[20px] border-[1px] text-[12px] md:text-[14px] h-6 min-w-20.75 px-3 py-4",

  // 기타
  etc: "h-26 min-w-49 rounded-[20px] border-[1.35px] text-[20px]",

  // 파트 페이지
  part: "md:h-13.75 md:min-w-21.75 md:rounded-[15px] md:border-[1.01px] md:text-[18px]",

  //파트 페이지 - 모바일
  partMobile:
    "min-w-[43.5px] h-[26.63px] rounded-[7.5px] border-[0.5px] text-[9px]",
};

type ButtonVariantType = keyof typeof BUTTON_VARIANTS;

interface ButtonProps {
  variant: ButtonVariantType;
  children: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
}

// 모달 버튼을 기본값으로
function Button({
  variant = "modal",
  children,
  onClick,
  selected = false,
  disabled,
}: ButtonProps) {
  const styles = BUTTON_VARIANTS[variant];

  return (
    <button
      type="button"
      className={`button-style ${styles} ${selected ? "button-style--active" : ""} flex items-center justify-center leading-3 font-medium`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
export default Button;
