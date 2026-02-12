import { useNavigate } from "react-router-dom";

interface PartIntroduceComponentProps {
  titleText: string;
  titleKoreanText: string;
  subText: string;
  img: string;
  part: string;
}

const PartIntroduceComponent = ({
  titleText,
  titleKoreanText,
  subText,
  img,
  part,
}: PartIntroduceComponentProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/part/${part}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group flex h-96 w-65.5 cursor-pointer flex-col items-center justify-between bg-black transition-all duration-300 ease-out hover:scale-[1.04]"
    >
      <div className="flex h-64 w-64 items-center justify-center rounded-[44px] border border-white bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,rgba(0,112.05,255,0.49)_3%,rgba(0,67.23,153,0.06)_100%)] shadow-[0px_5px_20px_4px_rgba(158,216,245,0.53)] transition-all duration-300 group-hover:shadow-[0px_10px_40px_8px_rgba(118,203,246,0.6)]">
        <img
          src={img}
          alt={titleText}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex h-20 w-65.5 flex-col justify-between">
        <div className="flex items-center">
          <div className="bg-linear-to-r from-white to-[#9EEAFF] bg-clip-text text-4xl font-bold text-transparent">
            {titleText}
          </div>

          <div className="text-4 ml-5.5 justify-start text-base font-medium text-white transition-colors duration-300 group-hover:text-[#9EEAFF]">
            {titleKoreanText}
          </div>
        </div>

        <div className="w-full bg-linear-to-r from-white to-[#999999] bg-clip-text text-xl font-medium text-transparent transition-opacity duration-300 group-hover:opacity-80">
          {subText}
        </div>
      </div>
    </div>
  );
};

export default PartIntroduceComponent;
