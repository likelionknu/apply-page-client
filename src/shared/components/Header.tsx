import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import GoogleLogin from "@shared/apis/GoogleLogin";
import { AUTH_CHANGED_EVENT, readAuthSnapshot } from "@shared/utils/authEvents";
import HeaderLogo from "./header/HeaderLogo";
import WebNav from "./header/WebNav";
import MobileNav from "./header/MobileNav";
import Modal from "./modal/Modal";
import Button from "./Button";
import { useEffect, useState } from "react";

const ACTIVE_PART = ["/part/PM", "/part/DE", "/part/BE", "/part/FE"];

interface HeaderProps {
  isMain?: boolean;
}

function Header({ isMain }: HeaderProps) {
  const location = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [auth, setAuth] = useState(readAuthSnapshot);
  const isPartPage = ACTIVE_PART.includes(location.pathname);

  const isDesktop = useMediaQuery({ minWidth: 641 });

  useEffect(() => {
    const syncAuth = () => setAuth(readAuthSnapshot());

    window.addEventListener(AUTH_CHANGED_EVENT, syncAuth);
    window.addEventListener("storage", syncAuth);

    return () => {
      window.removeEventListener(AUTH_CHANGED_EVENT, syncAuth);
      window.removeEventListener("storage", syncAuth);
    };
  }, []);

  const headerStyle = isMain
    ? "bg-black1"
    : "bg-mobile-navigation bg-black md:bg-none md:bg-black1";

  const handlShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <header
      className={`${headerStyle} text-white1 sticky top-0 z-100 flex h-14 w-full py-1 md:h-20 md:py-0`}
    >
      {showModal && (
        <Modal>
          <Modal.Title>아기사자 모집을 위해 아직 준비 중이예요.</Modal.Title>
          <Modal.Close onClose={handleCloseModal} />
          <Modal.ButtonLayout>
            <Button variant="modal" onClick={handleCloseModal}>
              닫기
            </Button>
          </Modal.ButtonLayout>
        </Modal>
      )}

      <nav className="mx-auto flex w-full max-w-360 items-center justify-between px-2 md:px-8">
        <div className="flex w-full md:gap-7 lg:gap-14.5">
          <HeaderLogo />
          {/* 웹 */}
          {isDesktop && (
            <WebNav
              isLogin={auth.isLogin}
              userName={auth.userName}
              isPartPage={isPartPage}
              onLogin={GoogleLogin}
              onClick={handlShowModal}
            />
          )}
        </div>

        {/* 모바일 */}
        {!isDesktop && (
          <MobileNav
            isLogin={auth.isLogin}
            userName={auth.userName}
            isMain={isMain}
            isPartPage={isPartPage}
            onLogin={GoogleLogin}
            onClick={handlShowModal}
          />
        )}
      </nav>
    </header>
  );
}

export default Header;
