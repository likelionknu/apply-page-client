import { useMediaQuery } from "react-responsive";
import ProfileInfo from "./ProfileInfo";
import ProfileWebBottom from "./ProfileWebBottom";
import ProfileMobileBottom from "./ProfileMobileBottom";
import IncompleteProfileCard from "./IncompleteProfileCard";
import type { ProfileItem } from "@my/types/ProfileItem";

interface ProfileSectionProps {
  data: ProfileItem | null;
  onDelete: () => void;
  onLogout: () => void;
}

function ProfileSection({ data, onDelete, onLogout }: ProfileSectionProps) {
  const isProfileIncomplete =
    !data?.depart || !data?.student_id || !data?.grade || !data?.phone;

  const isDesktop = useMediaQuery({ minWidth: 641 });

  return (
    <section className="flex w-full flex-col md:w-auto lg:min-w-60.25">
      <div className="flex flex-col items-center">
        <img
          src={data?.profile_url}
          alt="프로필 이미지"
          className="bg-white1 w-26.5 rounded-[50%] lg:w-35"
        />
        <span className="tracking-tight-custom mt-6 text-[18px] leading-140 font-medium md:mt-8 lg:text-[20px]">
          {data?.name || "정보 없음"}
        </span>
        <span className="mt-2 text-[14px] leading-140 font-medium tracking-[-0.02em] text-[#727272] lg:text-[16px]">
          {data?.email || "정보 없음"}
        </span>
        <div className="mt-5 flex w-full flex-col items-center">
          {isProfileIncomplete ? (
            <IncompleteProfileCard
              isDesktop={isDesktop}
              isMobile={!isDesktop}
            />
          ) : (
            <div className="grid w-full grid-cols-2 gap-x-6 gap-y-3 md:flex md:flex-col md:gap-5">
              <ProfileInfo label="학과" content={data.depart} />
              <ProfileInfo label="학번" content={data.student_id} />
              <ProfileInfo label="학년" content={`${data.grade}학년`} />
              <ProfileInfo label="전화번호" content={data.phone} />
            </div>
          )}
        </div>
      </div>
      {/* 웹 */}
      {isDesktop && <ProfileWebBottom onDelete={onDelete} />}

      {/* 모바일 */}
      {!isDesktop && (
        <ProfileMobileBottom onDelete={onDelete} onLogout={onLogout} />
      )}
    </section>
  );
}

export default ProfileSection;
