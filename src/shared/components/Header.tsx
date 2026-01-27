import logoImg from "../assets/logo.png";
import googleImg from "../assets/google.png";
import { NavLink, useNavigate } from "react-router-dom";

const ToggleBar = () => (
  <div className="bg-gray1 h-0.5 w-4.5 rounded-[20px]"></div>
);

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main");
  };

  const getActiveClass = (isActive: boolean) => {
    return isActive
      ? "text-blue cursor-pointer"
      : "hover:text-blue cursor-pointer";
  };

  const activePartPaths = ["/part/PM", "/part/DE", "/part/BE", "/part/FE"];

  const isPartPage = activePartPaths.includes(location.pathname);

  return (
    <header className="text-white1 bg-black1 sticky top-0 z-100 flex h-20 w-full">
      <nav className="mx-auto flex w-full max-w-360 items-center justify-between px-8">
        <div className="flex gap-14.5">
          <div
            className="flex cursor-pointer items-center gap-1"
            onClick={handleClick}
          >
            <img src={logoImg} alt="knu" className="w-9" />
            <p className="text-[21px] leading-140 font-bold">LIKELION KNU</p>
          </div>
          <div className="tracking-tight-custom flex items-center gap-12 text-[18px] leading-140 font-medium">
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
        <div className="flex items-center gap-[19.2px]">
          <div className="border-white1 mr-2 flex cursor-pointer items-center rounded-lg border-[0.4px] px-5 py-2.5">
            <img src={googleImg} alt="google" className="w-6" />
            <p className="tracking-tight-custom ml-2.5 text-base leading-140 font-semibold">
              구글 계정으로 시작하기
            </p>
          </div>
          <div className="mr-1.5 hidden cursor-pointer flex-col gap-[4.5px]">
            <ToggleBar />
            <ToggleBar />
            <ToggleBar />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
