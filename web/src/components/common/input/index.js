import { Input, InputNumber } from "antd";
import { useCallback } from "react";
import Layout from "./layout";
// import styled from "styled-components";

export default function InputComponent(props) {
  //
  const renderInputType = useCallback(() => {
    switch (props.type) {
      case "textarea":
        return <Input.TextArea {...props} />;
      case "password":
        return <Input.Password {...props} />;
      case "number":
        return <InputNumber {...props} />;
      default:
        return <Input {...props} />;
    }
  }, [props]);
  return <Layout renderInputType={renderInputType} />;
}

// const InputContainer = styled(Input)`
//   // margin-bottom: 12px;
// `;
