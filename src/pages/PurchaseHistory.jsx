import React, { useEffect, useState } from "react";
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
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://692d-14-44-120-102.ngrok-free.app/orders?memberId=1",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
            mode: "cors",
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("서버로부터 받은 데이터:", data);
          setOrders(data["result:"]); // 응답 데이터에서 'result:' 키를 사용하여 상태 업데이트
        } else {
          throw new Error("네트워크 응답이 올바르지 않습니다.");
        }
      } catch (error) {
        console.error("데이터 요청 중 오류 발생:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Title>구매 현황</Title>
      {orders.map((order) => (
        <InfoSection key={order.orderId}>
          <div style={{alignItems:'center'}}>
            <h1>{order.storeName}</h1>
            <CategoryTag tag={"부산 로컬 음식"} size="mini" />
          </div>
          <p>
            {order.foodInfoHistoryList.map((food, index) => (
              <span key={food.foodId}>
                {food.foodName}({food.price}원)
                {index < order.foodInfoHistoryList.length - 1 && ", "}
              </span>
            ))}
          </p>
          <ProgressBar currentStatus={order.orderCategory} />
        </InfoSection>
      ))}
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
