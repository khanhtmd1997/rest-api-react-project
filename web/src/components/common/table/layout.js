import { Collapse, Divider, Table, Button } from "antd";
import SelectComponent from "../select";
import { COMMON } from "../../../constants";
import { CollapseTable } from "./style";
import { PlusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

export default function Layout(props) {
  const {
    headerTable,
    isCreate,
    genExtra,
    isSelectType,
    selectArrayType,
    selectionType,
    setSelectionType,
    isEditTable,
    handleAdd,
    rowSelection,
    columns,
    data,
    expandable,
    y,
    x,
    onChangePagination,
    isNotPagination,
    totalData,
    pagination,
    paginationOption,
  } = props;
  return (
    <CollapseTable defaultActiveKey={["1"]}>
      <Panel
        key={"1"}
        header={headerTable}
        extra={isCreate ? genExtra() : null}
      >
        <div className="panel-table">
          {isSelectType ? (
            <div className="select">
              <SelectComponent
                data={selectArrayType}
                defaultValue={selectionType}
                setValue={setSelectionType}
              />
            </div>
          ) : null}

          <div
            className="add-row"
            style={{
              display: isEditTable ? "block" : "none",
            }}
          >
            <Button onClick={handleAdd} type="primary" className="button">
              <PlusOutlined />
            </Button>
            <Divider />
          </div>

          <Table
            rowSelection={
              rowSelection
                ? selectionType
                  ? {
                      ...rowSelection,
                      type: selectionType,
                    }
                  : rowSelection
                : null
            }
            columns={columns}
            dataSource={data}
            expandable={expandable}
            // components={components}
            scroll={{
              y: y,
              x: x,
            }}
            onChange={onChangePagination}
            pagination={
              isNotPagination
                ? null
                : {
                    total: totalData,
                    showTotal: (total) => `Have ${total} record`,
                    defaultPageSize: COMMON.PAGINATION_INDEX,
                    defaultCurrent: COMMON.PAGINATION_SIZE,
                    current: parseInt(
                      pagination?.pageIndex ?? COMMON.PAGINATION_INDEX
                    ),
                    pageSize: parseInt(
                      pagination?.pageSize ?? COMMON.PAGINATION_SIZE
                    ),
                    showSizeChanger: true,
                    pageSizeOptions: paginationOption,
                  }
            }
          />
        </div>
      </Panel>
    </CollapseTable>
  );
}
