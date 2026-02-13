import { NavLink, useNavigate } from "react-router-dom";
import UserImg from "@shared/assets/user.png";
import { GetNavActiveClass } from "@shared/utils/GetNavActiveClass";
import type { NavProps } from "@shared/types/NavProps";
import GoogleLogin from "./GoogleLogin";

function WebNav({ isLogin, isPartPage, onLogin }: NavProps) {
  const navigate = useNavigate();
  const name = sessionStorage.getItem("userName");

  return (
    <div className="flex flex-1 justify-between">
      <div className="tracking-tight-custom flex items-center gap-12 text-[18px] leading-140 font-medium">
        <NavLink
          to="/project"
          className={({ isActive }) => GetNavActiveClass(isActive)}
        >
          프로젝트
        </NavLink>
        <NavLink to="/part/PM" className={GetNavActiveClass(isPartPage)}>
          파트 소개
        </NavLink>
        <NavLink
          to="/apply"
          className={({ isActive }) => GetNavActiveClass(isActive)}
        >
          지원하기
        </NavLink>
      </div>
      {isLogin ? (
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() => navigate("/my")}
        >
          <img
            src={UserImg}
            alt="유저"
            className="rounded-[50%] bg-[#1d1d1d] p-1.5"
          />
          <span className="text-[16px] leading-140 font-medium tracking-[-0.03em]">
            {name}
          </span>
        </div>
      ) : (
        <GoogleLogin onLogin={onLogin} />
      )}
    </div>
  );
}

export default WebNav;
