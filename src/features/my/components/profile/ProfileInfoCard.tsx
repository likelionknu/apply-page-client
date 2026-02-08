interface ProfileInfoCardProps {
  hasFixedWidth?: boolean;
  children: React.ReactNode;
}

const ProfileInfoCard = ({ hasFixedWidth, children }: ProfileInfoCardProps) => {
  const InfoStyle = "w-54.75 text-[20px] leading-6";
  return (
    <div
      className={`info-item-style px-7.5 py-4.5 text-center text-[13px] leading-7.5 font-medium ${hasFixedWidth ? InfoStyle : ""}`}
    >
      {children}
    </div>
  );
};

export default ProfileInfoCard;
