const BUTTON_VARIANTS = {
  recruit: {
    width: "258px",
    height: "106px",
    radius: "40px",
    borderWidth: "2px",
    fontSize: "20px",
  },
  // // 탭/제출 (196*64)
  // sub: { width: "196px", height: "64px", radius: "20px", borderWidth: "1.35px", fontSize: "16px" },
  my: {
    width: "127px",
    height: "58px",
    radius: "20px",
    borderWidth: "1.35px",
    fontSize: "14px",
  },
  myStatus: {
    width: "84px",
    height: "46px",
    radius: "20px",
    borderWidth: "1.01px",
    fontSize: "14px",
  },
  modal: {
    width: "128px",
    height: "47px",
    radius: "20px",
    borderWidth: "1px",
    fontSize: "14px",
  },
};

type ButtonVariantType = "modal" | "recruit" | "my" | "myStatus";

// onClick 옵셔널 제거 예정
interface ButtonProps {
  variant: ButtonVariantType;
  children: React.ReactNode;
  onClick?: () => void;
}

// 모달 버튼을 기본값으로
function Button({ variant = "modal", children, onClick }: ButtonProps) {
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
