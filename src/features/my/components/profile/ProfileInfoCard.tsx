interface ProfileInfoCardProps {
  children?: React.ReactNode;
}

const ProfileInfoCard = ({ children }: ProfileInfoCardProps) => {
  return (
    <div className="info-item-style px-4.5 py-3 text-center text-[15px] leading-6 font-medium md:min-w-55.5">
      {children}
    </div>
  );
};

export default ProfileInfoCard;
