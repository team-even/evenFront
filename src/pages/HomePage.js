import React, { useEffect } from 'react';
import { NaverMap, Marker, useNavermaps, NavermapsProvider } from 'react-naver-maps';
import NaverMapContainer from '../components/NaverMapsProvider';
import styled from 'styled-components';
import NavigationBar from '../components/NavigationBar';
import { SlMenu } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchForm = styled.form`
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  padding: 5px 15px 3px;
  border-radius: 5px;
  font-size: 16px;
`;

const MenuIcon = styled(SlMenu)`
  cursor: pointer; 
`;

function HomePage() {
  const navigate = useNavigate();

  // 데이터 요청을 위한 useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://692d-14-44-120-102.ngrok-free.app/orders?memberId=1', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '69420',
            // 필요한 경우 다른 헤더 추가
          },
          mode: 'cors' // CORS 모드 설정
        });

        // CORS를 우회하기 위한 JSONP 접근
        if (response.ok) {
          const data = await response.json();
          console.log('서버로부터 받은 데이터:', data); // 서버로부터 받은 데이터 출력
        } else {
          throw new Error('네트워크 응답이 올바르지 않습니다.');
        }
      } catch (error) {
        console.error('데이터 요청 중 오류 발생:', error); // 에러 핸들링
      }
    };

    fetchData();
  }, []); // 빈 배열을 넣어 컴포넌트가 처음 마운트될 때만 실행

  const handleMenuClick = () => {
    navigate('/market-list'); 
  };

  return (
    <>
      <NavermapsProvider ncpClientId='v5l0zfx77a'>
        <NaverMapContainer />
        <SearchForm>
          <MenuIcon onClick={handleMenuClick} />
          <SearchInput type="text" placeholder="매장명 검색" />
        </SearchForm>
        <NavigationBar />
      </NavermapsProvider>
    </>
  );
}

export default HomePage;