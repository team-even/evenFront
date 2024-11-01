import React, { useState } from "react";
import styled from "styled-components";
import { CategoryTag, MiniTag } from "../components/Tag";
import { FaRegStar } from "react-icons/fa";
import { MenuItem } from "../components/MenuItem";
import { BottomBtn } from "../components/BottomBtn";
import { BackBtn } from "../components/BackBtn";
import { useParams } from "react-router-dom";
import useCartStore from "../stores/cartStore";

const dummy = {
  img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231102_102%2F1698913021884pJUJO_JPEG%2F20230815_232836.jpg",
  title: "아빠횟집",
  tag: "부산 로컬 음식",
  favorite_count: 5,
  order_count: 488,
  container_tags: ["다회용기 제공", "다회용기 지참"],
};
const menuItems = [
  {
    id: 1,
    name: "회덮밥",
    price: 12000,
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2018/01/05/e265c10cb43c35e0fa9b9b332a12905a1.jpg", 
  },
  {
    id: 2,
    name: "광어회",
    price: 25000,
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxODA0MjFfMzYg/MDAxNTI0MzA2MTc2NzY4.ZIORnXzNIkeNd5fKPKmKMJWXfGOi0vuNTQBb2W5mBqog.gHq8DGQtQWRkPej4KsAXxepkSHYdlnQbX8ZsYfiaKxkg.JPEG.slds2/광어회4.jpg?type=w800",
  },
  {
    id: 3,
    name: "연어회",
    price: 28000,
    image:
      "https://thingotr4652.cdn-nhncommerce.com/data/editor/goods/201005/3baf89d87e6556b4cbfc0adb400a5f68_145416.jpg",
  },
  {
    id: 4,
    name: "새우튀김",
    price: 15000,
    image:
      "https://lh6.googleusercontent.com/proxy/mx8cm1OQMjBkSL1bjRQTO4HUsJ1YuEOUMrt9awaV089ZRqloUDnrHEMvNJh2umxJ31EaQLvDjA-4yCRUiZfn3KJh1x3oNmkzvv3m", // 새우튀김 이미지 URL
  },
  {
    id: 5,
    name: "전복죽",
    price: 18000,
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2022/06/29/f3a9b76d8b39ecdc73e746824e05c96c1.jpg", // 전복죽 이미지 URL
  },
];

const Detail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("menu");
  const { addToCart } = useCartStore();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <BackBtn />
      <TopImg />
      <InfoSection>
        <div>
          <h1>{dummy.title}</h1>
          <CategoryTag tag={dummy.tag} />
          <FaRegStar style={{ marginLeft: "auto" }} />
        </div>
        <div>
          <Count>{`즐겨찾기 ${dummy.favorite_count}개  |주문 ${dummy.order_count}회`}</Count>
        </div>
        <div>
          {dummy.container_tags.map((item, index) => (
            <MiniTag key={index} tag={item} />
          ))}
        </div>
      </InfoSection>

      <TabBar activeTab={activeTab} handleTabClick={handleTabClick} />
      {renderTabContent(activeTab, addToCart)}
      <BottomBtn id={id} text="담기" />
    </div>
  );
};

const TabBar = ({ activeTab, handleTabClick }) => {
  return (
    <TabBarContainer>
      <TabItem
        active={activeTab === "menu"}
        onClick={() => handleTabClick("menu")}
      >
        메뉴
      </TabItem>
      <TabItem
        active={activeTab === "info"}
        onClick={() => handleTabClick("info")}
      >
        정보
      </TabItem>
    </TabBarContainer>
  );
};

const renderTabContent = (activeTab, addToCart) => {
  switch (activeTab) {
    case "menu":
      return <MenuComponent addToCart={addToCart} />;
    case "info":
      return <div>정보 내용</div>;
    default:
      return null;
  }
};

const MenuComponent = ({ addToCart }) => {
  return (
    <MenuContainer>
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          id={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          addToCart={() => addToCart(item)}
        />
      ))}
    </MenuContainer>
  );
};

const TopImg = styled.div`
  width: 100%;
  height: 230px;
  background-image: url(${dummy.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const InfoSection = styled.section`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  h1 {
    font-size: 20px;
  }
`;

const Count = styled.span`
  font-size: 1rem;
`;

const TabBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
`;

const TabItem = styled.button`
  font-size: 1rem;
  color: ${(props) => (props.active ? "#DD017C" : "#333")};
  border-bottom: ${(props) => (props.active ? "3px solid #DD017C" : "none")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  background: none;
  border: none;
  padding: 18px 20px;
  cursor: pointer;

  &:hover {
    color: #9f005a;
  }
`;

const MenuContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 70px;
`;

export default Detail;
