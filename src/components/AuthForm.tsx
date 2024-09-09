import React, { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { login } from "../features/auth/services/authSlice";
import "./AuthForm.css"; // Custom CSS for additional styling

const { Title } = Typography;

const AuthForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: AppDispatch = useDispatch(); // correctly typed dispatch

  const handleSubmit = () => {
    dispatch(login({ username, password })); // Dispatch the thunk
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
    </div>
  );
};

export default AuthForm;
