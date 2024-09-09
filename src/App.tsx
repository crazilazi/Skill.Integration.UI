import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Reports from "./pages/reports";
import { FC } from "react";
import AuthForm from "./components/AuthForm";
import { Provider } from "react-redux";
import store from "./store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
