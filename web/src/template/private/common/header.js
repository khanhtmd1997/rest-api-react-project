import { useState } from "react";
import InfoComponent from "../../../components/info";
import MenuComponent from "../../../components/menu";
import { COMMON } from "../../../constants";
import { Layout, Space } from "antd";
import BreadcrumbComponent from "../../../components/common/breadcrumb";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 80,
  paddingInline: 0,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const contentStyle = {
  textAlign: "center",
  // minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};
export default function HeaderComponent() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    // <div className="header-container">
    //   <InfoComponent />
    //   <div>

    //   </div>
    //   <MenuComponent mode={COMMON.FORMLAYOUT_VER} isCollapsed />
    // </div>
    <Layout>
      <Sider
        theme="light"
        width={256}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <MenuComponent mode={COMMON.FORMLAYOUT_VER} isCollapsed />
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <InfoComponent />
        </Header>
        <Content style={contentStyle}></Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  );
}
