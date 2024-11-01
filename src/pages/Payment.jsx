import React, { useState } from "react";
import styled from "styled-components";

const Payment = () => {
  const [useAmount, setUseAmount] = useState(3100);

  const totalPayment = 31000;
  const availableMoney = 5055;
  const discount = 500;
  const pointsEarned = 30;

  return (
    <Container>
      <Title>결제하기</Title>

      <Section>
        <Subtitle>결제 상세</Subtitle>
        <DetailRow>
          <span>총 결제 금액</span>
          <span>{totalPayment.toLocaleString()}원</span>
        </DetailRow>
      </Section>

      <Section>
        <Subtitle>보유</Subtitle>
        <MoneyContainer>
          <MoneyRow>
            <span>포인트</span>
            <span>0원</span>
          </MoneyRow>
          <MoneyRow>
            <span>머니</span>
            <span>{availableMoney.toLocaleString()}원</span>
          </MoneyRow>
          <UseAmountContainer>
            <Input
              type="text"
              value={`${useAmount.toLocaleString()}원`}
              readOnly
            />
            <ButtonsContainer>
              <Button>전액사용</Button>
              <ClearButton onClick={() => setUseAmount(0)}>X</ClearButton>
            </ButtonsContainer>
          </UseAmountContainer>
        </MoneyContainer>
        <AlwaysUseContainer>
          <input type="checkbox" id="alwaysUse" />
          <label htmlFor="alwaysUse">항상 전액사용</label>
        </AlwaysUseContainer>
      </Section>

      <Section>
        <Subtitle>포인트 혜택</Subtitle>
        <DetailRow>
          <span>다회용기 할인</span>
          <span>{discount.toLocaleString()}원</span>
        </DetailRow>
        <DetailRow>
          <span>부산 로컬 음식 포인트 적립</span>
          <span>{pointsEarned.toLocaleString()}원</span>
        </DetailRow>
      </Section>

      <PaymentButton>결제하기</PaymentButton>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  font-size: 16px;
`;

const MoneyContainer = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const MoneyRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const UseAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100px;
  font-size: 16px;
  text-align: center;
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Button = styled.button`
  background-color: #ddd;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
`;

const ClearButton = styled(Button)`
  color: red;
`;

const AlwaysUseContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  label {
    font-size: 14px;
    margin-left: 5px;
  }
`;

const PaymentButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 18px;
  background-color: #eee;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-weight: bold;
  color: #333;

  &:hover {
    background-color: #ddd;
  }
`;

export default Payment;
