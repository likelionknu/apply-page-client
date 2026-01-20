import { BrowserRouter, Route, Routes } from "react-router-dom";
import PendingPage from "../shared/pages/PendingPage";
import PartMainPage from "../features/partpage/pages/PartMainPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/part/:part" element={<PartMainPage />} />
        <Route path="*" element={<PendingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
