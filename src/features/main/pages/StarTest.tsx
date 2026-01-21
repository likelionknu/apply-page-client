import React from "react";
import "./StarTest.css";

interface Star {
  id: number;
  size: number;
  duration: number;
  top: string;
  left: string;
}

const TestStars: React.FC = () => {
  // 별 데이터 생성
  const stars: Star[] = Array.from({ length: 300 }).map((_, i) => ({
    id: i,
    size: 1 + Math.random() * 3,
    duration: 3 + Math.random() * 5,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  }));

  return (
    <div className="star-container">
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

export default TestStars;
