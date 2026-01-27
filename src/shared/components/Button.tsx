interface ButtonProps {
  width?: string;
  borderWidth?: string;
  radius?: string;
  fontSize?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({
  borderWidth = "1.35px",
  radius = "55px",
  fontSize = "20px",
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      className="button-style px-9 py-5 leading-6 font-medium"
      style={{
        borderWidth: borderWidth,
        borderRadius: radius,
        fontSize: fontSize,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
