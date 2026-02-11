interface ProfileInfoCardProps {
  children?: React.ReactNode;
}

const ProfileInfoCard = ({ children }: ProfileInfoCardProps) => (
  <>
    {/* info-item-style */}
    {/* 웹 */}
    <div className="hidden min-w-55.5 rounded-[15px] bg-[#1A1A1A] px-4.5 py-3 text-left text-[15px] leading-6 font-medium md:block">
      {children}
    </div>

    {/* 모바일 */}
    <div className="relative w-full md:hidden">
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
  </>
);

export default ProfileInfoCard;
