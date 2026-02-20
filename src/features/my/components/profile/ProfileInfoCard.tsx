import { useMediaQuery } from "react-responsive";

interface ProfileInfoCardProps {
  children?: React.ReactNode;
}

function ProfileInfoCard({ children }: ProfileInfoCardProps) {
  const isDesktop = useMediaQuery({ minWidth: 641 });

  return (
    <>
      {/* 웹 */}
      {isDesktop && (
        <div className="rounded-[15px] bg-[#1A1A1A] px-4.5 py-3 text-left leading-6 font-medium md:block md:min-w-49 md:text-[13px] lg:min-w-55.5 lg:text-[15px]">
          {children}
        </div>
      )}

      {/* 모바일 */}
      {!isDesktop && (
        <div className="relative w-full">
          <div
            className="pointer-events-none absolute inset-0 rounded-[15px]"
            style={{
              padding: "1px",
              background: "linear-gradient(90deg, #62E1EF, #92ADFF)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          <div className="flex h-full w-full items-center justify-center rounded-[15px] px-4 py-3.5 text-center text-[12px] font-medium text-white">
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileInfoCard;
