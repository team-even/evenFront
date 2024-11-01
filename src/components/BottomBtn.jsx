import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const BottomBtn = ({ text, id }) => {
  const navigate = useNavigate();
  return (
    <ButtonContainer
      onClick={() => {
        navigate(`/detail/${id}/payment`);
      }}
    >
      {text}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  width: 390px;
  position: fixed;
  bottom: 0;
  background-color: #dd017c;
  padding: 20px;
  color: white;
  font-size: 20px;
  font-weight: 700;
  border: none;
  z-index: 100;
  &:hover {
    background-color: #c2006e;
    transition: 0.2s ease-in-out;
  }
`;
