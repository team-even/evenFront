import React from "react";
import styled from "styled-components";
import BadgeItem from "../components/BadgeItem";
import BackBtn from "../components/BackBtn";

const dummyBadges = [
  { name: "채식 식단 3번 초보자", icon: "🌱" },
  { name: "전통시장 누적 <br/>3회 방문", icon: "🛒" },
  { name: "다회용기 누적 <br/>3회 포장", icon: "♻️" },
  { name: "다회용기 누적 <br/>5회 열심히!", icon: "♻️" },
  { name: "부산로컬음식 <br/>누적 3회 방문", icon: "🍲" },
  { name: "친환경 용기 <br/>누적 3회 구매", icon: "🌍" },
  { name: "다회용기 누적 10회 사용", icon: "♻️" }
]
function Badge() {
  return (
    <Container>
      <div style={{display: 'flex'}}>
        <BackBtn />
        <h2 style={{marginLeft:'60px'}}>배지 목록</h2>
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
