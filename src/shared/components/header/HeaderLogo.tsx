import { Link } from "react-router-dom";
import LogoImg from "@shared/assets/logo.png";

function HeaderLogo() {
  return (
    <Link to="/main" className="flex cursor-pointer items-center gap-1">
      <img src={LogoImg} alt="멋쟁이사자처럼 강남대" className="w-6 md:w-9" />
      <span className="text-[14px] leading-140 font-bold md:text-[21px]">
        LIKELION KNU
      </span>
    </Link>
  );
}

export default HeaderLogo;
