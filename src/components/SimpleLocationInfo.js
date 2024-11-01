import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 170px;
    background-color: white;
    padding: 16px;
    margin-bottom: 30px;
    transition: transform 0.3s ease;
    z-index: 1000;
`;

const Header = styled.h2`
    font-size: 18px;
    margin-bottom: 8px;
`;

const Info = styled.p`
    margin-bottom: 8px;
    font-size: 16px;
`;

const CloseButton = styled.button`
    padding: 8px 12px;
    background-color: #FF5F5F;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const SimpleLocationInfo = ({ place, onClose }) => {
    return (
        <Container>
          <>
            <Header>선택된 장소</Header>
            <Info>위도: {place.lat}</Info>
            <Info>경도: {place.lng}</Info>
            <CloseButton onClick={onClose}>닫기</CloseButton>
          </>
        </Container>
    );
};

export default SimpleLocationInfo;