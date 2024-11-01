import React, { useState } from "react";
import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지
    // 로그인 처리 로직 추가
    console.log("Email:", email);
    console.log("Password:", password);
    // 예: API 요청
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>로그인</Title>
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
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const InputField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Login;
