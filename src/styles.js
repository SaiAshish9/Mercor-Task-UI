import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  font-family: Inter, sans-serif !important;

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #5146e2 !important; /* your color */
    border-color: #5146e2 !important;
  } 
`;
