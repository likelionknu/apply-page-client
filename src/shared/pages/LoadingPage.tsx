import { Footer, Header, Spinner } from "@shared/components";

function LoadingPage() {
  return (
    <div>
      <Header />
      <div className="bg-web-background flex min-h-dvh items-center justify-center">
        <Spinner />
      </div>
      <Footer />
    </div>
  );
}

export default LoadingPage;
