import { BrowserRouter, Route, Routes } from "react-router-dom";
import PendingPage from "../shared/pages/PendingPage";
import MainPage from "../features/main/pages/main";
import RecruitPage from "../features/recruit/pages/RecruitPage";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PendingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/recruit/:part" element={<RecruitPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
