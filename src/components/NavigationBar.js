import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.nav`
  position: fixed; /* Fixed position to keep it at the bottom */
  bottom: 0; /* Align it to the bottom */
  left: 50%;
  transform: translateX(-50%); /* Center it horizontally */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 20px; */
  width: 393px;
  height: 65px;
  background-color: #ffffff;
  z-index: 100;
`;

const NavLink = styled(Link)`
  display: flex; /* Added flex to center the icons vertically */
  justify-content: center;
  align-items: center;
  flex-grow: 1; /* Make the links grow evenly */
`;

const Icon = styled.img`
  width: 32px;
`;

function NavigationBar() {
  return (
    <NavBar>
      <NavLink to="/home">
        <Icon src={require("../assets/ic_home.png")} alt="홈" />
      </NavLink>
      <NavLink to="/purchaseStatus">
        <Icon
          src={require("../assets/ic_purchase_status.png")}
          alt="구매현황"
        />
      </NavLink>
      <NavLink to="/ranking">
        <Icon src={require("../assets/ic_ranking.png")} alt="랭킹" />
      </NavLink>
      <NavLink to="/mypage">
        <Icon src={require("../assets/ic_mypage.png")} alt="마이페이지" />
      </NavLink>
    </NavBar>
  );
}

export default NavigationBar;
