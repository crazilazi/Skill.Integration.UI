import { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/reset.css";
import AppRoutes from "./routes/Routes";
import store from "./store";
import "./App.css";
import AppLayout from "components/appLayout/AppLayout";
import ProtectedRoute from "components/ProtectedRoute";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
        <AppRoutes />
      </Router>
    </Provider>
  );
};
export default App;
