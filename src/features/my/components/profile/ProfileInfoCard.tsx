interface ProfileInfoCardProps {
  children?: React.ReactNode;
}

const ProfileInfoCard = ({ children }: ProfileInfoCardProps) => {
  return (
    // info-item-style
    <div className="rounded-[15px] bg-[#1A1A1A] px-3 py-2 text-left text-[12px] leading-6 font-medium md:min-w-55.5 md:px-4.5 md:py-3 md:text-[15px]">
      {children}
    </div>
  );
};

export default ProfileInfoCard;
