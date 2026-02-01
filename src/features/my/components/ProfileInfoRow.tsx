import ProfileInfoItem from "./ProfileInfoItem";

interface ProfileInfoRowProps {
  label: string;
  content: string;
}

function ProfileInfoRow({ label, content }: ProfileInfoRowProps) {
  return (
    <div className="flex items-center justify-between">
      <label className="tracking-tight-custom mr-8 text-right text-[20px] leading-140 font-medium">
        {label}
      </label>
      <ProfileInfoItem needWidth={true}>{content}</ProfileInfoItem>
    </div>
  );
}

export default ProfileInfoRow;
