import React from "react";
import styled from "styled-components";
import BadgeItem from "../components/BadgeItem";

const dummyBadges = [
  { name: "채식 식단 누적 3회 섭취", icon: "🌱" },
  { name: "전통시장 누적 3회 방문", icon: "🛒" },
  { name: "다회용기 누적 5회 사용", icon: "♻️" },
  { name: "부산로컬음식 누적 3회 방문", icon: "🍲" },
  { name: "자원봉사 누적 10시간", icon: "🤝" },
  { name: "기부 누적 100,000원", icon: "💰" },
  { name: "친환경 제품 누적 5회 구매", icon: "🌍" },
  { name: "자전거 이용 누적 20회", icon: "🚴‍♂️" },
  { name: "친구 초대 누적 3회", icon: "👫" },
  { name: "스포츠 활동 누적 10회", icon: "⚽️" },
];

function Badge() {
  return (
    <Container>
      <h2>배지 목록</h2>
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
