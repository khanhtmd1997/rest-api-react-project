import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";

export default function Layout(props) {
  const { items, title } = props;
  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <Button type="text" onClick={(e) => e.preventDefault()}>
        <Space>
          {title}
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
}
