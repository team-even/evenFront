import React from "react";
import styled from "styled-components";

const BadgeItem = ({ badge }) => {
  return (
    <BadgeContainer>
      <BadgeImage>{badge.icon}</BadgeImage>
      <BadgeName>{badge.name}</BadgeName>
      <BadgeDescription>{badge.description}</BadgeDescription>
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
  text-align: center;
  min-width: 16:0px;
`;

const BadgeImage = styled.div`
  font-size: 36px;
  margin-bottom: 10px;
`;

const BadgeName = styled.p`
  min-width: 100px;
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
`;

const BadgeDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

export default BadgeItem;
