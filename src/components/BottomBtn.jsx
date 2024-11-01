import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const BottomBtn = ({ text, id, cartItemCount }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (text === "결제하기") {
      navigate(`/detail/${id}/payment`);
    } else {
      navigate(`/detail/${id}/cart`);
    }
  };

  return (
    <ButtonContainer onClick={handleClick}>
      {cartItemCount > 0 ? `${cartItemCount}개 담음` : text}
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
