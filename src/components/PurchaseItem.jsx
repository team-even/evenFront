import React from "react";
import styled from "styled-components";
import { CategoryTag } from "../components/Tag";

export const PurchaseItem = ({
  storeImage,
  storeName,
  menuName,
  price,
  tag,
}) => {
  return (
    <ItemContainer>
      <Wrapper>
        <span>2024. 11. 02</span>
        <CategoryTag tag={tag} size="mini" />
      </Wrapper>
      <Wrapper>
        <Image src={storeImage} alt={storeName} />
        <TextContainer>
          <h2>{storeName}</h2>
          <Menu>{menuName}</Menu>
          <Price>{price.toLocaleString()} 원</Price>
        </TextContainer>
      </Wrapper>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  &:hover {
    background-color: #e8e8e8;
    transition: 0.2s ease-in-out;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    color: #818181;
    font-size: 14px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  h2 {
    font-weight: 700;
    /* margin-bottom: 5px; */
    font-size: 18px;
  }
`;

const Menu = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #000000;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #000000;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;

export default PurchaseItem;
