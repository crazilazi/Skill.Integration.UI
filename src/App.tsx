// src/App.tsx
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import { FC } from "react";
import { Provider } from "react-redux";
import store from "./store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </Provider>
  );
};
export default App;
