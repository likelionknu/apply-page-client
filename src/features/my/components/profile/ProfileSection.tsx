import { useNavigate } from "react-router-dom";
import ProfileInfo from "./ProfileInfo";
import type { ProfileItem } from "@my/types/ProfileItem";
import ProfileWebBottom from "./ProfileWebBottom";
import { useMediaQuery } from "react-responsive";
import ProfileMobileBottom from "./ProfileMobileBottom";

interface ProfileSectionProps {
  data: ProfileItem | null;
  onDelete: () => void;
  onLogout: () => void;
}

function ProfileSection({ data, onDelete, onLogout }: ProfileSectionProps) {
  const navigate = useNavigate();
  const isProfileIncomplete =
    !data?.depart || !data?.student_id || !data?.grade || !data?.phone;

  const isDesktop = useMediaQuery({ minWidth: 769 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
              <div
                className="flex cursor-pointer flex-col gap-2 rounded-[20px] bg-[#1a1a1a] p-7.5"
                onClick={() => navigate("/additional")}
              >
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
      {/* 웹 */}
      {isDesktop && <ProfileWebBottom onDelete={onDelete} />}

      {/* 모바일 */}
      {isMobile && (
        <ProfileMobileBottom onDelete={onDelete} onLogout={onLogout} />
      )}
    </section>
  );
}

export default ProfileSection;
