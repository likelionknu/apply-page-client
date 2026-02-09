import InfoImg from "../../assets/info.png";
import type { ProfileItem } from "@my/types/ProfileItem";
import ProfileInfo from "./ProfileInfo";
import ProfileInfoCard from "./ProfileInfoCard";

interface ProfileSectionProps {
  data: ProfileItem | null;
  onDelete: () => void;
}

function ProfileSection({ data, onDelete }: ProfileSectionProps) {
  const isProfileIncomplete =
    !data?.depart || !data?.student_id || !data?.grade || !data?.phone;

  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-center">
        <img
          src={data?.profile_url}
          alt="프로필 이미지"
          className="bg-white1 h-46 w-46 rounded-[50%]"
        />
        <span className="tracking-tight-custom mt-8 text-[20px] leading-140 font-medium">
          {data?.name || "정보 없음"}
        </span>
        <span className="mt-2 text-[16px] leading-140 font-medium tracking-[-0.02em] text-[#727272]">
          {data?.email || "정보 없음"}
        </span>
        <div className="mt-5 flex flex-col items-center">
          {isProfileIncomplete ? (
            <>
              <img
                src={InfoImg}
                alt="정보 미입력"
                className="mb-13.5 w-24.25"
              />
              <ProfileInfoCard>
                공고에 지원하려면 프로필을 완성해주세요
              </ProfileInfoCard>
            </>
          ) : (
            <div className="flex flex-col gap-5">
              <ProfileInfo label="학과" content={data.depart} />
              <ProfileInfo label="학번" content={data.student_id} />
              <ProfileInfo label="학년" content={`${data.grade}학년`} />
              <ProfileInfo label="전화번호" content={data.phone} />
            </div>
          )}
        </div>
      </div>
      <span
        onClick={onDelete}
        className="text-gray1 cursor-pointer text-[18px] leading-8 font-medium"
      >
        탈퇴하기
      </span>
    </section>
  );
}

export default ProfileSection;
