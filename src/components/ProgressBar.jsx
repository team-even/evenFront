import React from "react";
import styled from "styled-components";

const ProgressBar = ({
  currentStatus,
  statuses = ["대기중", "조리중", "완료"],
}) => {
  return (
    <ProgressContainer>
      <Line />
      {statuses.map((status) => (
        <StatusContainer key={status}>
          <Circle isActive={currentStatus === status} aria-label={status} />
          <StatusText isActive={currentStatus === status}>{status}</StatusText>
        </StatusContainer>
      ))}
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
  position: relative;
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Circle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? "#DD017C" : "#E0E0E0")};
  position: relative;
  z-index: 1;
  transition: background-color 0.3s;
`;

const Line = styled.div`
  height: 3px;
  width: calc(100% - 20px);
  background-color: #ccc;
  position: absolute;
  top: 14px;
  left: 10px;
  z-index: 0;
`;

const StatusText = styled.span`
  margin-top: 6px;
  color: ${({ isActive }) => (isActive ? "#DD017C" : "#333")};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
`;

export default ProgressBar;
