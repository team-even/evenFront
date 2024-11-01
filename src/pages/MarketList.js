import React, { useState } from "react";
import styled from "styled-components";
import { TbArrowBack } from "react-icons/tb";
import MarketItem from "../components/MarketItem";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";

// 더미 마켓 데이터 생성
const generateDummyMarketData = (count) => {
  const marketNames = [
    "아빠횟집",
    "부산돼지국밥",
    "녹색 한우마을",
    "전통 수제과자점",
    "눈물나게 매운 떡볶이",
    "부경백반",
    "이븐한 스테이크",
  ];

  // 더미 이미지 배열 (시장 수와 일치하도록 맞추어야 함)
  const marketImages = [
    "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA1MDhfNDAg%2FMDAxNzE1MTU4NzY2Nzk0.HMLfO3hHbG4b8-BkV9VmnCZqHbAm88Cxx3IzL84Xt9Yg.J3ak6ooe1cssxvT4W-TyWH_QMRq3uri8duCUnN5HbQQg.JPEG%2FIMG_6701.JPG&type=sc960_832", // 아빠횟집
    "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MjdfMTMz%2FMDAxNzI0NzUwNzIwOTgy.Dd-baZT_RQXwmGyNCIWsTTgIPX0FIca55GHoRkLFA_Ug.M8_7LBvxVAcKX99um3spD1j2dyBp25YQtZcFgAxHQ0og.JPEG%2FIMG_9404.jpg&type=sc960_832", // 부산돼지국밥
    "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MTdfMjQ1%2FMDAxNzIzODU0Njg3NDU5.bhxxm3TGPCxu9MJWeHqWXa90rZKnk4lluCa7VE1FP4Eg.hu0LVpFhf_5pZ6gMEyvCg8DCkzElE8N6TE370ZX4yIQg.JPEG%2FScreenshot%25A3%25DF20240817%25A3%25DF092831%25A3%25DFNAVER.jpg&type=sc960_832", // 녹색 한우마을
    "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMDVfMjQ1%2FMDAxNjE0OTI4MTM3NTAx.jRx697KzP0Le31bz0aqHW-f6MEamRgl1FhhkhAXExnIg.b7uvkasOdNk6Y-EGoJW8gaJ8Lz5sZuDDV03oJ4fvmi0g.JPEG.mallangcake%2FIMG_2277.jpg&type=sc960_832", // 전통 수제과자점
    "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20240324_108%2F17112620224632ittc_JPEG%2F112397806172732111_1730997023.JPG&type=sc960_832", // 눈물나게 매운 떡볶이
    "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAzMjVfNzEg%2FMDAxNzExMzc0MjUyMTEx.7A0xQ-TztyFayYki4pNgfllPQ_4QJNPWkQm4RbYaVb4g.MTWWKSVyjy0lRMxHZZXwG4g5Rr46IqOaQKJQZLVqzvAg.JPEG%2Foutput_2318168218.jpg&type=sc960_832", // 부경백반
    "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220713_173%2F16576817043000Ks2I_JPEG%2F58817538072243702_765385740.jpg&type=sc960_832", // 이븐한 스테이크
  ];

  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: marketNames[index],
    tag: index % 2 === 0 ? "지참" : "제공", // 예시로 태그를 번갈아 가며 설정
    distance: Math.floor(Math.random() * 100) + "m", // 0m ~ 99m
    image: marketImages[index], // 이미지 추가
  }));
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;
  box-sizing: border-box;
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
  background-color: #f5f5f5;
  width: 390px;
  margin: 0 auto;
  padding: 15px 15px;
`;

const BackIcon = styled(TbArrowBack)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #aeaeae;
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
  width: 390px;
  margin: 0 auto;
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
  margin-bottom: 70px;
`;

const MarketList = () => {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();
  const dummyMarketData = generateDummyMarketData(7); // 더미 데이터 생성

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Header>
        <BackIcon onClick={handleBackClick} />
        <SearchForm>
          <SearchInput type="text" placeholder="매장명 검색" />
        </SearchForm>
      </Header>
      <TabBar activeTab={activeTab} handleTabClick={handleTabClick} />
      {renderTabContent(activeTab, dummyMarketData)} {/* 더미 데이터를 전달 */}
      <NavigationBar />
    </Container>
  );
};

// activeTab에 따라 다른 컨텐츠를 렌더링하는 함수
const renderTabContent = (activeTab, marketData) => {
  const filteredData =
    activeTab === "all"
      ? marketData
      : marketData.filter((item) => {
          // 'local' 또는 'traditional'에 따라 필터링하는 로직 추가 가능
          // 여기서는 예시로 간단히 return true
          return true;
        });

  return (
    <TabContent>
      {filteredData.map((item) => (
        <MarketItem
          key={item.id}
          id={item.id}
          name={item.name}
          tag={item.tag}
          distance={item.distance}
          image={item.image} // 이미지 추가
        />
      ))}
    </TabContent>
  );
};

const TabBar = ({ activeTab, handleTabClick }) => {
  return (
    <TabBarContainer>
      <TabItem
        active={activeTab === "all"}
        onClick={() => handleTabClick("all")}
      >
        전체
      </TabItem>
      <TabItem
        active={activeTab === "local"}
        onClick={() => handleTabClick("local")}
      >
        로컬음식
      </TabItem>
      <TabItem
        active={activeTab === "traditional"}
        onClick={() => handleTabClick("traditional")}
      >
        전통시장
      </TabItem>
    </TabBarContainer>
  );
};

export default MarketList;
