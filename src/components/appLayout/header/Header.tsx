import React from "react";
import { Layout, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { logout } from "components";

const { Header } = Layout;

const HeaderWithLogout: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <Header className="site-layout-background">
      <div className="header-content">
        <h1 className="logo">My Application</h1>
        <Button
          type="default"
          icon={<LogoutOutlined />}
          onClick={handleLogout}
          className="logout-button"
        >
          Logout
        </Button>
      </div>
    </Header>
  );
};

export default HeaderWithLogout;
