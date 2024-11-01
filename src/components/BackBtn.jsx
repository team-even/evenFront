import React from "react";
import styled from "styled-components";
import { FaAngleLeft } from "react-icons/fa";

export const BackBtn = () => {
  return (
    <Wrapper>
      <BtnContainer>
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
  height: 30px; // Optional: Set height to match width for a perfect circle
  background-color: #ffffff;
  border-radius: 100px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); // Add shadow
  &:hover {
    background-color: #e6e6e6;
    transition: 0.2s ease-in-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); // Shadow on hover
  }
`;

export default BackBtn;
