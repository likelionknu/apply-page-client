import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
// import PendingPage from "@shared/pages/PendingPage";
import GoogleCallback from "@shared/apis/GoogleCallBack";
import ScrollToTop from "@shared/utils/ScrollToTop";
import MainPage from "@main/pages/MainPage";
import ProjectPage from "@project/pages/ProjectPage";
import ApplyPage from "@apply/pages/ApplyPage";
import PartPage from "@part/pages/PartPage";
import ApplicationPage from "@application/pages/ApplicationPage";
import MyApplicationPage from "@application/pages/MyApplicationPage";
import MyPage from "@my/pages/MyPage";
import AdditionalPage from "@additional/pages/AdditionalPage";
import ErrorPage from "@shared/pages/ErrorPage";
// import LoadingPage from "@shared/pages/LoadingPage";

function AppRouter() {
  useEffect(() => {
    const checkLoginStatus = async () => {
      const refreshToken = sessionStorage.getItem("refreshToken");

      // 토큰 없으면 검사 없이 바로 진입
      if (!refreshToken) {
        return;
      }

      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_BASE_API_URL}/v1/auth/reissue`,
          { refresh_token: refreshToken },
        );

        const { access_token, refresh_token } = data.data;
        sessionStorage.setItem("accessToken", access_token);
        if (refresh_token) {
          sessionStorage.setItem("refreshToken", refresh_token);
        }
      } catch (error) {
        let msg = "서버와 연결할 수 없습니다. 잠시 후 다시 시도해주세요.";

        if (axios.isAxiosError(error)) {
          if (error.response?.data?.error?.message) {
            msg = error.response.data.error.message;
          } else if (error.response?.data?.message) {
            msg = error.response.data.message;
          }
        } else if (error instanceof Error) {
          msg = error.message;
        }
        console.log(msg);
      }
    };

    checkLoginStatus();
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<GoogleCallback />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/part/:part" element={<PartPage />} />
        <Route path="/recruit/:recruitId" element={<ApplicationPage />} />
        <Route
          path="/recruit/my/:applicationId"
          element={<MyApplicationPage />}
        />
        <Route path="/my" element={<MyPage />} />
        <Route path="/additional" element={<AdditionalPage />} />
        {/* <Route path="/pending" element={<PendingPage />} /> */}
        {/* <Route path="/loading" element={<LoadingPage />} /> */}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
