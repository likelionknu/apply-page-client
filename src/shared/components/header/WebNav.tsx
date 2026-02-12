import { NavLink, useNavigate } from "react-router-dom";
import UserImg from "@shared/assets/user.png";
import GoogleImg from "@shared/assets/google.png";
import type { NavProps } from "@shared/types/NavProps";
import { GetNavActiveClass } from "@shared/utils/GetNavActiveClass";

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
        <div
          onClick={onLogin}
          className="border-white1 mr-2 flex cursor-pointer items-center rounded-lg border-[0.4px] px-5 py-2.5"
        >
          <img src={GoogleImg} alt="google" className="w-6" />
          <span className="tracking-tight-custom ml-2.5 text-base leading-140 font-semibold">
            구글 계정으로 시작하기
          </span>
        </div>
      )}
    </div>
  );
}

export default WebNav;
