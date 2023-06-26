import Layout from "./layout";

export default function ModalComponent(props) {
  const {
    openModal = false,
    handleOk = () => {},
    handleCancel = () => {},
    title = "Modal Title",
    children,
    isFooter = false,
    customFooter = [],
  } = props;

  return (
    <Layout
      title={title}
      openModal={openModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isFooter={isFooter}
      customFooter={customFooter}
      children={children}
    />
  );
}
