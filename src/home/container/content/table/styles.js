import styled from "styled-components";
import { Table } from "antd";

export const Container = styled.div`
  margin-top: 2.5rem;
`;

export const StyledTableContainer = styled(Table)`
  li {
    border: none !important;
  }
  :where(.css-dev-only-do-not-override-1rocbtd).ant-pagination
    .ant-pagination-item-active
    a {
    color: #5146e2 !important;
  }
  th {
    &::before {
      background-color: transparent !important;
    }
  }
  .ant-table-thead > tr > th {
    background-color: #fff;
  }
  .ant-table-wrapper.ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(
      .ant-table-row-expand-icon-cell
    ):not([colspan])::before {
    background-color: transparent;
  }
  .ant-select-dropdown
    .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: #fff !important;
  }
`;
