import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Section = styled.div`
  border: 1px solid #ddd;
  border-radius: 20px;
  margin: 10px 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 128px;
  background-color: #ffffff;
  cursor: pointer;
`;

const Description = styled.div`
  flex: 1;
  text-align: start;
`;

const MarketName = styled.h4`
  margin: 0;
  font-size: 20px;
`;

const Tag = styled.span`
  background-color: #e9adc8;
  border-radius: 20px;
  padding: 5px 10px;
  margin-left: 5px;
`;

const MiddleDiv = styled.div`
  margin: 3px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Distance = styled.h4``;

const MarketImg = styled.img`
  width: 80px;
  height: 80px;
  background-color: #eee;
  border-radius: 5px;
`;

function MarketItem({ id, name, tag, distance, image }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${id || 1}`);
  };

  return (
    <Section onClick={handleClick}>
      <Description>
        <MarketName>{name}</MarketName>
        <MiddleDiv>
          다회용기
          <Tag>{tag}</Tag>
        </MiddleDiv>
        <Distance>{distance}</Distance>
      </Description>
      <MarketImg src={image} alt={name}/>
    </Section>
  );
}

export default MarketItem;