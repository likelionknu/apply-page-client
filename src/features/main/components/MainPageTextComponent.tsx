interface MainPageTextComponentProps {
  titleText: string;
  subText: React.ReactNode;
}

const MainPageTextComponent = ({
  titleText,
  subText,
}: MainPageTextComponentProps) => {
  return (
    <div className="flex flex-col justify-center gap-5">
      <div className="justify-start text-center text-3xl leading-10 font-semibold text-white">
        {titleText}
      </div>

      <div className="text-gray4 justify-start text-center text-2xl leading-10 font-medium">
        {subText}
      </div>
    </div>
  );
};

export default MainPageTextComponent;
