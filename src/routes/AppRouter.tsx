import { BrowserRouter, Route, Routes } from "react-router-dom";
import PendingPage from "../shared/pages/PendingPage";
import PartMainPage from "../features/partpage/pages/PartMainPage";
import MainPage from "../features/main/mainpage/MainPage";
import RecruitPage from "../features/recruit/pages/RecruitPage";
import ProjectDetailPage from "../features/project/pages/ProjectPage";
import ApplyNoticePage from "../features/apply/ApplyPage";

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
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
