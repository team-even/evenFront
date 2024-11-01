import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인:", { email, password });
  };

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <img src={logo} alt="logo" />
        <Title>🌱 안녕하세요!</Title>
        <Subtitle>용기모아과 함께 환경보호를 시작해요</Subtitle>
        <InputField>
          <Label htmlFor="email">이메일</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </InputField>
        <InputField>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </InputField>
        <Button type="submit">로그인</Button>
        <SignUpButton type="button" onClick={navigateToSignUp}>
          회원가입
        </SignUpButton>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 100px 20px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 10px;
  color: #555;
  font-weight: bold;
`;

const Subtitle = styled.h4`
  text-align: center;
  margin-bottom: 30px;
  color: #555;
`;

const InputField = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 5px;
  display: block;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 10px;

  &:focus {
    border-color: #dd017c;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 16px;
  background-color: #dd017c;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 10px;
  width: 100%;
`;

const SignUpButton = styled.button`
  padding: 10px;
  background-color: transparent;
  color: #dd017c;
  border: none;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
`;

export default Login;
