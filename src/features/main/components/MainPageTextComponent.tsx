interface MainPageTextComponentProps {
  titleText: string;
  subText: React.ReactNode;
}

const MainPageTextComponent = ({
  titleText,
  subText,
}: MainPageTextComponentProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="justify-start text-center text-base font-semibold text-white sm:text-3xl sm:leading-10 sm:font-semibold">
        {titleText}
      </div>

      <div className="sm:text-gray4 flex w-78 items-center justify-center text-center text-[12px] leading-4 font-medium break-all text-white sm:w-140 sm:text-xl sm:leading-10 sm:font-medium lg:w-225 lg:text-2xl">
        {subText}
      </div>
    </div>
  );
};

export default MainPageTextComponent;
