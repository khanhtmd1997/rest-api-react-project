import { Button, Form, Input } from "antd";
import { KeyOutlined, UserOutlined } from "@ant-design/icons";
export default function LoginTemplate(props) {
  const { loading, form, onLogin } = props;
  return (
    <Form
      form={form}
      autoComplete="off"
      initialValues={{
        username: "",
        password: "",
      }}
      onFinish={onLogin}
    >
      <div className="form">
        <h2 className="form-title">Sign In</h2>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Không được bỏ trống",
            },
          ]}
        >
          <Input
            type="text"
            placeholder="Username"
            autoComplete="new-username"
            addonBefore={<UserOutlined />}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Không được bỏ trống",
            },
            {
              pattern: new RegExp(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
              ),
              message:
                "Tối thiểu 8 ký tự, ít nhất 1 chữ hoa, 1 chữ thường và 1 số",
            },
          ]}
        >
          <Input.Password
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            addonBefore={<KeyOutlined />}
          />
        </Form.Item>
        <div className="button-submit">
          <Button
            htmlType="submit"
            type="primary"
            className="btn"
            loading={loading}
          >
            Sign In
          </Button>
        </div>
      </div>
    </Form>
  );
}
