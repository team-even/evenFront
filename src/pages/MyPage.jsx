import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BadgeItem from "../components/BadgeItem";
import NavigationBar from "../components/NavigationBar";

const dummy = {
  nickname: "아영",
  badges: [
    { name: "채식 식단 누적 3회 섭취", icon: "🌱" },
    { name: "전통시장 누적 3회 방문", icon: "🛒" },
    { name: "다회용기 누적 5회 사용", icon: "♻️" },
    { name: "부산로컬음식 누적 3회 방문", icon: "🍲" },
  ],
};

function MyPage() {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate("/badge");
  };

  return (
    <Container>
      <Welcome>
        <h1>{dummy.nickname}님,</h1>
        <h1>안녕하세요!</h1>
      </Welcome>
      <Box>
        <span>포인트</span>
        <Number>250</Number>
        <span> 원</span>
      </Box>
      <Box>
        <span> 경험치</span>
        <Number style={{ color: "#3ba55c" }}>🌱 220</Number>
        <span style={{ color: "#3ba55c" }}> xp</span>
      </Box>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Title>최근에 받은 배지에요!</Title>
        <MoreLink onClick={handleMoreClick}>더보기 > </MoreLink>
      </div>
      <RecentBadges>
        <BadgeList>
          {dummy.badges.map((badge, index) => (
            <BadgeItem key={index} badge={badge} />
          ))}
        </BadgeList>
      </RecentBadges>
      <MenuItem>
        <p> 결제 수단 관리</p>
      </MenuItem>
      <MenuItem>
        <p> 정보 수정 </p>
      </MenuItem>
      <MenuItem>
        <p> 고객센터 </p>
      </MenuItem>
      <NavigationBar />
    </Container>
  );
}

const MenuItem = styled.div`
  /* background-color: white; */
  padding: 20px;
  margin-top: 10px;
  border-bottom: 1px solid #c0c0c0;
`;
const Container = styled.div`
  margin: 50px 20px;
`;
const Welcome = styled.div`
  margin: 20px 0;
`;

const Title = styled.h2`
  margin-top: 20px;
`;
const Box = styled.div`
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin-bottom: 10px;
`;

const Number = styled.span`
  margin-left: auto;
  font-weight: bold;
`;

const RecentBadges = styled.div`
  margin-top: 20px;
  max-height: 200px;
  overflow-x: auto;
  overflow-y: hidden;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
`;

const BadgeList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-right: 10px;
`;

const MoreLink = styled.span`
  color: #4c4c4c;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer; // 클릭 가능한 요소임을 나타내기 위해 추가

  &:hover {
    color: #b300a4;
  }
`;

export default MyPage;
