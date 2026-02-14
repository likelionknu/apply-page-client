import { useNavigate } from "react-router-dom";
import { Button, Footer, Header } from "@shared/components";
import WarringImg from "../assets/warring.png";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-web-background">
      <Header />
      <main className="text-white1 min-h-dvh pt-31 pb-30 md:pb-75">
        <div className="flex flex-col items-center">
          <img src={WarringImg} alt="경고" className="w-10" />
          <div className="mt-12 text-[30px] font-semibold tracking-[-0.02em]">
            페이지를 찾을 수 없어요.
          </div>
          <div className="text-sub2 mt-7 flex flex-col gap-2 text-center text-[23px] font-medium tracking-[-0.02em]">
            <span>페이지가 존재하지 않거나, 사용할 수 없는 페이지에요.</span>
            <span>입력하신 주소가 정확한지 다시 한 번 확인해주세요.</span>
          </div>
        </div>
        <div className="mt-20 flex justify-center">
          <Button variant="recruit" onClick={() => navigate(-1)}>
            되돌아가기
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ErrorPage;
