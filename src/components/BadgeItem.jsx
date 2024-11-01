import React from "react";
import styled from "styled-components";

const BadgeItem = ({ badge }) => {
  return (
    <BadgeContainer>
      <BadgeImage>{badge.icon}</BadgeImage>
      <BadgeName>{badge.name}</BadgeName>
    </BadgeContainer>
  );
};

const BadgeContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-right: 10px;
`;

const BadgeImage = styled.div`
  font-size: 24px;
  text-align: center;
`;

const BadgeName = styled.p`
  min-width: 100px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export default BadgeItem;
