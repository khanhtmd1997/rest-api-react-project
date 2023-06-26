import { useDispatch, useSelector } from "react-redux";
import { drawerSelector } from "../../../redux/drawer/reducer";
import { commonSelector } from "../../../redux/common/reducer";
import { confirmChangeData } from "../../../ultis/function";
import Layout from "./layout";
const DrawerComponent = (props) => {
  const {
    title = "Basic Drawer",
    placement = "left" | "right" | "top" | "bottom",
    template,
    children,
    closable = true,
  } = props;

  const { openDrawer } = useSelector(drawerSelector);
  const { isChangeData } = useSelector(commonSelector);
  const dispatch = useDispatch();

  //close drawer
  const onClose = () => {
    confirmChangeData(isChangeData, dispatch);
  };
  //end close drawer

  //style
  const containerStyle = {
    position: "relative",
    height: "100%",
    width: "100%",
    // padding: 48,
    overflow: "hidden",
  };
  //end style
  return (
    <Layout
      containerStyle={containerStyle}
      template={template}
      title={title}
      placement={placement}
      closable={closable}
      onClose={onClose}
      openDrawer={openDrawer}
      children={children}
    />
  );
};

export default DrawerComponent;
