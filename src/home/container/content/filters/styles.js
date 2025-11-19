import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  .ant-select-dropdown {
    box-shadow: none !important;
    &:active,
    &:focus,
    &:focus-within {
      box-shadow: none !important;
      border: none !important;
    }
  }
  .ant-select-dropdown
    .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: #e6ffe6 !important;
    color: #000 !important;
  }
  .ant-select-item
    ant-select-item-option
    ant-select-item-option-active
    ant-select-item-option-selected {
    background-color: #fff !important;
  }
`;

export const ShortlistedBtn = styled.div`
  border: 1.5px solid #5146e2;
  width: 200px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  font-weight: 400;
  background-color: ${({ shortlisted }) =>
    shortlisted === 0 ? "white" : "#5146e2"};
  color: ${({ shortlisted }) => (shortlisted === 0 ? "#5146e2 " : "#fff")};
  cursor: pointer;
`;
