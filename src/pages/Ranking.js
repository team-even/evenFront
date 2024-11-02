import React from "react";
import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";
import RankingItem from "../components/RankingItem";

const Section = styled.div`
  margin: 190px 0 85px;
  padding: 0 20px;
`;

const FixedHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #f5f5f5;
  width: 390px;
  margin: 0 auto;
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0; /* 여백 제거 */
padding-top: 30px;
`;

const SubTitle = styled.h4`
  margin: 5px 0; /* 위아래 여백 조정 */
  font-weight: 500;
  text-align: center; /* 중앙 정렬 */
`;

const CurrentLeader = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const HighlightedRank = styled.span`
  font-size: 20px; /* 강조할 등수 크기 */
  color: #3ba55c; /* 강조 색상 */
  font-weight: bold; /* 볼드체 */
`;


const rankingData = [
  {
    number: 1,
    name: "지수",
    subName: "지구 지킴이",
    experienceValue: "🌱200xp",
  },
  {
    number: 2,
    name: "아영",
    subName: "멋진 환경 운동가",
    experienceValue: "🌱220xp",
    isMine: true,
  },
  {
    number: 3,
    name: "민준",
    subName: "녹색 생활자",
    experienceValue: "🌱180xp",
  },
  {
    number: 4,
    name: "서윤",
    subName: "환경 서포터",
    experienceValue: "🌱160xp",
  },
  {
    number: 5,
    name: "도윤",
    subName: "에코 프렌드",
    experienceValue: "🌱140xp",
  },
  {
    number: 6,
    name: "채은",
    subName: "에코 워리어",
    experienceValue: "🌱120xp",
  },
  {
    number: 7,
    name: "하준",
    subName: "클린 플래너",
    experienceValue: "🌱100xp",
  },
  {
    number: 8,
    name: "지아",
    subName: "환경 파수꾼",
    experienceValue: "🌱80xp",
  },
  {
    number: 9,
    name: "승우",
    subName: "친환경 서포터",
    experienceValue: "🌱60xp",
  },
  {
    number: 10,
    name: "유빈",
    subName: "초록 지킴이",
    experienceValue: "🌱40xp",
  },
];

function Ranking() {
  return (
    <>
      <FixedHeader>
        <Title>랭킹🏆</Title>
        <SubTitle>
          환경 보호 경험치가 상승 중! <br />
          다회용기 사용으로 얻은 성장을 확인해 보세요!
        </SubTitle>
        <CurrentLeader>
          아영님은 현재 <HighlightedRank>220xp</HighlightedRank>로{" "}
          <HighlightedRank>2등</HighlightedRank>이에요!
        </CurrentLeader>
      </FixedHeader>
      <Section>
        {rankingData.map((data) => (
          <RankingItem
            key={data.number}
            number={data.number}
            name={data.name}
            subName={data.subName}
            experienceValue={data.experienceValue}
            isMine={data.isMine}
          />
        ))}
        <NavigationBar />
      </Section>
    </>
  );
}

export default Ranking;
