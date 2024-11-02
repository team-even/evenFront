import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../stores/cartStore";
import styled from "styled-components";
import BackBtn from "../components/BackBtn";
import { BottomBtn } from "../components/BottomBtn";

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, clearCart } =
    useCartStore();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + (item.discountedPrice || item.price * 0.9) * (item.quantity || 1),
    0
  );

  const handleBack = () => {
    clearCart();
    navigate(-1);
  };

  return (
    <div style={{ margin: "70px 0" }}>
      <BackBtn onClick={handleBack} />
      <h2 style={{ marginLeft: "20px", marginBottom: "20px" }}>구매 목록</h2>
      {cartItems.length === 0 ? (
        <p>비어 있습니다.</p>
      ) : (
        <ItemList>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <img src={item.image} alt={item.name} />
              <ItemInfo>
                <h3>{item.name}</h3>
                <Price>
                  {item.discountedPrice
                    ? `${item.discountedPrice.toLocaleString()}원 (할인)`
                    : `${(item.price * 0.9).toLocaleString()}원 (10% 할인)`}
                </Price>
              </ItemInfo>
              <QuantityControls>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity || 1}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </QuantityControls>
            </CartItem>
          ))}
        </ItemList>
      )}
      <TotalPrice>총 가격: {totalPrice.toLocaleString()}원</TotalPrice>
      <BottomBtn text="결제하기" cartItemCount={cartItems.length} />
    </div>
  );
};

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 20px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  gap: 10px;

  img {
    width: 70px;
    height: 70px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;

  h3 {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
  }
`;

const Price = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #828282;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    background-color: #ddd;
    border: none;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    font-size: 16px;
    font-weight: 700;
    color: #333;
    cursor: pointer;

    &:hover {
      background-color: #ccc;
    }
  }

  span {
    font-size: 16px;
    font-weight: 700;
  }
`;

const TotalPrice = styled.h2`
  margin-top: 20px;
  text-align: right;
  color: #333;
`;

export default Cart;
