import { Modal } from "antd";

export default function Layout(props) {
  const {
    title,
    openModal,
    handleOk,
    handleCancel,
    isFooter,
    customFooter,
    children,
  } = props;
  return (
    <Modal
      title={title}
      open={openModal}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={isFooter ? [customFooter] : null}
    >
      {children}
    </Modal>
  );
}
