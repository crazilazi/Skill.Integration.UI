import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store"; // Import AppDispatch for typing
import { login, logout } from "../components/services/authSlice";

// Define the return type of the useAuth hook
interface UseAuthReturnType {
  token: string | null;
  loading: boolean;
  error: string | null;
  loginUser: (username: string, password: string) => void;
  logoutUser: () => void;
}

export const useAuth = (): UseAuthReturnType => {
  const { token, loading, error } = useSelector(
    (state: RootState) => state.auth
  );

  // Use typed dispatch
  const dispatch: AppDispatch = useDispatch();

  const loginUser = (username: string, password: string) => {
    dispatch(login({ username, password }));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return {
    token,
    loading,
    error,
    loginUser,
    logoutUser,
  };
};
