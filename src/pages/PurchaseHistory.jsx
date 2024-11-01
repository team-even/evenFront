import React from "react";
import styled from "styled-components";
import { CategoryTag } from "../components/Tag";
import ProgressBar from "../components/ProgressBar";

const dummy = {
  img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231102_102%2F1698913021884pJUJO_JPEG%2F20230815_232836.jpg",
  title: "아빠횟집",
  tag: "부산 로컬 음식",
  menu: ["족발보쌈세트", "콜라"],
  order_count: 488,
  container_tags: ["다회용기 제공", "다회용기 지참"],
  status: "진행중", // 현재 상태를 추가합니다.
};

function PurchaseHistory() {
  const { menu, status } = dummy;

  return (
    <Container>
      <Title>구매 현황</Title>
      <InfoSection>
        <div>
          <h1>{dummy.title}</h1>
          <CategoryTag tag={dummy.tag} />
        </div>
        <p>
          {menu.length > 0 && menu[0]}
          {menu.length > 1 && ` 외 ${menu.length - 1}개`}{" "}
        </p>
        <ProgressBar currentStatus={status} /> {/* ProgressBar 사용 */}
      </InfoSection>
      <Title>구매 기록</Title>
    </Container>
  );
}

const Container = styled.div`
  margin: 10px 20px;
`;

const Title = styled.h2`
  margin-top: 10px;
`;

const InfoSection = styled.section`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;
  border-radius: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  h1 {
    font-size: 20px;
  }
`;

export default PurchaseHistory;
