import { BrowserRouter, Route, Routes } from "react-router-dom";
import PendingPage from "@shared/pages/PendingPage";
import PartMainPage from "@part/pages/PartMainPage";
import MainPage from "@main/mainpage/MainPage";
import ApplicationPage from "@application/pages/ApplicationPage";
import MyApplicationPage from "@application/pages/MyApplicationPage";
import ProjectDetailPage from "@project/pages/ProjectPage";
import ApplyNoticePage from "@apply/ApplyPage";
import MyPage from "@my/pages/MyPage";
import AdditionalPage from "../features/additional/pages/AdditionalPage";
import GoogleCallback from "@shared/apis/GoogleCallBack";
import ScrollToTop from "@shared/utils/ScrollToTop";


function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<GoogleCallback />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/project" element={<ProjectDetailPage />} />
        <Route path="/apply" element={<ApplyNoticePage />} />
        <Route path="/part/:part" element={<PartMainPage />} />
        <Route path="/recruit/:id" element={<ApplicationPage />} />
        <Route path="/recruit/my/:id" element={<MyApplicationPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/additional" element={<AdditionalPage />} />
        <Route path="*" element={<PendingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
