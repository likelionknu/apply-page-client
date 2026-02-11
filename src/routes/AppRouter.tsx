import { BrowserRouter, Route, Routes } from "react-router-dom";
import PendingPage from "@shared/pages/PendingPage";
import GoogleCallback from "@shared/apis/GoogleCallBack";
import ScrollToTop from "@shared/utils/ScrollToTop";
import MainPage from "@main/mainpage/MainPage";
import ProjectPage from "@project/pages/ProjectPage";
import ApplyPage from "@apply/ApplyPage";
import PartMainPage from "@part/pages/PartMainPage";
import ApplicationPage from "@application/pages/ApplicationPage";
import MyApplicationPage from "@application/pages/MyApplicationPage";
import MyPage from "@my/pages/MyPage";
import AdditionalPage from "@additional/pages/AdditionalPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<GoogleCallback />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/part/:part" element={<PartMainPage />} />
        <Route path="/recruit/:recruitId" element={<ApplicationPage />} />
        <Route path="/recruit/my/:id" element={<MyApplicationPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/additional" element={<AdditionalPage />} />
        <Route path="*" element={<PendingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
