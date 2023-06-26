import { Button, Space } from "antd";
import { Fragment } from "react";

export default function Layout(props) {
  const {
    isIcon,
    renderIcon,
    confirm,
    buttonIcon,
    danger,
    buttonText,
    isNotTextBtn,
    contextHolder,
  } = props;
  return (
    <Fragment>
      <Space>
        {isIcon ? renderIcon() : null}
        <Button
          type="link"
          onClick={confirm}
          icon={buttonIcon ? buttonIcon : null}
          danger={danger}
        >
          {isNotTextBtn ? null : buttonText}
        </Button>
      </Space>
      {contextHolder}
    </Fragment>
  );
}
