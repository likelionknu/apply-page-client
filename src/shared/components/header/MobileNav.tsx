import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import GoogleImg from "@shared/assets/google.png";
import type { NavProps } from "@shared/types/NavProps";
import { GetNavActiveClass } from "@shared/utils/GetNavActiveClass";
// import GoogleLogin from "./GoogleLogin";

const ToggleBar = () => (
  <div className="h-0.5 w-4.5 rounded-[20px] bg-white"></div>
);

function MobileNav({ isPartPage, onLogin }: NavProps) {
  const [isShow, setIsShow] = useState<boolean>(false);

  const baseStyle = "text-[14px] font-semibold";

  return (
    <div className="flex items-center gap-[19.2px]">
      <div className="flex items-center gap-3">
        <img
          src={GoogleImg}
          alt="google"
          className="w-5 cursor-pointer rounded-[50%] bg-white p-1"
          onClick={onLogin}
        />
        <div
          className="mr-1.5 flex cursor-pointer flex-col gap-[4.5px]"
          onClick={() => setIsShow((prev) => !prev)}
        >
          <ToggleBar />
          <ToggleBar />
          <ToggleBar />
        </div>
      </div>

      {/* 네브바 */}
      {isShow && (
        <div className="bg-mobile-navigation absolute top-14 left-0 flex w-full flex-col gap-4 bg-black p-5">
          <NavLink
            to="/my"
            className={({ isActive }) =>
              `${GetNavActiveClass(isActive)} ${baseStyle}`
            }
          >
            마이페이지
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              `${GetNavActiveClass(isActive)} ${baseStyle}`
            }
          >
            프로젝트
          </NavLink>
          <NavLink
            to="/part/PM"
            className={`${GetNavActiveClass(isPartPage)} ${baseStyle}`}
          >
            파트 소개
          </NavLink>
          <Link
            to="https://www.instagram.com/likelion.knu/"
            className={`hover:text-blue ${baseStyle}`}
          >
            인스타그램
          </Link>
          <NavLink
            to="/apply"
            className={({ isActive }) =>
              `${GetNavActiveClass(isActive)} ${baseStyle}`
            }
          >
            14기 지원하기
          </NavLink>
          {/* <div>
            <GoogleLogin onLogin={onLogin} />
          </div> */}
        </div>
      )}
    </div>
  );
}

export default MobileNav;
