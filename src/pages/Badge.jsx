import React from "react";
import styled from "styled-components";
import BadgeItem from "../components/BadgeItem";
import BackBtn from "../components/BackBtn";
const dummyBadges = [
  {
    name: "채식 초보",
    icon: "🌱",
    description: "기본적인 채식 식단을 따라해 보세요!",
  },
  { name: "시장 탐방", icon: "🛒", description: "전통시장에서의 구매 경험!" },
  {
    name: "활용왕",
    icon: "♻️",
    description: "3회 이상 다회용기로 포장해 보세요!",
  },
  {
    name: "다회용기 사용자",
    icon: "♻️",
    description: "5회 사용하여 환경 보호에 기여!",
  },
  {
    name: "부산 미식가",
    icon: "🍲",
    description: "부산의 맛을 경험해 보세요!",
  },
  {
    name: "용기 구매자",
    icon: "🌍",
    description: "친환경 용기를 구매하여 지구를 지켜요!",
  },
  {
    name: "챌린저",
    icon: "♻️",
    description: "10회 이상 다회용기를 사용해 보세요!",
  },
];

function Badge() {
  return (
    <Container>
      <div style={{ display: "flex" }}>
        <BackBtn />
        <h2 style={{ marginLeft: "60px" }}>배지 목록</h2>
      </div>
      <BadgeList>
        {dummyBadges.map((badge, index) => (
          <BadgeItem key={index} badge={badge} />
        ))}
      </BadgeList>
    </Container>
  );
}

const Container = styled.div`
  margin: 20px;
`;

const BadgeList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 20px;
`;

export default Badge;
