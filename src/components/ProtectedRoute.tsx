import { FC, ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface ProtectedRouteProps {
  children: ReactElement; // The component to render
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { token } = useSelector((state: RootState) => state.auth);

  // Accessing location object
  const location = useLocation();
  const pathname = location.pathname; // Access the pathname
  // Remove the leading slash if it exists
  const pathnameWithoutSlash = pathname.startsWith("/")
    ? pathname.slice(1)
    : pathname;
  console.log(pathnameWithoutSlash);

  // if no token and path is register then redirect to register page
  if (!token && pathnameWithoutSlash === "register") {
    return <Navigate to="/register" />;
  }

  // If there is no token, redirect to login
  if (!token && pathnameWithoutSlash !== "register") {
    return <Navigate to="/login" />;
  }

  // Otherwise, render the protected component
  return children;
};

export default ProtectedRoute;
