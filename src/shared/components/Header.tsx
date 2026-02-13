import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import GoogleLogin from "@shared/apis/GoogleLogin";
import HeaderLogo from "./header/HeaderLogo";
import WebNav from "./header/WebNav";
import MobileNav from "./header/MobileNav";

const ACTIVE_PART = ["/part/PM", "/part/DE", "/part/BE", "/part/FE"];

function Header() {
  const location = useLocation();
  const isPartPage = ACTIVE_PART.includes(location.pathname);
  const isLogin = sessionStorage.getItem("accessToken");

  const isDesktop = useMediaQuery({ minWidth: 641 });
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <header className="text-white1 md:bg-black1 bg-mobile-navigation sticky top-0 z-100 flex h-14 w-full bg-black py-1 md:h-20 md:bg-none md:py-0">
      <nav className="mx-auto flex w-full max-w-360 items-center justify-between px-2 md:px-8">
        <div className="flex w-full gap-14.5">
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
          <MobileNav isPartPage={isPartPage} onLogin={GoogleLogin} />
        )}
      </nav>
    </header>
  );
}

export default Header;
