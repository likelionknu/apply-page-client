import ProfileInfoCard from "./ProfileInfoCard";

interface ProfileInfoProps {
  label: string;
  content: string | number;
}

function ProfileInfo({ label, content }: ProfileInfoProps) {
  return (
    <div className="flex items-center justify-between">
      <label className="tracking-tight-custom mr-8 text-right text-[20px] leading-140 font-medium">
        {label}
      </label>
      <ProfileInfoCard hasFixedWidth={true}>{content}</ProfileInfoCard>
    </div>
  );
}

export default ProfileInfo;
