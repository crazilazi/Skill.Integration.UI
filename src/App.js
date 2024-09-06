import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Reports from "./pages/reports";
import Services from "./pages/services";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/reports" exact Component={Reports} />
        <Route path="/products" exact Component={Products} />
        <Route path="/services" exact Component={Services} />
      </Routes>
    </Router>
  );
}

export default App;
