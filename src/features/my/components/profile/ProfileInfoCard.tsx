interface ProfileInfoCardProps {
  hasFixedWidth?: boolean;
  children?: React.ReactNode;
}

const ProfileInfoCard = ({ hasFixedWidth, children }: ProfileInfoCardProps) => {
  const InfoStyle = "min-w-55.5 text-[15px] leading-6";
  return (
    <div
      className={`info-item-style mi-w-51 px-4.5 py-3 text-center leading-7.5 font-medium ${hasFixedWidth ? InfoStyle : ""}`}
    >
      {children}
    </div>
  );
};

export default ProfileInfoCard;
