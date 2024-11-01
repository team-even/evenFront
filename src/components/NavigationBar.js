import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.nav`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 35px;
  width: 100%;
  height: 65px;
  background-color: #ffffff;
`

const NavLink = styled(Link)`

`

const Icon = styled.img`
  width: 32px;
`

function NavigationBar() {
  return (
    <NavBar>
      <NavLink to="/">
        <Icon src={require('../assets/ic_home.png')} alt="홈" />
      </NavLink>
      <NavLink to="/purchaseStatus">
        <Icon src={require('../assets/ic_purchase_status.png')} alt="구매현황" /> 
      </NavLink>
      <NavLink to="/ranking">
        <Icon src={require('../assets/ic_ranking.png')} alt="랭킹" /> 
      </NavLink>
      <NavLink to="/mypage">
        <Icon src={require('../assets/ic_mypage.png')} alt="마이페이지" /> 
      </NavLink>
    </NavBar>
  )
}

export default NavigationBar;