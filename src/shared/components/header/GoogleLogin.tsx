import GoogleImg from "../../assets/google.png";

function GoogleLogin({ onLogin }: { onLogin: () => void }) {
  return (
    <div
      onClick={onLogin}
      className="border-white1 mr-2 flex cursor-pointer items-center rounded-lg border-[0.4px] px-5 py-2.5"
    >
      <img src={GoogleImg} alt="google" className="w-6" />
      <span className="tracking-tight-custom ml-2.5 text-base leading-140 font-semibold">
        구글 계정으로 시작하기
      </span>
    </div>
  );
}

export default GoogleLogin;
