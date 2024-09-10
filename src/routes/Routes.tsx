// src/routes/Routes.tsx
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Products from "../pages/products";
import Reports from "../pages/reports";
import ProtectedRoute from "../components/ProtectedRoute";
import AuthForm from "../features/auth/components/AuthForm";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<AuthForm />} />
      {/* Protected Routes */}
      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        }
      />
      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
