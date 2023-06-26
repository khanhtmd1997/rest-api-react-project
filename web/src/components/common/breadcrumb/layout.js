import { Breadcrumb } from "antd";
import { Breadcrumbs } from "./style";

export default function Layout(props) {
  const { items, breadcrumbs } = props;
  return (
    <Breadcrumbs
      className="bread-crumbs"
      style={{
        display: items ? "block" : "none",
      }}
    >
      <Breadcrumb items={breadcrumbs} />
    </Breadcrumbs>
  );
}
