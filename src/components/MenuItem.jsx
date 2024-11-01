import React from "react";
import styled from "styled-components";

export const MenuItem = ({ name, price, image }) => {
  const discountPrice = price * 0.1; // 할인
  return (
    <ItemContainer>
      <TextContainer>
        <h2>{name}</h2>
        <div>
          <Price>{price.toLocaleString()}</Price>
          <Discount>{discountPrice.toLocaleString()}</Discount>
          <Rate>10%</Rate>
        </div>
      </TextContainer>
      <Image src={image} alt={name} />
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  background-color: white;
  border-radius: 20px;
  padding: 20px;
`;

const TextContainer = styled.div`
  /* flex: 1; */
  gap: 10px;
  h2{
    font-weight: 400;
    margin-bottom: 10px;
  }
  div {
    font-weight: 400;
    font-size: 20px;
  }
  div {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }
`;

const Price = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #828282;
  text-decoration: line-through;
`;

const Discount = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;
const Rate = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #ff0000;
`;
const Image = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 10px;
`;

export default MenuItem;
