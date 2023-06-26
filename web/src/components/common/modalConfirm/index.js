import { ExclamationCircleOutlined, LogoutOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { COMMON } from "../../../constants";
import { useCallback } from "react";
import Layout from "./layout";

export default function ModalConfirmComponent(props) {
  const {
    title = "Confirm",
    icon = <ExclamationCircleOutlined />,
    content = "Do you want to delete it?",
    okText = "Ok",
    cancelText = COMMON.BUTTON_TEXTCANCEL,
    buttonText = COMMON.BUTTON_TEXTCONFIRM,
    onOk = () => {},
    onCancel = () => {},
    isIcon = false,
    iconText = "",
    danger = false,
    buttonIcon = false,
    isNotTextBtn = false,
  } = props;
  const [modal, contextHolder] = Modal.useModal();
  const confirm = () => {
    modal.confirm({
      title,
      icon,
      content,
      okText,
      cancelText,
      onOk,
      onCancel,
    });
  };

  //render icon
  const renderIcon = useCallback(() => {
    switch (iconText) {
      case "logout":
        return <LogoutOutlined />;
      default:
        return "";
    }
  }, [iconText]);
  //end render icon

  return (
    <Layout
      isIcon={isIcon}
      renderIcon={renderIcon}
      confirm={confirm}
      buttonIcon={buttonIcon}
      danger={danger}
      buttonText={buttonText}
      isNotTextBtn={isNotTextBtn}
      contextHolder={contextHolder}
    />
  );
}
