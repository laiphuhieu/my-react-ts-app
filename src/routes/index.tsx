import LandingPage from "@/layouts";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />\
      </Routes>
    </>
  );
};

export default AppRoutes;
