import { useNavigate } from "react-router-dom";
import ProfileImg from "../../assets/profile.png";

interface IncompleteProfileCardProps {
  isDesktop: boolean;
  isMobile: boolean;
}

function IncompleteProfileCard({
  isDesktop,
  isMobile,
}: IncompleteProfileCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="flex w-81 cursor-pointer flex-col items-center gap-2 rounded-[20px] bg-[rgba(105,105,105,0.53)] px-7.5 py-6 md:w-auto md:bg-[#1a1a1a] md:p-7.5"
      onClick={() => navigate("/additional")}
    >
      <span className="text-[16px] font-medium tracking-[-0.02em]">
        {isDesktop && "프로필을 완성하세요."}
        {isMobile && <img src={ProfileImg} alt="프로필" className="w-12" />}
      </span>
      <span className="max-w-56.5 text-[10px] leading-6 font-medium tracking-[-0.02em] text-white md:text-[14px] md:text-[#727272]">
        {isDesktop &&
          "공고에 지원하려면 프로필을 완성해야해요. 여기를 눌러 프로필을완성하세요."}
        {isMobile && "공고에 지원하려면 프로필을 완성해주세요!"}
      </span>
    </div>
  );
}

export default IncompleteProfileCard;
