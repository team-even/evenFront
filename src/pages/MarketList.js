import React, { useState } from "react";
import styled from "styled-components";
import { TbArrowBack } from "react-icons/tb";
import MarketItem from "../components/MarketItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;
  box-sizing: border-box; /* padding을 포함하여 계산 */
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #F5F5F5;
  width: 390px; /* Container에 맞춤 */
  margin: 0 auto; /* 중앙 정렬 */
  padding: 15px 15px; /* 패딩 추가 */
`

const BackIcon = styled(TbArrowBack)`
  width: 30px;
  height: 30px;
  cursor: pointer; 
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #AEAEAE;
  border-radius: 5px;
  padding: 5px 15px;
  width: 90%;
  height: 50px;
  z-index: 1;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 5px 0 3px;
  border-radius: 5px;
  font-size: 16px;
`;

const TabBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 75px;
  left: 0;
  right: 0;
  z-index: 9;
  width: 390px; /* Container에 맞춤 */
  margin: 0 auto; /* 중앙 정렬 */
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

const TabContent = styled.div`
  padding: 0 20px;
  margin-top: 130px;
  text-align: center;
  width: 100%;
`;


const MarketList = () => {
  const [activeTab, setActiveTab] = useState("all"); // Initialize active tab state

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <Header>
        <BackIcon />
        <SearchForm>
          <SearchInput type="text" placeholder="매장명 검색" />
        </SearchForm>
      </Header>
      <TabBar activeTab={activeTab} handleTabClick={handleTabClick} />
      {renderTabContent(activeTab)} {/* Render content based on the active tab */}
    </Container>
  );
};

// Render content based on the active tab
const renderTabContent = (activeTab) => {
  switch (activeTab) {
    case "all":
      return (
        <TabContent>
          {Array(7).fill().map((_, index) => (
            <MarketItem key={index} />
          ))}
        </TabContent>
      );
    case "local":
      return (
        <TabContent>
          {Array(5).fill().map((_, index) => (
            <MarketItem key={index} />
          ))}
        </TabContent>
      );
    case "traditional":
      return (
        <TabContent>
          {Array(5).fill().map((_, index) => (
            <MarketItem key={index} />
          ))}
        </TabContent>
      );
    default:
      return null;
  }
};




const TabBar = ({ activeTab, handleTabClick }) => {
  return (
    <TabBarContainer>
      <TabItem active={activeTab === "all"} onClick={() => handleTabClick("all")}>
        전체
      </TabItem>
      <TabItem active={activeTab === "local"} onClick={() => handleTabClick("local")}>
        로컬음식
      </TabItem>
      <TabItem active={activeTab === "traditional"} onClick={() => handleTabClick("traditional")}>
        전통시장
      </TabItem>
    </TabBarContainer>
  );
};



export default MarketList;