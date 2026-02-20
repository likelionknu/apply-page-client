import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import PendingPage from "@shared/pages/PendingPage";

function AppRouter() {
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
        <Route path="/pending" element={<PendingPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
