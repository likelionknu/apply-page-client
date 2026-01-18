import logoImg from "../../assets/shared/logo.png";
import googleImg from "../../assets/shared/google.png";

const NavDivider = () => <span className="bg-white1 h-3.5 w-0.75"></span>;
const ToggleBar = () => (
  <div className="bg-gray1 h-0.5 w-4.5 rounded-[20px]"></div>
);

function Header() {
  return (
    <header className="text-white1 bg-black1 fixed z-100 flex h-20 w-full">
      <nav className="mx-auto flex w-full max-w-310 items-center justify-between">
        <div className="flex gap-14.5">
          <div className="flex cursor-pointer items-center">
            <img src={logoImg} alt="knu" className="w-14.75" />
            <p className="text-base leading-[140%] font-semibold tracking-[-0.025em]">
              LIKELION KNU
            </p>
          </div>
          {/* hidden -> flex */}
          <div className="hidden items-center gap-12 text-[18px] leading-[140%] font-medium tracking-[-0.025em]">
            <a className="hover:text-blue cursor-pointer">프로젝트</a>
            <NavDivider />
            <a className="hover:text-blue cursor-pointer">파트 소개</a>
            <NavDivider />
            <a className="hover:text-blue cursor-pointer">지원하기</a>
          </div>
        </div>
        {/* hidden -> flex */}
        <div className="hidden items-center gap-[19.2px]">
          <div className="border-white1 mr-2 flex cursor-pointer items-center rounded-lg border-[0.4px] px-5 py-2.5">
            <img src={googleImg} alt="google" className="w-6" />
            <p className="ml-2.5 text-base leading-[140%] font-semibold tracking-[-0.025em]">
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
