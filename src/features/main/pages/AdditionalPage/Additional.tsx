import Header from "../../../../shared/components/Header";
import "./Additional.css";
import Logo from "@/shared/assets/logo.png";

const AdditionalPage = () => {
  const AdditionalInputComponent = () => {
    return (
      <div className="h-[54px]; flex w-[397px] items-center justify-end">
        <div className="justify-start text-2xl font-semibold text-white">
          연락처
        </div>
        <div className="ml-[92px] inline-block rounded-xl bg-[linear-gradient(180deg,#62E1EF_-5.87%,#92ADFF_100%)] p-[1px]">
          <input
            type="text"
            placeholder="이름을 입력해주세요."
            className="h-14 w-60 rounded-[11px] bg-black px-7 py-3.5 text-sm leading-6 font-medium text-white outline-none placeholder:text-zinc-500"
          />
        </div>
      </div>
    );
  };
  return (
    <div>
      <Header />
      <div className="AdditionalPage">
        <div className="mt-[130px] flex h-[108.018px] w-[388px] items-center">
          <img
            src={Logo}
            alt="logo"
            className="h-[width: 108.016px; height: 108.016px;]"
          />
          <div className="w-[280px]justify-start text-4xl font-semibold text-white">
            LIKELION KNU
          </div>
        </div>
        <div className="mt-[60px] justify-start text-2xl font-medium text-neutral-200">
          몇 가지 정보만 더 입력하면 모든 서비스 기능을 이용할 수 있어요
        </div>
        <AdditionalInputComponent />
      </div>
    </div>
  );
};

export default AdditionalPage;
