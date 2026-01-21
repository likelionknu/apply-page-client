import React from "react";
import "./TestEarth.css";

const LAT_LINES = 3; // 위도선 개수
const LNG_LINES = 10; // 경도선 개수

const EarthSphere: React.FC = () => {
  return (
    <div className="scene">
      {/* 자전축 */}
      <div className="axis">
        <div className="sphere">
          {/* 위도 */}
          {/* {Array.from({ length: LAT_LINES }).map((_, i) => {
            const angle = (360 / LAT_LINES) * i;

            return (
              <div
                key={`lat-${i}`}
                className="latitude"
                style={{ transform: `rotateX(${angle}deg)` }}
              />
            );
          })} */}

          {/* {Array.from({ length: LAT_LINES }).map((_, i) => {
            const angle = (360 / LAT_LINES) * i;

            return (
              <div
                key={`lat-${i}`}
                className="latitude2"
                style={{
                  // transform: `rotateX(${angle}deg)`,
                  width: `${(i + 1) * 180}px`,
                  height: `${(i + 1) * 180}px`,
                }}
              />
            );
          })} */}

          {/* {Array.from({ length: LAT_LINES }).map((_, i) => {
            const angle = (360 / LAT_LINES) * i;

            return (
              <div
                key={`lat-${i}`}
                className="latitude2"
                style={{
                  // transform: `rotateX(${angle}deg)`,
                  width: `${(i + 1) * 180}px`,
                  height: `${(i + 1) * 180}px`,
                }}
              />
            );
          })} */}

          <div
            className="latitude2"
            style={{
              width: "180px",
              height: "180px",
              top: "-55px",
            }}
          />

          <div
            className="latitude2"
            style={{
              width: "330px",
              height: "330px",
              top: "-15px",
            }}
          />

          <div
            className="latitude2"
            style={{
              width: "442px",
              height: "442px",
              top: "45px",
            }}
          />

          <div
            className="latitude2"
            style={{
              width: "530px",
              height: "530px",
              top: "140px",
            }}
          />

          <div
            className="latitude2"
            style={{
              width: "520px",
              height: "520px",
              top: "270px",
            }}
          />

          <div
            className="latitude2"
            style={{
              width: "420px",
              height: "420px",
              top: "400px",
            }}
          />

          <div
            className="latitude2"
            style={{
              width: "200px",
              height: "200px",
              top: "450px",
            }}
          />

          {/* 경도 */}
          {Array.from({ length: LNG_LINES }).map((_, i) => {
            const angle = (360 / LNG_LINES) * i;
            return (
              <div
                key={`lng-${i}`}
                className="longitude"
                style={{ transform: `rotateY(${angle}deg)` }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EarthSphere;
