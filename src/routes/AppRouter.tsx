import { BrowserRouter, Route, Routes } from "react-router-dom";
import PendingPage from "../shared/pages/PendingPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PendingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
