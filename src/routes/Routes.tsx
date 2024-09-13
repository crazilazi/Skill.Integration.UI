import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../components/login/Login";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthForm />} />
    </Routes>
  );
};

export default AppRoutes;
