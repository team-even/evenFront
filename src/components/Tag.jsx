import React from "react";
import styled from "styled-components";

export const CategoryTag = ({ tag, size }) => {
  const tagColor = getTagColor(tag);
  const isMini = size === "mini";

  return (
    <TagContainer color={tagColor} isMini={isMini}>
      <p>{tag}</p>
    </TagContainer>
  );
};

export const MiniTag = ({ tag }) => {
  const tagColor = getMiniTagColor(tag);

  return (
    <MiniTagContainer color={tagColor}>
      <p>{tag}</p>
    </MiniTagContainer>
  );
};

// 태그에 따른 배경색 설정
const getTagColor = (tag) => {
  switch (tag) {
    case "부산 로컬 음식":
      return "#dd017c"; // 부산 로컬 음식
    case "비건 식당":
      return "#40A709"; // 비건 식당
    case "전통 시장":
      return "#2574BE"; // 전통 시장
    default:
      return "#cccccc"; // 기본 색상
  }
};

const getMiniTagColor = (tag) => {
  switch (tag) {
    case "다회용기 제공":
    case "다회용기 지참":
      return "#cacaca"; // 기본 색상
    default:
      return "#cccccc"; // 기본 색상
  }
};

const TagContainer = styled.div`
  background-color: ${({ color }) => color};
  width: fit-content;
  padding: ${({ isMini }) =>
    isMini ? "4px 6px" : "8px 10px"}; // mini일 경우 더 작은 패딩
  border-radius: ${({ isMini }) =>
    isMini ? "10px" : "20px"}; // mini일 경우 더 작은 border-radius
  p {
    color: white;
    font-size: ${({ isMini }) =>
      isMini ? "12px" : "14px"}; // mini일 경우 더 작은 글자 크기
  }
`;

const MiniTagContainer = styled.div`
  background-color: ${({ color }) => color};
  width: fit-content;
  padding: 8px 10px;
  border-radius: 10px;
  p {
    color: #000000;
    font-size: 14px;
  }
`;
