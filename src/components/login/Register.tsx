import React, { useState } from "react";
import "./Register.css";
import { Form, Input, Button, Typography } from "antd";
import { register } from "components/services/authSlice";
import { AppDispatch } from "store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch: AppDispatch = useDispatch(); // correctly typed dispatch
  const navigate = useNavigate(); // Get navigate function

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleNavigateToLogin = () => {
    setIsSubmitted(false);
    navigate("/login");
  };

  const handleSubmit = async () => {
    try {
      // Dispatch the register action and wait for it to complete
      await dispatch(register({ username, password })).unwrap();
      setIsSubmitted(true);
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <div className="auth-form-container">
      {!isSubmitted ? (
        <>
          <Title level={2}>Register</Title>
          <Form
            name="authForm"
            layout="vertical"
            onFinish={handleSubmit}
            className="auth-form"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
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
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="register-button"
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </>
      ) : (
        <div>
          <Title level={4}>Registration Successful!</Title>
          <Button onClick={handleNavigateToLogin} type="primary">
            Login to Continue
          </Button>
        </div>
      )}
    </div>
  );
};

export default Register;
