import Layout from "./layout";

export default function DropDownComponent(props) {
  const { title, items } = props;
  return <Layout title={title} items={items} />;
}
