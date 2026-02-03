import type { ProfileItem } from "@my/types/ProfileItem";
import InfoImg from "../assets/info.png";
import ProfileInfo from "./ProfileInfo";
import ProfileInfoCard from "./ProfileInfoCard";

interface ProfileSectionProps {
  data: ProfileItem;
}

function ProfileSection({ data }: ProfileSectionProps) {
  const isProfileIncomplete =
    !data.depart || !data.student_id || !data.grade || !data.phone;

  return (
    <section className="flex flex-col gap-19">
      <div className="tracking-tight-custom text-[40px] leading-140 font-semibold">
        내 프로필
      </div>
      <div className="flex flex-col items-center gap-8.5">
        <img
          src={data?.profile_url}
          alt="프로필 이미지"
          className="bg-white1 h-60 w-60 rounded-[50%]"
        />
        <span className="tracking-tight-custom text-[40px] leading-140 font-semibold">
          {data.name || "정보 없음"}
        </span>
        <span className="tracking-tight-custom text-[24px] leading-140 font-[400px]">
          {data.email || "정보 없음"}
        </span>
        <div className="mt-5 flex flex-col items-center">
          {isProfileIncomplete ? (
            <div>
              <img
                src={InfoImg}
                alt="정보 미입력"
                className="mb-13.5 w-24.25"
              />
              <ProfileInfoCard>
                공고에 지원하려면 프로필을 완성해주세요
              </ProfileInfoCard>
            </div>
          ) : (
            <div className="flex flex-col gap-10">
              <ProfileInfo label="학과" content={data.depart} />
              <ProfileInfo label="학번" content={data.student_id} />
              <ProfileInfo label="학년" content={`${data.grade}학년`} />
              <ProfileInfo label="전화번호" content={data.phone} />
            </div>
          )}
        </div>
      </div>
      <span className="text-gray1 mt-20 text-[18px] leading-8 font-medium">
        탈퇴하기
      </span>
    </section>
  );
}

export default ProfileSection;
