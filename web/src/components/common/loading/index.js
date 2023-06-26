import { Spin } from "antd";
import { COMMON } from "../../../constants";
import { useCallback } from "react";
import Layout from "./layout";

export default function LoadingComponent(props) {
  const { loading, children } = props;

  //
  const renderComponent = useCallback(() => {
    return loading ? (
      <Spin size="large" tip={COMMON.LOADING}>
        {children}
      </Spin>
    ) : (
      children
    );
  }, [children, loading]);

  return <Layout renderComponent={renderComponent} />;
}
