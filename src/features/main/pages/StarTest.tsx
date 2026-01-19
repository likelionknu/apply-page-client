// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}", // 프로젝트 구조에 맞게 경로를 확인하세요
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         'star-move': {
//           '0%, 40%, 100%': { opacity: '0' },
//           '20%, 60%': { opacity: '1' },
//         },
//       },
//       animation: {
//         'star-move': 'star-move infinite',
//       },
//     },
//   },
//   plugins: [],
// };

// import React from "react";

// const TestStars = () => {
//   // 100개의 별 데이터 미리 생성 (렌더링 시마다 랜덤값이 바뀌는 것을 방지하고 싶다면 사용)
//   const stars = Array.from({ length: 100 }).map((_, i) => ({
//     id: i,
//     size: 1 + Math.random() * 3,
//     duration: 3 + Math.random() * 5,
//     top: `${Math.random() * 100}%`,
//     left: `${Math.random() * 100}%`,
//   }));

//   return (
//     // 전체 배경이 필요할 경우를 대비해 상위 컨테이너에 relative/overflow-hidden 추가
//     <div className="relative w-full h-screen bg-black overflow-hidden">
//       {stars.map((star) => (
//         <div
//           key={star.id}
//           className="absolute rounded-full bg-[#f5f5f5] animate-star-move"
//           style={{
//             width: `${star.size}px`,
//             height: `${star.size}px`,
//             top: star.top,
//             left: star.left,
//             animationDuration: `${star.duration}s`,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default TestStars;