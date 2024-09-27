import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../components/login/Login";
import SkillMapping from "pages/skillMapping";
import Home from "pages/home";
import Register from "components/login/Register";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthForm />} />
      <Route path="/SkillMapping" element={<SkillMapping />} />
      <Route path="/Dashboard" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
