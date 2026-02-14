import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import GoogleLogin from "@shared/apis/GoogleLogin";
import HeaderLogo from "./header/HeaderLogo";
import WebNav from "./header/WebNav";
import MobileNav from "./header/MobileNav";

const ACTIVE_PART = ["/part/PM", "/part/DE", "/part/BE", "/part/FE"];

interface HeaderProps {
  isMain?: boolean;
}

function Header({ isMain }: HeaderProps) {
  const location = useLocation();
  const isPartPage = ACTIVE_PART.includes(location.pathname);
  const isLogin = sessionStorage.getItem("accessToken");

  const isDesktop = useMediaQuery({ minWidth: 641 });
  const isMobile = useMediaQuery({ maxWidth: 640 });

  const headerStyle = isMain
    ? "bg-black1"
    : "bg-mobile-navigation bg-black md:bg-none md:bg-balck1";

  return (
    <header
      className={`${headerStyle} text-white1 sticky top-0 z-100 flex h-14 w-full py-1 md:h-20 md:py-0`}
    >
      <nav className="mx-auto flex w-full max-w-360 items-center justify-between px-2 md:px-8">
        <div className="flex w-full md:gap-7 lg:gap-14.5">
          <HeaderLogo />
          {/* 웹 */}
          {isDesktop && (
            <WebNav
              isLogin={isLogin}
              isPartPage={isPartPage}
              onLogin={GoogleLogin}
            />
          )}
        </div>

        {/* 모바일 */}
        {isMobile && (
          <MobileNav
            isMain={isMain}
            isPartPage={isPartPage}
            onLogin={GoogleLogin}
          />
        )}
      </nav>
    </header>
  );
}

export default Header;
