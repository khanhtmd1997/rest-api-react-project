import { Col, Form, Row } from "antd";
import InputComponent from "../../common/input";

export default function EditPasswordTemplate() {
  return (
    <Row gutter={24}>
      <Col span={24}>
        <Form.Item
          name="oldPassword"
          label="Old Password"
          rules={[
            {
              required: true,
              message: "Old Password is empty",
            },
            {
              min: 8,
              message: "Please enter at least 8 characters",
            },
          ]}
        >
          <InputComponent type="password" placeholder="Enter Old Password" />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          name="newPassword"
          label="New Password"
          rules={[
            {
              required: true,
              message: "New Password is empty",
            },
            {
              min: 8,
              message: "Please enter at least 8 characters",
            },
          ]}
        >
          <InputComponent type="password" placeholder="Enter New Password" />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          rules={[
            {
              required: true,
              message: "Confirm Password is empty",
            },
            {
              min: 8,
              message: "Please enter at least 8 characters",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <InputComponent
            type="password"
            placeholder="Enter Confirm Password"
          />
        </Form.Item>
      </Col>
    </Row>
  );
}
