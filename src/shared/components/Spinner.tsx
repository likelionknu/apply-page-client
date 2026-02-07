interface SpinnerProps {
  size?: number;
  className?: string;
  label?: string;
}

export default function Spinner({
  size = 120,
  className = "",
  label = "로딩 중",
}: SpinnerProps) {
  const viewSize = 50;
  const stroke = Math.max(1, Math.round(size / 20));

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${viewSize} ${viewSize}`}
      role="img"
      aria-label={label}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="#e6e6e6"
          strokeWidth={stroke}
        />
        <path
          d="M45 25a20 20 0 0 1-20 20"
          fill="none"
          stroke="#555"
          strokeWidth={stroke}
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  );
}
