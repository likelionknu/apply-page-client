import { BrowserRouter, Route, Routes } from "react-router-dom";
import PendingPage from "../shared/pages/PendingPage";
import RecruitPage from "../features/recruit/pages/RecruitPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PendingPage />} />
        <Route path="/recruit" element={<RecruitPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
