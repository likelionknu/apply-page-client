import React from "react";
import "./Stars.css";

interface Star {
  id: number;
  size: number;
  duration: number;
  top: string;
  left: string;
}

const Stars: React.FC = () => {
  // 별 데이터 생성
  const stars: Star[] = Array.from({ length: 1200 }).map((_, i) => ({
    id: i,
    size: 1 + Math.random() * 3,
    duration: 3 + Math.random() * 5,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  }));

  return (
    <div className="absolute z-0 h-1250 w-full overflow-hidden">
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
