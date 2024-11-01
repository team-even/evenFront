import React from "react";
import styled from "styled-components";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // useNavigate import

export const BackBtn = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 돌아가기
  };

  return (
    <Wrapper>
      <BtnContainer onClick={handleBack}>
        <FaAngleLeft />
      </BtnContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 10px;
  margin-left: 10px;
`;

const BtnContainer = styled.button`
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border-radius: 100px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #e6e6e6;
    transition: 0.2s ease-in-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export default BackBtn;
