import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GoogleImg from "@shared/assets/google.png";
import UserImg from "@shared/assets/user.png";
import type { NavProps } from "@shared/types/NavProps";
import { GetNavActiveClass } from "@shared/utils/GetNavActiveClass";

const ToggleBar = () => (
  <div className="h-0.5 w-4.5 rounded-[20px] bg-white"></div>
);

function MobileNav({
  isLogin,
  isMain,
  isPartPage,
  onClick,
  onLogin,
}: NavProps) {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState<boolean>(false);

  const hasToken = sessionStorage.getItem("accessToken");
  const baseStyle = "text-[14px] font-semibold";
  const NavStyle = isMain ? "bg-black1" : "bg-mobile-navigation bg-black";
  const handleCloseNav = () => setIsShow(false);

  return (
    <div className="flex items-center gap-[19.2px]">
      <div className="flex items-center gap-3">
        {isLogin ? (
          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={() => navigate("/my")}
          >
            <img
              src={UserImg}
              alt="유저"
              className="w-10 rounded-[50%] bg-[#1d1d1d] p-1.5"
            />
          </div>
        ) : (
          <img
            src={GoogleImg}
            alt="google"
            className="w-6 cursor-pointer rounded-[50%] bg-white p-1"
            onClick={onLogin}
          />
        )}

        <div
          className="mr-1.5 flex cursor-pointer flex-col gap-[4.5px]"
          onClick={() => setIsShow((prev) => !prev)}
        >
          <ToggleBar />
          <ToggleBar />
          <ToggleBar />
        </div>
      </div>

      {isShow && (
        <>
          <div
            className="fixed inset-0 top-14 z-40"
            onClick={handleCloseNav}
            aria-hidden="true"
          />
          <div
            className={`${NavStyle} absolute top-14 left-0 z-50 flex w-full flex-col gap-4 p-5`}
            onClick={(e) => e.stopPropagation()}
          >
            {hasToken && (
              <NavLink
                to="/my"
                className={({ isActive }) =>
                  `${GetNavActiveClass(isActive)} ${baseStyle}`
                }
                onClick={handleCloseNav}
              >
                마이페이지
              </NavLink>
            )}
            <NavLink
              to="/project"
              className={({ isActive }) =>
                `${GetNavActiveClass(isActive)} ${baseStyle}`
              }
              onClick={handleCloseNav}
            >
              프로젝트
            </NavLink>
            <NavLink
              to="/part/PM"
              className={`${GetNavActiveClass(isPartPage)} ${baseStyle}`}
              onClick={handleCloseNav}
            >
              파트 소개
            </NavLink>
            <a
              href="https://www.instagram.com/likelion.knu/"
              className={`hover:text-blue ${baseStyle}`}
              onClick={handleCloseNav}
            >
              인스타그램
            </a>
            <NavLink
              to="/apply"
              className={({ isActive }) =>
                `${GetNavActiveClass(isActive)} ${baseStyle}`
              }
              onClick={
                (e) => {
                  e.preventDefault();
                  if (onClick) onClick();
                }
                //   (event) => {
                //   const hasAccessToken = sessionStorage.getItem("accessToken");
                //   if (!hasAccessToken) {
                //     event.preventDefault();
                //     onLogin();
                //   }
                // }
              }
            >
              14기 지원하기
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
}

export default MobileNav;
