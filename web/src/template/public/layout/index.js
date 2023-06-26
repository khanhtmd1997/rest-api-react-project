import { Outlet } from "react-router-dom";
import HeaderTemplate from "../../../template/public/common/header";

import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

export default function LayoutTemplate(props) {
  const { headerStyle, contentStyle, footerStyle } = props;
  return (
    <Layout>
      <Header style={headerStyle}>
        <HeaderTemplate />
      </Header>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
}
