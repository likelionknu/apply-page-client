import { BrowserRouter, Route, Routes } from "react-router-dom";
import PendingPage from "@shared/pages/PendingPage";
import PartMainPage from "@part/pages/PartMainPage";
import MainPage from "@main/mainpage/MainPage";
import RecruitPage from "@recruit/pages/RecruitPage";
import ProjectPage from "@project/pages/ProjectPage";
import ApplyPage from "@apply/ApplyPage";
import MyPage from "@my/pages/MyPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PendingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/part/:part" element={<PartMainPage />} />
        <Route path="/recruit/:part" element={<RecruitPage />} />
        <Route path="/my" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
