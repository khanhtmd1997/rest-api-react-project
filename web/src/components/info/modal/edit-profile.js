import { Col, Form, Row } from "antd";
import InputComponent from "../../common/input";

export default function EditProfileTemplate() {
  return (
    <Row gutter={24}>
      <Col span={24}>
        <Form.Item
          name="email"
          label="Email"
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
          <InputComponent />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          name="fullName"
          label="Full name"
          rules={[
            {
              required: true,
              message: "Full name is empty",
            },
          ]}
        >
          <InputComponent />
        </Form.Item>
      </Col>
    </Row>
  );
}
