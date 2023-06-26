import { Form, Input } from "antd";
import { GooglePlusOutlined } from "@ant-design/icons";
import { Fragment } from "react";
export default function ForgotPasswordTemplate() {
  return (
    <Fragment>
      <Form.Item
        name="sendEmail"
        rules={[
          {
            required: true,
            message: "Email is empty",
          },
          {
            pattern: new RegExp(
              // eslint-disable-next-line no-useless-escape
              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            ),
            message: "Enter a valid email address!",
          },
        ]}
      >
        <div className="form-field d-flex align-items-center">
          <GooglePlusOutlined className="icon" />
          <Input type="email" placeholder="Enter Email" />
        </div>
      </Form.Item>
    </Fragment>
  );
}
