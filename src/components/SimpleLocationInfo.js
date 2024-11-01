import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 170px;
  background-color: white;
  margin-bottom: 30px;
  transition: transform 0.3s ease;
  z-index: 1000;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Section = styled.div`
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
  width: 100px;
  height: 100px;
  background-color: #eee;
  border-radius: 10px;
`;

const SimpleLocationInfo = ({ place, onClose }) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/detail/1s`)}>
      <Section>
        <Description>
          <MarketName>{place.name}</MarketName>
          <MiddleDiv>
            다회용기
            <Tag>{place.tag}</Tag>
          </MiddleDiv>
          <Distance>5m</Distance> {/* This can also be dynamic */}
        </Description>
        <MarketImg
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA1MDhfNDAg%2FMDAxNzE1MTU4NzY2Nzk0.HMLfO3hHbG4b8-BkV9VmnCZqHbAm88Cxx3IzL84Xt9Yg.J3ak6ooe1cssxvT4W-TyWH_QMRq3uri8duCUnN5HbQQg.JPEG%2FIMG_6701.JPG&type=sc960_832"
          alt="횟집"
        />
      </Section>
    </Container>
  );
};

export default SimpleLocationInfo;
