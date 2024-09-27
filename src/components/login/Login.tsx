import React, { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom"; // Import useNavigate
import { AppDispatch, RootState } from "../../store";
import { login } from "../services/authSlice";
import "./Login.css";

const { Title } = Typography;

const AuthForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch: AppDispatch = useDispatch(); // correctly typed dispatch
  const navigate = useNavigate(); // Get navigate function

  const token = useSelector((state: RootState) => state.auth.token);

  // If the token exists, redirect to the home page
  if (token) {
    console.log("Token exists, redirecting to home page");
    return <Navigate to="/" />;
  }

  const handleSubmit = async () => {
    try {
      // Dispatch the login action and wait for it to complete
      await dispatch(login({ username, password })).unwrap();
      // Redirect to the home page or another route after successful login
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
      // Handle login error (optional: show an error message)
    }
  };

  return (
    <div className="auth-form-container">
      <Title level={2}>Login</Title>
      <Form
        name="authForm"
        layout="vertical"
        onFinish={handleSubmit}
        className="auth-form"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-button">
            Login
          </Button>
        </Form.Item>
      </Form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default AuthForm;
