import { Collapse } from "antd";
import styled from "styled-components";

export const CollapseContainer = styled(Collapse)`
  width: 100%;
  background-color: unset;
  border: none;
  border-radius: unset;
  margin-bottom: 24px;
  .ant-collapse-header {
    min-height: 28px;
    padding: 4px !important;
  }

  .ant-collapse-item {
    border-radius: unset !important;
    border-bottom: unset;
  }
  .ant-collapse-expand-icon {
    color: #405cab !important;
    font-weight: 900;
  }
  .ant-collapse-content-box {
    padding: 15px 30px;
  }
  .filter-action {
    display: flex;
    justify-content: end;
    align-items: end;
  }
`;

export const FilterText = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  > span {
    margin-right: 10px;
  }
`;
