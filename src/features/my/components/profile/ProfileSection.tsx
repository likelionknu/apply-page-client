import type { ProfileItem } from "@my/types/ProfileItem";
import ProfileInfo from "./ProfileInfo";

interface ProfileSectionProps {
  data: ProfileItem | null;
  onDelete: () => void;
}

function ProfileSection({ data, onDelete }: ProfileSectionProps) {
  const isProfileIncomplete =
    !data?.depart || !data?.student_id || !data?.grade || !data?.phone;

  return (
    <section className="flex flex-col lg:min-w-60.25">
      <div className="flex flex-col items-center">
        <img
          src={data?.profile_url}
          alt="프로필 이미지"
          className="bg-white1 w-26.5 rounded-[50%] lg:w-35"
        />
        <span className="tracking-tight-custom mt-6 text-[20px] leading-140 font-medium md:mt-8">
          {data?.name || "정보 없음"}
        </span>
        <span className="mt-2 text-[16px] leading-140 font-medium tracking-[-0.02em] text-[#727272]">
          {data?.email || "정보 없음"}
        </span>
        <div className="mt-5 flex flex-col items-center">
          {isProfileIncomplete ? (
            <>
              <div className="flex flex-col gap-2 rounded-[20px] bg-[#1a1a1a] p-7.5">
                <span className="text-[16px] font-medium tracking-[-0.02em]">
                  프로필을 완성하세요.
                </span>
                <span className="max-w-56 text-[14px] leading-6 font-medium tracking-[-0.02em] text-[#727272]">
                  공고에 지원하려면 프로필을 완성해야해요. 여기를 눌러 프로필을
                  완성하세요.
                </span>
              </div>
            </>
          ) : (
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 md:flex md:flex-col md:gap-5">
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
        className="text-red mt-5 cursor-pointer text-right text-[10px] leading-8 font-medium md:text-[14px]"
      >
        탈퇴하기
      </span>
    </section>
  );
}

export default ProfileSection;
