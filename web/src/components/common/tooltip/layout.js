import { Tooltip } from "antd";

export default function Layout(props) {
  const { placement, text, arrow, children } = props;
  return (
    <Tooltip placement={placement} title={text} arrow={arrow}>
      {children}
    </Tooltip>
  );
}
