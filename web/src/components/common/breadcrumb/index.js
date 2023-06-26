import { useState } from "react";
import Layout from "./layout";

// let data = [
//   {
//     id: 1,
//     href: "/admin",
//     title: <HomeOutlined />,
//   },
//   {
//     id: 2,
//     href: "",
//     title: (
//       <>
//         <UserOutlined />
//         <span>Application List</span>
//       </>
//     ),
//   },
//   {
//     id: 3,
//     title: "Application",
//   },
// ];
export default function BreadcrumbComponent(props) {
  const { items } = props;
  const [breadcrumbs] = useState(items);
  return <Layout items={items} breadcrumbs={breadcrumbs} />;
}
