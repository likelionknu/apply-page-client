import { useState } from "react";

type Direction = "toRight" | "toLeft";

type Star = {
  top: number;
  left?: number;
  duration: number;
  delay: number;
  direction: Direction;
};

const getRandomStartPosition = (): {
  top: number;
  left?: number;
  direction: Direction;
} => {
  const rand = Math.random();
  const padding = 8; // 화면 밖 시작 거리

  if (rand < 0.25) {
    // 왼쪽 위 → 오른쪽 아래
    return {
      top: -padding - Math.random() * window.innerHeight * 0.5, // 위쪽에서 랜덤
      left: -padding - Math.random() * window.innerWidth * 0.5, // 왼쪽에서 랜덤
      direction: "toRight",
    };
  } else if (rand < 0.5) {
    // 오른쪽 위 → 왼쪽 아래
    return {
      top: -padding - Math.random() * window.innerHeight * 0.5,
      left:
        window.innerWidth + padding + Math.random() * window.innerWidth * 0.5,
      direction: "toLeft",
    };
  } else if (rand < 0.75) {
    // 왼쪽 화면 중간 → 오른쪽 아래
    return {
      top: Math.random() * window.innerHeight * 0.5,
      left: -padding - Math.random() * window.innerWidth * 0.5,
      direction: "toRight",
    };
  } else {
    // 오른쪽 화면 중간 → 왼쪽 아래
    return {
      top: Math.random() * window.innerHeight,
      left:
        window.innerWidth + padding + Math.random() * window.innerWidth * 0.5,
      direction: "toLeft",
    };
  }
};

function StarRain() {
  const [stars] = useState<Star[]>(() =>
    Array.from({ length: 13 }).map(() => {
      const { top, left, direction } = getRandomStartPosition();
      return {
        top,
        left,
        direction,
        duration: 8 + Math.random() * 6,
        delay: Math.random() * 20,
      };
    }),
  );

  return (
    <div className="relative h-screen w-full overflow-hidden bg-none">
      {stars.map((star, i) => {
        let rotate = "-135deg";
        let translateX = "100vw";
        let translateY = "100vh";

        if (star.direction === "toLeft") {
          rotate = "-45deg";
          translateX = "-100vw";
          translateY = "100vh";
        }

        return (
          <span
            key={i}
            className="meteor"
            style={
              {
                top: `${star.top}px`,
                left: `${star.left}px`,
                animationDuration: `${star.duration}s`,
                animationDelay: `${star.delay}s`,
                "--meteor-rotate": rotate,
                "--meteor-translate-x": translateX,
                "--meteor-translate-y": translateY,
              } as React.CSSProperties
            }
          />
        );
      })}

      <style>{`
        .meteor {
        position: absolute;
        width: 5px;
        height: 5px;
        background: white;
        border-radius: 50%;
        filter: drop-shadow(0 0 6px white);
        animation-duration: 10s;
        animation-name: meteor-fall;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        --tail-length: 500px;
        }
        .meteor::after {
        content: "";
        position: absolute;
        width: var(--tail-length);
        height: 4px;
        top: 50%;
        left: 50%;
        background: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0));
        transform-origin: left center;
        transform: translateY(-50%) rotate(var(--meteor-rotate, -45deg)) scaleX(0);
        filter: blur(1px);
        animation-name: tail-follow;
        animation-timing-function: linear;
        animation-iteration-count: infinite; 
        animation-duration: inherit;
        animation-fill-mode: backwards; 
        }
        @keyframes tail-follow {
        0% { transform: translateY(-50%) rotate(var(--meteor-rotate)) scaleX(0); opacity: 0; }
        10% { transform: translateY(-50%) rotate(var(--meteor-rotate)) scaleX(0.5); opacity: 0.5; }
        40% { transform: translateY(-50%) rotate(var(--meteor-rotate)) scaleX(1); opacity: 1; }
        80% { transform: translateY(-50%) rotate(var(--meteor-rotate)) scaleX(0.5); opacity: 0; }
        100% { transform: translateY(-50%) rotate(var(--meteor-rotate)) scaleX(0); opacity: 0; }
        }
        @keyframes meteor-fall {
        0% { transform: translate(0,0); opacity:1; }
        100% { transform: translate(var(--meteor-translate-x), var(--meteor-translate-y)); opacity:0; }
        }
    `}</style>
    </div>
  );
}

export default StarRain;
