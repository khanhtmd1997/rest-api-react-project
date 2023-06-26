import MenuComponent from "../../../components/menu";
import { Layout } from "antd";
import { COMMON } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { commonSelector } from "../../../redux/common";
import { setCollapsed } from "../../../redux/common/reducer";

const { Sider } = Layout;
export default function SiderPrivate(props) {
  const { layoutAuth } = props;
  const { collapsed } = useSelector(commonSelector);
  const dispatch = useDispatch();
  return (
    <Sider
      theme="light"
      width={256}
      style={{
        height: "100vh",
      }}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => dispatch(setCollapsed(value))}
    >
      <MenuComponent mode={COMMON.FORMLAYOUT_VER} layoutAuth={layoutAuth} />
    </Sider>
  );
}
