import { HomeOutlined } from "@ant-design/icons";
import { Image, Menu } from "antd";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { COMMON } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { commonSelector } from "../../redux/common";
import { confirmChangeData } from "../../ultis/function";
import { setCurrentPath } from "../../redux/common/reducer";
const itemsPri = [
  getItem("Dashboard", "/admin", <HomeOutlined />),
  getItem("Detail", "/admin/test", <HomeOutlined />),
  // getItem("Navigation One", "sub1", <MailOutlined />, [
  //   getItem("Option 1", "1"),
  //   getItem("Option 2", "2"),
  //   getItem("Option 3", "3"),
  //   getItem("Option 4", "4"),
  // ]),
  // getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
  //   getItem("Option 5", "5"),
  //   getItem("Option 6", "6"),
  //   getItem("Submenu", "sub3", null, [
  //     getItem("Option 7", "7"),
  //     getItem("Option 8", "8"),
  //   ]),
  // ]),
  // getItem("Navigation Three", "sub4", <SettingOutlined />),
];

const itemsPub = [
  getItem("Home", "/", <HomeOutlined />),
  getItem("Detail", "/detail", <HomeOutlined />),
];

function getItem(label, key, icon, children, type, disabled) {
  return {
    key,
    icon,
    children,
    label,
    type,
    disabled,
  };
}

export default function MenuComponent(props) {
  const { mode = COMMON.FORMLAYOUT_HORI, layoutAuth } = props;
  const { isChangeData, collapsed, currentPath } = useSelector(commonSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [menu, setMenu] = useState(itemsPub);
  const [current, setCurrent] = useState(currentPath);

  //get menu private or public and set key active
  useEffect(() => {
    if (layoutAuth) {
      setMenu(itemsPri);
      setCurrent(currentPath);
    } else {
      setMenu(itemsPub);
      setCurrent(location.pathname);
    }
  }, [currentPath, layoutAuth, location.pathname]);
  //end get menu private or public and set key active

  //click menu
  const onClick = useCallback(
    (e) => {
      confirmChangeData(isChangeData, dispatch, navigate, e.key, setCurrent);
    },
    [dispatch, isChangeData, navigate]
  );
  //end click menu

  //set redux key
  useEffect(() => {
    if (location.pathname === current) {
      dispatch(setCurrentPath(current));
    } else dispatch(setCurrentPath(location.pathname));
  }, [current, dispatch, location.pathname]);
  //end set redux key

  //render menu
  const renderMenu = useCallback(() => {
    return (
      <div
        style={{
          height: COMMON.FORMLAYOUT_HORI ? "unset" : "100vh",
        }}
      >
        <div
          style={{
            display: mode === COMMON.FORMLAYOUT_HORI ? "none" : "block",
            textAlign: "center",
            padding: 12,
            borderRadius: "8px",
          }}
        >
          <Image width={collapsed ? 40 : 80} height={collapsed ? 40 : 80} />
        </div>

        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          defaultSelectedKeys={[current]}
          mode={mode}
          items={menu}
        />
      </div>
    );
  }, [collapsed, current, menu, mode, onClick]);
  //end render menu

  return <Fragment>{renderMenu()}</Fragment>;
}
