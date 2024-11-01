import React, { useEffect } from 'react';
import { NaverMap, Marker, useNavermaps, NavermapsProvider } from 'react-naver-maps';
import NaverMapContainer from '../components/NaverMapsProvider';
import styled from 'styled-components';
import NavigationBar from '../components/NavigationBar';

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
  padding: 5px 10px;
  width: 90%;
  height: 50px;
  z-index: 1;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
`;

function HomePage() {
  return (
    <>
      <NavermapsProvider ncpClientId='v5l0zfx77a'>
        <NaverMapContainer />
        <SearchForm>
          <SearchInput type="text" placeholder="매장명 검색" />
        </SearchForm>
        <NavigationBar />
      </NavermapsProvider>
    </>
  );
}

export default HomePage;