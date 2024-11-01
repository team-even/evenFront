import React, { useState } from "react";
import styled from "styled-components";
import addCart from "../assets/add_cart.svg";
import deleteCart from "../assets/delete_cart.svg";

export const MenuItem = ({ id, name, price, image }) => {
  const [isInCart, setIsInCart] = useState(false);
  const discountPrice = price * 0.9;

  const handleToggleCart = () => {
    setIsInCart((prev) => !prev);
  };

  return (
    <ItemContainer>
      <Image src={image} alt={name} />
      <TextContainer>
        <h2>{name}</h2>
        <div>
          <Price>{price.toLocaleString()}</Price>
          <Discount>{discountPrice.toLocaleString()}</Discount>
          <Rate>10%</Rate>
        </div>
      </TextContainer>
      <AddBtn onClick={handleToggleCart}>
        <img
          src={isInCart ? deleteCart : addCart}
          alt={isInCart ? "Remove from cart" : "Add to cart"}
        />
      </AddBtn>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  gap: 10px;
  &:hover {
    background-color: #e8e8e8;
    transition: 0.2s ease-in-out;
  }
`;

const TextContainer = styled.div`
  gap: 10px;
  h2 {
    font-weight: 400;
    margin-bottom: 10px;
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

const AddBtn = styled.button`
  margin-left: auto;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #cccccc;
  align-items: center;
  justify-content: center;
  padding: 8px 5px 4px 6px;
  z-index: 3;
  img {
    width: 20px;
    height: 20px;
  }
  &:hover {
    border: 1px solid #dd017c;
    transition: 0.2s ease-in-out;
  }
`;

export default MenuItem;
