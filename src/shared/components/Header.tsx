// import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "@shared/apis/GoogleLogin";
import logoImg from "../assets/logo.png";
import googleImg from "../assets/google.png";
import userImg from "../assets/user.png";
import { useState } from "react";

const ACTIVE_PART = ["/part/PM", "/part/DE", "/part/BE", "/part/FE"];

const getActiveClass = (isActive: boolean) => {
  return isActive
    ? "text-blue cursor-pointer"
    : "hover:text-blue cursor-pointer";
};

const ToggleBar = () => (
  <div className="h-0.5 w-4.5 rounded-[20px] bg-white"></div>
);

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isPartPage = ACTIVE_PART.includes(location.pathname);
  const [isShow, setIsShow] = useState<boolean>(false);
  const isLogin = sessionStorage.getItem("accessToken");
  const name = "홍길동";

  // const [isLogin, setIsLogin] = useState<string | null>(null);

  // useEffect(() => {
  //   setIsLogin(sessionStorage.getItem("accessToken"));
  // }, [pathname]);

  return (
    <header className="text-white1 md:bg-black1 bg-mobile-navigation sticky top-0 z-100 flex h-20 w-full bg-black md:bg-none">
      <nav className="mx-auto flex w-full max-w-360 items-center justify-between px-2 md:px-8">
        <div className="flex gap-14.5">
          <Link to="/main" className="flex cursor-pointer items-center gap-1">
            <img src={logoImg} alt="멋쟁이사자처럼 강남대" className="w-9" />
            <span className="text-[14px] leading-140 font-bold md:text-[21px]">
              LIKELION KNU
            </span>
          </Link>
          <div className="tracking-tight-custom hidden items-center gap-12 text-[18px] leading-140 font-medium md:flex">
            <NavLink
              to="/project"
              className={({ isActive }) => getActiveClass(isActive)}
            >
              프로젝트
            </NavLink>
            <NavLink to="/part/PM" className={getActiveClass(isPartPage)}>
              파트 소개
            </NavLink>
            <NavLink
              to="/apply"
              className={({ isActive }) => getActiveClass(isActive)}
            >
              지원하기
            </NavLink>
          </div>
        </div>
        <div className="items-center gap-[19.2px] md:flex">
          {isLogin ? (
            <>
              <div
                className="hidden items-center gap-2 md:flex"
                onClick={() => navigate("/my")}
              >
                <img
                  src={userImg}
                  alt="유저"
                  className="rounded-[50%] bg-[#1d1d1d] p-1.5"
                />
                <span className="text-[16px] leading-140 font-medium tracking-[-0.03em]">
                  {name}
                </span>
              </div>
            </>
          ) : (
            <>
              <div
                onClick={GoogleLogin}
                className="border-white1 mr-2 hidden cursor-pointer items-center rounded-lg border-[0.4px] px-5 py-2.5 md:flex"
              >
                <img src={googleImg} alt="google" className="w-6" />
                <span className="tracking-tight-custom ml-2.5 text-base leading-140 font-semibold">
                  구글 계정으로 시작하기
                </span>
              </div>
            </>
          )}
          <div className="flex items-center gap-3 md:hidden">
            <img
              src={googleImg}
              alt="google"
              className="w-6 cursor-pointer rounded-[50%] bg-white p-1.5"
              onClick={GoogleLogin}
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
        </div>
        {isShow && (
          <div className="bg-mobile-navigation absolute top-20 left-0 flex w-full flex-col gap-4 bg-black p-5">
            <Link to="/my" className="text-[14px] font-semibold">
              마이페이지
            </Link>
            <Link to="/project" className="text-[14px] font-semibold">
              프로젝트
            </Link>
            <Link to="/part/PM" className="text-[14px] font-semibold">
              파트 소개
            </Link>
            <Link to="/apply" className="text-[14px] font-semibold">
              인스타그램
            </Link>
            <Link to="/apply" className="text-[14px] font-semibold">
              14기 지원하기
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
