import React from "react";
import styled from "styled-components";
import { CategoryTag } from "../components/Tag";
import ProgressBar from "../components/ProgressBar";
import PurchaseItem from "../components/PurchaseItem";
import NavigationBar from "../components/NavigationBar";

const dummy = {
  img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231102_102%2F1698913021884pJUJO_JPEG%2F20230815_232836.jpg",
  title: "아빠횟집",
  tag: "부산 로컬 음식",
  menu: ["족발보쌈세트", "콜라"],
  order_count: 488,
  container_tags: ["다회용기 제공", "다회용기 지참"],
  status: "진행중", // 현재 상태를 추가합니다.
};

// 더미 구매 기록 데이터
const purchaseHistoryData = [
  {
    storeImage:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231102_102%2F1698913021884pJUJO_JPEG%2F20230815_232836.jpg",
    storeName: "아빠횟집",
    menuName: "족발보쌈세트",
    price: 25000,
    tag: "전통 시장",
  },
  {
    storeImage:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231102_102%2F1698913021884pJUJO_JPEG%2F20230815_232836.jpg",
    storeName: "아빠횟집",
    menuName: "콜라",
    price: 2000,
    tag: "부산 로컬 음식",
  },
  {
    storeImage:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231102_102%2F1698913021884pJUJO_JPEG%2F20230815_232836.jpg",
    storeName: "엄마횟집",
    menuName: "회덮밥",
    price: 12000,
    tag: "전통 시장",
  },
  {
    storeImage:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231102_102%2F1698913021884pJUJO_JPEG%2F20230815_232836.jpg",
    storeName: "엄마횟집",
    menuName: "회덮밥",
    price: 12000,
    tag: "전통 시장",
  },
];

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
      <PurchaseList>
        {purchaseHistoryData.map((item, index) => (
          <PurchaseItem
            key={index}
            storeImage={item.storeImage}
            storeName={item.storeName}
            menuName={item.menuName}
            price={item.price}
            tag={item.tag}
          />
        ))}
      </PurchaseList>
      <NavigationBar />
    </Container>
  );
}

const Container = styled.div`
  margin: 10px 20px;
`;

const Title = styled.h2`
  margin-top: 40px;
  margin-bottom: 10px;
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

const PurchaseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 60px;
`;

export default PurchaseHistory;
