import React from "react";
import styled from "styled-components";

export const CategoryTag = ({ tag }) => {
  return (
    <TagContainer>
      <p>{tag}</p>
    </TagContainer>
  );
};

export const MiniTag = ({ tag }) => {
    return (
      <MiniTagContainer>
        <p>{tag}</p>
      </MiniTagContainer>
    );
  };


const TagContainer = styled.div`
  background-color: #dd017c;
  width: fit-content;
  padding: 8px 10px;
  border-radius: 20px;
  p {
    color: white;
    font-size: 14px;
  }
`;


const MiniTagContainer = styled.div`
  background-color: #cacaca;
  width: fit-content;
  padding: 8px 10px;
  border-radius: 10px;
  p {
    color: #000000;
    font-size: 14px;
  }
`;
