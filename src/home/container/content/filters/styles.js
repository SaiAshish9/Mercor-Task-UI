import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  .ant-select-dropdown
    .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: #e6ffe6 !important;
    color: #000 !important;
  }
`;

export const ShortlistedBtn = styled.div``;
