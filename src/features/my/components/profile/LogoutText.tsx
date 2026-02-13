function LogoutText({ onDelete }: { onDelete: () => void }) {
  return (
    <span
      onClick={onDelete}
      className="text-red cursor-pointer text-[10px] font-medium md:text-[14px]"
    >
      탈퇴하기
    </span>
  );
}

export default LogoutText;
