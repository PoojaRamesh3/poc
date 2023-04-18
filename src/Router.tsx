import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./screens/LoginPage";
import HomePage from "./screens/HomePage";
import TeamPage from "./screens/TeamPage";
import ProjectPage from "./screens/ProjectPage";
import CalendarPage from "./screens/CalendarPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
