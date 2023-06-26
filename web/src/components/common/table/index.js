import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { COMMON } from "../../../constants";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setDrawer } from "../../../redux/drawer/reducer";
import Layout from "./layout";

// // rowSelection object indicates the need for row selection
// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(
//       `selectedRowKeys: ${selectedRowKeys}`,
//       "selectedRows: ",
//       selectedRows
//     );
//   },
//   getCheckboxProps: (record) => ({
//     disabled: record.name === "Disabled User",
//     // Column configuration not to be checked
//     name: record.name,
//   }),
// };

const selectArrayType = [
  {
    label: "Select multi data",
    value: "checkbox",
  },
  {
    label: "Select one data",
    value: "radio",
  },
];

export default function TableComponent(props) {
  const {
    isSelectType = false,
    expandable = {},
    rowSelection = {},
    x = null,
    y = null,
    data = [],
    columns = [],
    isEditTable = false,
    removeKey = null,
    setRemoveKey,
    setDataSource,
    pagination = {},
    totalData = 0,
    isNotPagination = null,
    onChangePagination,
    headerTable = "Table",
    isCreate = false,
  } = props;
  console.log(isCreate);
  const dispatch = useDispatch();
  const [selectionType, setSelectionType] = useState("checkbox");
  const [count, setCount] = useState(0);
  const [paginationOption, setPaginationOption] = useState(
    COMMON.PAGINATION_OPTION
  );

  //custom data if table is edit row
  // useEffect(() => {
  //   let newData = [];
  //   if (isEditTable) {
  //     dataSource.forEach((el, i) => {
  //       console.log(1, el);
  //       newData.push({
  //         ...el,
  //         key: i + 1,
  //       });
  //     });
  //   } else newData = data;
  //   console.log(44444444444, newData);
  //   setDataSource(newData);
  //   setCount(newData.length);
  //   // eslint-disable-next-line
  // }, []);

  // useEffect(() => {
  //   if (form) {
  //     dataSource.map((el, i) => {
  //       [`${columnsLabel.name}-${el.key}`].getFieldValues();
  //     });
  //   }
  // }, []);

  //remove key if have and callback set data
  useEffect(() => {
    if (removeKey !== null) {
      const newData = data.filter((item) => item.key !== removeKey);
      setDataSource(newData);
      setCount(newData.length);
    }
    setRemoveKey(null);
    // eslint-disable-next-line
  }, [removeKey]);

  //setData Parent if have setNewDataSource
  // useEffect(() => {
  //   if (setNewDataSource) setNewDataSource(dataSource);
  // }, [setNewDataSource, dataSource]);

  //add row table
  const handleAdd = () => {
    const newData = {
      key: data[data.length - 1].key + 1,
    };
    setDataSource([...data, newData]);
    setCount(count + 1);
  };

  //get pagination option
  useEffect(() => {
    const array = [...paginationOption];
    if (totalData > 20) {
      array.push(totalData);
    }
    setPaginationOption(array);
    // eslint-disable-next-line
  }, []);

  //button create data
  const genExtra = () => (
    <Button
      type="text"
      icon={<PlusCircleOutlined />}
      onClick={() => dispatch(setDrawer(true))}
      style={{
        color: "blue",
      }}
    />
  );

  return (
    <Layout
      headerTable={headerTable}
      isCreate={isCreate}
      genExtra={genExtra}
      isSelectType={isSelectType}
      selectArrayType={selectArrayType}
      selectionType={selectionType}
      setSelectionType={setSelectionType}
      isEditTable={isEditTable}
      handleAdd={handleAdd}
      rowSelection={rowSelection}
      columns={columns}
      data={data}
      expandable={expandable}
      y={y}
      x={x}
      onChangePagination={onChangePagination}
      isNotPagination={isNotPagination}
      totalData={totalData}
      pagination={pagination}
      paginationOption={paginationOption}
    />
  );
}
