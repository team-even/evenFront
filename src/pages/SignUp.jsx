import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // useNavigate를 사용하기 위해 import

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState(""); // 닉네임 상태 추가
  const [phoneNumber, setPhoneNumber] = useState(""); // 전화번호 상태 추가
  const navigate = useNavigate(); // navigate 함수 사용을 위해 추가

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("회원가입:", { email, password, nickname, phoneNumber });

    try {
      const response = await fetch('https://692d-14-44-120-102.ngrok-free.app/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': '69420',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          nickname: nickname,
          phoneNumber: phoneNumber,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('서버로부터 받은 데이터:', data);

        // 성공적인 응답 처리
        if (data["status:"] === "success") {
          console.log("회원가입 성공, 홈으로 이동합니다.");
          navigate("/"); // 홈으로 이동
        } else {
          console.error("회원가입 실패:", data);
          alert(data.message || "회원가입에 실패했습니다. 다시 시도해 주세요.");
        }
      } else {
        throw new Error('네트워크 응답이 올바르지 않습니다.');
      }
    } catch (error) {
      console.error('회원가입 중 오류 발생:', error);
      alert("회원가입 중 오류가 발생했습니다. 나중에 다시 시도해 주세요.");
    }
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
      <InputField>
        <Label htmlFor="nickname">닉네임</Label>
        <Input
          type="text"
          id="nickname"
          value={nickname}
          onChange={handleNicknameChange}
          required
        />
      </InputField>
      <InputField>
        <Label htmlFor="phoneNumber">전화번호</Label>
        <Input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
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
  margin: 200px auto;
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