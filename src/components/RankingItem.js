import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
  height: 90px;
  border-radius: 20px;
  background-color: ${({ isMine }) => (isMine ? "#e0ffe0" : "#ffffff")};
  padding: 0 20px;
`;

const Number = styled.h2`
  width: 50px;
`;

const Name = styled.h2`
  margin-right: 10px;
`;

const SubName = styled.h4`
  margin-right: auto;
  color: #888;
`;

const ExperienceValue = styled.h4`
  color: #3ba55c;
`;

function RankingItem({ number, name, subName, experienceValue, isMine }) {
  return (
    <Section isMine={isMine}>
      <Number>{number}</Number>
      <Name>{name}</Name>
      <SubName>{subName}</SubName>
      <ExperienceValue>{experienceValue}</ExperienceValue>
    </Section>
  );
}

export default RankingItem;
