import React from "react";
import styled from "styled-components";

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
  background-color: #E9ADC8;
  border-radius: 20px;
  padding: 5px 10px;
  margin-left: 5px;
`;

const MiddleDiv = styled.div`
  margin: 3px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`

const Distance = styled.h4`

`

const MarketImg = styled.div`
  width: 80px;
  height: 80px;
  background-color: #eee; /* Placeholder for the image */
  border-radius: 5px;
`;

function MarketItem() {
  return (
    <Section>
      <Description>
        <MarketName>다회용기</MarketName>
        <MiddleDiv>
          다회용기
          <Tag>지참</Tag>
        </MiddleDiv>
        <Distance>5m</Distance>
      </Description>
      <MarketImg />
    </Section>
  );
}

export default MarketItem;