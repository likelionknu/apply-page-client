import ProfileInfoCard from "./ProfileInfoCard";

interface ProfileInfoProps {
  label: string;
  content: string | number;
}

function ProfileInfo({ label, content }: ProfileInfoProps) {
  return (
    <div className="w-full min-w-30 items-center md:flex md:min-w-71">
      <label className="tracking-tight-custom hidden min-w-13.75 text-left text-[16px] leading-140 font-medium md:mr-4 md:block lg:mr-6">
        {label}
      </label>
      <ProfileInfoCard>{content}</ProfileInfoCard>
    </div>
  );
}

export default ProfileInfo;
