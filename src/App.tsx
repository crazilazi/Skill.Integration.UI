// src/App.tsx
import "./app.css";
import AppLayout from "./components/menubar/menulayout";
import "antd/dist/reset.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import { FC } from "react";
import { Provider } from "react-redux";
import store from "./store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppLayout />
        <AppRoutes />
      </Router>
    </Provider>
  );
};
export default App;
