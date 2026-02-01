import InfoImg from "../assets/info.png";
import ProfileInfoItem from "./ProfileInfoItem";
import ProfileInfoRow from "./ProfileInfoRow";

interface InfoItemProps {
  label: string;
  content: string;
}

interface ProfileSectionProps {
  infos: InfoItemProps[];
}

function ProfileSection({ infos }: ProfileSectionProps) {
  const isEmpty = infos.length === 0;

  return (
    <section className="flex flex-col gap-19">
      <div className="tracking-tight-custom text-[40px] leading-140 font-semibold">
        내 프로필
      </div>
      <div className="flex flex-col items-center gap-8.5">
        <img
          alt="프로필 이미지"
          className="bg-white1 h-60 w-60 rounded-[50%]"
        />
        <span className="tracking-tight-custom text-[40px] leading-140 font-semibold">
          김감귤
        </span>
        <span className="tracking-tight-custom text-[24px] leading-140 font-[400px]">
          brotherhwang97@gmail.com
        </span>
        <div className="mt-5 flex flex-col items-center">
          {isEmpty ? (
            <>
              <img
                src={InfoImg}
                alt="정보 미입력"
                className="mb-13.5 w-24.25"
              />
              <ProfileInfoItem>
                공고에 지원하려면 프로필을 완성해주세요
              </ProfileInfoItem>
            </>
          ) : (
            <div className="flex flex-col gap-10">
              {infos.map((info, idx) => (
                <ProfileInfoRow
                  key={idx}
                  label={info.label}
                  content={info.content}
                />
              ))}
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
