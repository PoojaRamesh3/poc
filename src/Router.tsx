import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./screens/LoginPage";
import HomePage from "./screens/HomePage";
import TeamPage from "./screens/TeamPage";
import ProjectPage from "./screens/ProjectPage";
import CalendarPage from "./screens/CalendarPage";
import ProfilePage from "./screens/ProfilePage";
import SettingPage from "./screens/SettingPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
