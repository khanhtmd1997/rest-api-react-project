import { WarningOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { setDrawer } from "../redux/drawer/reducer";
import { setChangedData } from "../redux/common/reducer";

export function handlePagination(paging, sorter, setFilterData) {
  let sortKey = "orderBy";
  let currentKey = "orderByDesc";
  if (sorter.order === "descend") {
    sortKey = "orderByDesc";
    currentKey = "orderBy";
  } else {
    sortKey = "orderBy";
    currentKey = "orderByDesc";
  }
  setFilterData((oldState) => ({
    ...oldState,
    pageIndex: paging.current,
    pageSize: paging.pageSize,
    [sortKey]: sorter.order ? sorter.field : undefined,
    [currentKey]: undefined,
  }));
}

export function confirmChangeData(
  isChangeData,
  dispatch,
  navigate,
  keyMenu,
  setCurrent
) {
  if (isChangeData) {
    Modal.confirm({
      title: "Confirm",
      icon: <WarningOutlined />,
      content: "Data is change. You sure close it?",
      okText: "Yes",
      cancelText: "Close",
      onOk: () => {
        dispatch(setDrawer(false));
        dispatch(setChangedData(false));
        if (keyMenu) {
          navigate(keyMenu);
          setCurrent(keyMenu);
        }
        return null;
      },
      onCancel: () => {},
    });
  } else {
    dispatch(setDrawer(false));
    dispatch(setChangedData(false));
    if (keyMenu) {
      navigate(keyMenu);
      setCurrent(keyMenu);
    }
  }
}
