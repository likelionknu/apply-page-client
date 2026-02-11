import ProfileInfoCard from "./ProfileInfoCard";

interface ProfileInfoProps {
  label: string;
  content: string | number;
}

function ProfileInfo({ label, content }: ProfileInfoProps) {
  return (
    <div className="min-w-37.5 items-center md:flex md:min-w-71">
      <label className="tracking-tight-custom mr-6 hidden min-w-13.75 text-left text-[16px] leading-140 font-medium md:block">
        {label}
      </label>
      <ProfileInfoCard>{content}</ProfileInfoCard>
    </div>
  );
}

export default ProfileInfo;
