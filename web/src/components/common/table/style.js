import { Collapse } from "antd";
import styled from "styled-components";

export const CollapseTable = styled(Collapse)`
  .panel-table .select {
    margin-bottom: 4px;
    width: 250px;
  }

  .panel-table .select .ant-select {
    width: 100%;
  }

  .add-row {
    text-align: right;
  }

  .add-row .button {
    margin-bottom: 16px;
  }

  .add-row .ant-divider {
    margin: 0;
  }
`;
