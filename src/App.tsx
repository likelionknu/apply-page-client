import "./App.css";
import AppRouter from "./routes/AppRouter";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isAndroid = /android/.test(userAgent);
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isInApp =
      /kakao|instagram|fbav|fb_iab|line|naverwv|wv|webview|everytime/.test(
        userAgent,
      );

    if (!isInApp) return;

    const searchParams = new URLSearchParams(window.location.search);
    const isOAuthCallback =
      searchParams.has("code") || searchParams.has("error");
    if (isOAuthCallback) return;

    const guardKey = "externalBrowserGuardV1";
    if (sessionStorage.getItem(guardKey) === "true") return;
    sessionStorage.setItem(guardKey, "true");

    const currentUrl = window.location.href;

    if (isAndroid) {
      const noSchemeUrl = currentUrl.replace(/^https?:\/\//, "");
      const intentUrl = `intent://${noSchemeUrl}#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=${encodeURIComponent(currentUrl)};end`;
      window.location.href = intentUrl;
      return;
    }

    if (isIOS) {
      alert(
        "인앱 브라우저에서는 구글 로그인이 제한될 수 있습니다.\n오른쪽 상단 메뉴에서 Safari(기본 브라우저)로 열어주세요.",
      );
    }
  }, []);

  return (
    <div className="select-none">
      <AppRouter />
    </div>
  );
}

export default App;
