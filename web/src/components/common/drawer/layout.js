import { Drawer } from "antd";
import { Container } from "./style";

export default function Layout(props) {
  const {
    containerStyle,
    template,
    title,
    placement,
    closable,
    onClose,
    openDrawer,
    children,
  } = props;
  return (
    <Container style={containerStyle}>
      {template}
      <Drawer
        title={title}
        placement={placement}
        closable={closable}
        onClose={onClose}
        open={openDrawer}
        getContainer={false}
      >
        {children}
      </Drawer>
    </Container>
  );
}
