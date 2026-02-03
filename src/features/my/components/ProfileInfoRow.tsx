import ProfileInfoCard from "./ProfileInfoCard";

interface ProfileInfoRowProps {
  label: string;
  content: string | number;
}

function ProfileInfoRow({ label, content }: ProfileInfoRowProps) {
  return (
    <div className="flex items-center justify-between">
      <label className="tracking-tight-custom mr-8 text-right text-[20px] leading-140 font-medium">
        {label}
      </label>
      <ProfileInfoCard needWidth={true}>{content}</ProfileInfoCard>
    </div>
  );
}

export default ProfileInfoRow;
