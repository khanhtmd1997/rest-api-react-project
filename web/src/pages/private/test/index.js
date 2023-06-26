import { Button, Form } from "antd";
import TestTemplate from "../../../template/private/test";
import { Fragment, useCallback, useEffect, useState } from "react";
import { COMMON } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../../../redux/drawer/reducer";
import DrawerComponent from "../../../components/common/drawer";
import { confirmChangeData, handlePagination } from "../../../ultis/function";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import CreateEditFormDrawer from "../../../template/private/test/modal";
import { commonSelector } from "../../../redux/common/reducer";
import ModalConfirmComponent from "../../../components/common/modalConfirm";

// const dataWithEdit = [
//   {
//     key: 1,
//     [`name-1`]: "Mike",
//     [`age-1`]: 32,
//     [`address-1`]: "10 Downing Street",
//   },
//   {
//     key: 2,
//     [`name-2`]: "John",
//     [`age-2`]: 42,
//     [`address-2`]: "10 Downing Street",
//   },
// ];

const data = [
  {
    key: 1,
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: 2,
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const arrayButton = [
  {
    key: "clear",
    isSubmit: false,
    type: "default",
    bgColor: "",
    color: "",
    text: "Clear",
  },
  {
    key: "search",
    isSubmit: true,
    type: "primary",
    bgColor: "",
    color: "",
    text: "Search",
  },
  {
    key: "download",
    isSubmit: true,
    type: "primary",
    bgColor: "",
    color: "",
    text: "Download",
  },
];

export default function TestPages() {
  const dispatch = useDispatch();
  //==============================
  //form state search
  const [form] = Form.useForm();
  const [filterData, setFilterData] = useState({
    pageIndex: COMMON.PAGINATION_INDEX,
    pageSize: COMMON.PAGINATION_SIZE,
  });
  const [step, setStep] = useState(COMMON.BUTTON_KEYSEARCH);
  const [isDownload, setIsDownload] = useState(false);
  //end state form search
  //==============================

  //==============================
  //state table
  const [form1] = Form.useForm();
  const [dataSource, setDataSource] = useState(data);
  const [totalData] = useState(0);
  const [removeKey, setRemoveKey] = useState(null);

  //end state table
  //==============================

  //==============================
  //state detail drawer
  const [form2] = Form.useForm();
  const [detail, setDetail] = useState({});
  const { isChangeData } = useSelector(commonSelector);
  // const [initDataForm, setInitDataForm] = useState(null);
  //end detail drawer
  //==============================

  //call api search
  useEffect(() => {
    if (step === COMMON.BUTTON_KEYSEARCH) {
      console.log("call api search", filterData);
    }
  }, [step, filterData]);
  //end call api search
  console.log(isDownload, step);
  //call api download
  useEffect(() => {
    if (isDownload) {
      console.log("call api download");
      setIsDownload(false);
    }
  }, [isDownload]);
  //end call api download

  //==============================
  //filter form
  //set download
  const handleSetDownload = useCallback(() => {
    if (step === COMMON.BUTTON_KEYDOWNLOAD) {
      setIsDownload(true);
    } else setIsDownload(false);
  }, [step]);

  //search form
  const handleSearchForm = useCallback(
    (values) => {
      setFilterData((old) => ({
        ...old,
        ...values,
      }));
      handleSetDownload();
    },
    [handleSetDownload]
  );

  //clear form
  const clearFilter = () => {
    setFilterData({
      pageIndex: COMMON.PAGINATION_INDEX,
      pageSize: COMMON.PAGINATION_SIZE,
    });
  };
  //end filter form
  //==============================

  //==============================
  //table

  // //columnsWithEdit
  // const columns = [
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     key: "name",
  //     sorter: true,
  //     render: (_, row) => (
  //       <Form.Item name={`name-${row.key}`}>
  //         <InputComponent
  //           onChange={(e) => handleChangeInput(e.target.value, `name`, row)}
  //         />
  //       </Form.Item>
  //     ),
  //     width: "35%",
  //   },
  //   {
  //     title: "Age",
  //     dataIndex: "age",
  //     key: "age",
  //     render: (_, row) => (
  //       <Form.Item name={`age-${row.key}`}>
  //         <InputComponent
  //           type="number"
  //           onChange={(value) => handleChangeInput(value, `age`, row)}
  //         />
  //       </Form.Item>
  //     ),
  //     width: "15%",
  //   },
  //   {
  //     title: "Address",
  //     dataIndex: "address",
  //     key: "address",
  //     render: (_, row) => (
  //       <Form.Item name={`address-${row.key}`}>
  //         <InputComponent
  //           onChange={(e) => handleChangeInput(e.target.value, `address`, row)}
  //         />
  //       </Form.Item>
  //     ),
  //     width: "35%",
  //   },
  //   {
  //     title: "Action",
  //     dataIndex: "",
  //     key: "",
  //     render: (row) => (
  //       <Fragment>
  //         <Button
  //           type="text"
  //           icon={<EditOutlined />}
  //           onClick={() => handleOpenDrawer(row)}
  //         />
  //         <Button
  //           type="text"
  //           icon={<DeleteOutlined />}
  //           danger
  //           onClick={() => setRemoveKey(row.key)}
  //         />
  //       </Fragment>
  //     ),
  //     width: "15%",
  //   },
  // ];
  // //end columnsWithEdit

  //columnsWithEdit
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: true,
      render: (text) => <div className="table-column-left">{text}</div>,
      width: "35%",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      render: (text) => <div className="table-column-right">{text}</div>,
      width: "15%",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (text) => <div className="table-column-left">{text}</div>,
      width: "35%",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "",
      render: (row) => (
        <div className="table-column-center">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => handleOpenDrawer(row)}
          />
          {/* button remove key edit table */}
          {/* <Button
            type="text"
            icon={<DeleteOutlined />}
            danger
            onClick={() => setRemoveKey(row.key)}
          /> */}
          {/* button remove key edit table */}
          {/* button remove data table */}
          <ModalConfirmComponent
            // type="text"
            isNotTextBtn
            danger
            buttonIcon={<DeleteOutlined />}
            onOk={() => handleDeleteData(row.key)}
          />
          {/* button remove data table  */}
        </div>
      ),
      width: "15%",
    },
  ];
  //end columnsWithEdit

  //set form table
  // useEffect(() => {
  //   dataSource.forEach((el) => {
  //     form1.setFieldsValue({
  //       [`name-${el.key}`]: el[`name-${el.key}`],
  //       [`age-${el.key}`]: el[`age-${el.key}`],
  //       [`address-${el.key}`]: el[`address-${el.key}`],
  //     });
  //   });
  // }, [dataSource, form1]);
  //end set form table

  //change pagination table
  const onChangePagination = (paging, filters, sorter) => {
    handlePagination(paging, sorter, setFilterData);
  };
  //end change pagination table

  //set value for data table
  // const setDataAfterChangeInput = useCallback(
  //   (name, value) => {
  //     let array = [];
  //     dataSource.forEach((el) => {
  //       array.push({
  //         ...el,
  //         [`${name}`]: value,
  //       });
  //     });
  //     setDataSource(array);
  //   },
  //   [dataSource]
  // );
  //end set value for data table

  //change input form table
  // const handleChangeInput = useCallback(
  //   (value, name, row) => {
  //     switch (name) {
  //       case "name":
  //         form1.setFieldsValue({
  //           [`name-${row.key}`]: value,
  //         });
  //         setDataAfterChangeInput(`name-${row.key}`, value);
  //         break;
  //       case "age":
  //         form1.setFieldsValue({
  //           [`age-${row.key}`]: value,
  //         });
  //         setDataAfterChangeInput(`age-${row.key}`, value);
  //         break;

  //       default:
  //         form1.setFieldsValue({
  //           [`address-${row.key}`]: value,
  //         });
  //         setDataAfterChangeInput(`address-${row.key}`, value);
  //         break;
  //     }
  //   },
  //   [form1, setDataAfterChangeInput]
  // );
  //end change input form table

  // rowSelection object indicates the need for row selection
  // const rowSelection = {
  //   onChange: (selectedRowKeys, selectedRows) => {
  //     console.log(
  //       `selectedRowKeys: ${selectedRowKeys}`,
  //       "selectedRows: ",
  //       selectedRows
  //     );
  //   },
  //   // getCheckboxProps: (record) => ({
  //   //   disabled: record.name === "Disabled User",
  //   //   // Column configuration not to be checked
  //   //   name: record.name,
  //   // }),
  // };

  //end rowSelection object indicates the need for row selection

  //end table
  //==============================

  //==============================
  //xử lý detail popup

  //
  const handleOpenDrawer = (data) => {
    if (data && data.key) {
      setDetail(data);
      form2.setFieldsValue({ ...data });
    } else setDetail({});
    dispatch(setDrawer(true));
  };
  // console.log(11111, initDataForm);
  //

  //
  const handleCreateEditForm = (values) => {
    // if (isEqual(values, initDataForm)) {
    //   console.log(1);
    //   dispatch(setChangedData(false));
    // }
    // dispatch(setChangedData(true));
  };
  //

  //
  const handleDeleteData = (id) => {
    console.log("call api delete", id);
  };
  //

  //
  const handleClose = () => {
    confirmChangeData(isChangeData, dispatch);
  };
  //

  //end xử lý detail popup
  //==============================

  return (
    <Fragment>
      <DrawerComponent
        title={"Edit Test"}
        template={
          <TestTemplate
            form={form}
            form1={form1}
            handleSearchForm={handleSearchForm}
            filterData={filterData}
            totalData={totalData}
            formLayout={"vertical"}
            arrayButton={arrayButton}
            setStep={setStep}
            clearFilter={clearFilter}
            colButton={12}
            rowSelection={null}
            dataSource={dataSource}
            columns={columns}
            removeKey={removeKey}
            setRemoveKey={setRemoveKey}
            setDataSource={setDataSource}
            onChangePagination={onChangePagination}
            isCreate
          />
        }
      >
        <CreateEditFormDrawer
          data={detail}
          form={form2}
          handleCreateEditForm={handleCreateEditForm}
          handleClose={handleClose}
        />
      </DrawerComponent>
    </Fragment>
  );
}
