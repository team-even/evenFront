import React, { useState, useEffect } from "react"; // useEffect 추가
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [memberId, setMemberId] = useState(null); // memberId 상태 추가
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("로그인:", { email, password });

    // 로그인 요청
    try {
        const response = await fetch('https://692d-14-44-120-102.ngrok-free.app/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': '69420', // ngrok 경고 무시
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('서버로부터 받은 데이터:', data);

            // 성공적인 로그인 시 홈 화면으로 이동
            // 콜론(:)이 없는 키 이름을 사용
            if (data["status:"] === "success") {
                console.log("로그인 성공, 홈으로 이동합니다.");
                navigate("/home");
            } else {
                console.error("로그인 실패:", data);
                alert(data.message || "로그인에 실패했습니다. 다시 시도해 주세요.");
            }
        } else {
            throw new Error('네트워크 응답이 올바르지 않습니다.');
        }
    } catch (error) {
        console.error('로그인 중 오류 발생:', error);
        alert("로그인 중 오류가 발생했습니다. 나중에 다시 시도해 주세요.");
    }
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