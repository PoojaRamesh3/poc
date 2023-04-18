import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./screens/LoginPage";
import HomePage from "./screens/HomePage";
import TeamPage from "./screens/TeamPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
