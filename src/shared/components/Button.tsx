interface ButtonProps {
  borderWidth?: string;
  radius?: string;
  children: React.ReactNode;
}

function Button({
  borderWidth = "1.35px",
  radius = "55px",
  children,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`button-style w-[193px] px-9 py-5 text-[20px] leading-6 font-medium`}
      style={{
        borderWidth: borderWidth,
        borderRadius: radius,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
