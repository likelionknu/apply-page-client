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
  const center = viewSize / 2;
  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  const brandCyan = "#60EFFF";
  const brandTrack = "#1E293B"; // Slate-800 계열

  const duration = "2s";

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
      <defs>
        <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3DE2FF" /> {/* 로고의 밝은 하늘색 */}
          <stop offset="100%" stopColor="#7B61FF" /> {/* 로고의 보라색 */}
        </linearGradient>
      </defs>

      <g>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={brandTrack}
          strokeWidth={stroke}
          opacity="0.2"
        />

        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={brandCyan}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`1 ${circumference}`}
          strokeDashoffset="0"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${center} ${center}`}
            to={`360 ${center} ${center}`}
            dur={duration}
            repeatCount="indefinite"
          />

          <animate
            attributeName="stroke-dasharray"
            values={`1 ${circumference}; ${circumference * 0.75} ${circumference * 0.25}; 1 ${circumference}`}
            keyTimes="0; 0.5; 1"
            dur={duration}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
          />

          <animate
            attributeName="stroke-dashoffset"
            values={`0; ${-circumference * 0.5}; ${-circumference}`}
            keyTimes="0; 0.5; 1"
            dur={duration}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
          />
        </circle>
      </g>
    </svg>
  );
}
