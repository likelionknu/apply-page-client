import { BrowserRouter, Route, Routes } from "react-router-dom";
import PendingPage from "../shared/pages/PendingPage";
import PartMainPage from "../features/part/pages/PartMainPage";
import MainPage from "../features/main/mainpage/MainPage";
import RecruitPage from "@recruit/pages/RecruitPage";
import ProjectDetailPage from "../features/project/pages/ProjectPage";
import ApplyNoticePage from "../features/apply/ApplyPage";
import MyPage from "@my/pages/MyPage";
import AdditionalPage from "../features/additional/AdditionalPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PendingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/project" element={<ProjectDetailPage />} />
        <Route path="/apply" element={<ApplyNoticePage />} />
        <Route path="/part/:part" element={<PartMainPage />} />
        <Route path="/recruit/:part" element={<RecruitPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/additional" element={<AdditionalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
