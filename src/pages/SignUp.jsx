import React, { useState } from "react";
import styled from "styled-components";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("회원가입:", { email, password });
    // API 요청 또는 회원가입 처리 로직 추가
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>회원가입</Title>
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
      <Button type="submit">회원가입</Button>
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
    border-color: #dd017c;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #dd017c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default SignUp;
