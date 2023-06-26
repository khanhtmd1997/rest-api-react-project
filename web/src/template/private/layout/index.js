import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import SidesTemplate from "../common/sides";
import InfoComponent from "../../../components/info";
import BreadcrumbComponent from "../../../components/common/breadcrumb";
import FooterPrivate from "../common/footer";

const { Header, Footer, Content } = Layout;

export default function LayoutTemplate(props) {
  const { headerStyle, contentStyle, footerStyle, layoutAuth } = props;
  return (
    <Layout>
      <SidesTemplate layoutAuth={layoutAuth} />
      <Layout>
        <Header style={headerStyle}>
          <InfoComponent />
        </Header>
        <Content style={contentStyle}>
          <BreadcrumbComponent />
          <Outlet />
        </Content>
        <Footer style={footerStyle}>
          <FooterPrivate />
        </Footer>
      </Layout>
    </Layout>
  );
}
