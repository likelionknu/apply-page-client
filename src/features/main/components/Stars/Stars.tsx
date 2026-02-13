import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Stars.css";

interface Star {
  id: number;
  size: number;
  duration: number;
  top: string;
  left: string;
}

const Stars: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  const starCount = isMobile ? 55 : 1200;

  const stars: Star[] = React.useMemo(
    () =>
      Array.from({ length: starCount }).map((_, i) => ({
        id: i,
        size: 1 + Math.random() * 3,
        duration: 3 + Math.random() * 5,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      })),
    [starCount],
  );

  return (
    <div className="absolute z-0 h-750 w-full overflow-hidden sm:h-1250">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Stars;
