const BUTTON_VARIANTS = {
  // 지원서 페이지
  recruit: {
    width: "258px",
    height: "106px",
    radius: "40px",
    borderWidth: "2px",
    fontSize: "32px",
  },
  // 마이 페이지
  my: {
    width: "127px",
    height: "58px",
    radius: "20px",
    borderWidth: "1.35px",
    fontSize: "18px",
  },
  // 마이 페이지 - 어플라이 상태
  myStatus: {
    width: "84px",
    height: "46px",
    radius: "20px",
    borderWidth: "1.01px",
    fontSize: "14px",
  },
  // 모달
  modal: {
    width: "128px",
    height: "47px",
    radius: "20px",
    borderWidth: "1px",
    fontSize: "14px",
  },
  // 기타
  etc: {
    width: "196px",
    height: "64px",
    radius: "20px",
    borderWidth: "1.35px",
    fontSize: "20px",
  },
};

type ButtonVariantType = keyof typeof BUTTON_VARIANTS;

// onClick 옵셔널 제거 예정
interface ButtonProps {
  variant: ButtonVariantType;
  children: React.ReactNode;
  onClick?: () => void;
}

// 모달 버튼을 기본값으로
function Button({ variant, children, onClick }: ButtonProps) {
  const styles = BUTTON_VARIANTS[variant];

  return (
    <button
      type="button"
      className="button-style flex items-center justify-center leading-6 font-medium"
      style={{
        width: styles.width,
        height: styles.height,
        borderWidth: styles.borderWidth,
        borderRadius: styles.radius,
        fontSize: styles.fontSize,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
