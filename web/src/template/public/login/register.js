import { IdcardOutlined, KeyOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

export default function RegisterTemplate(props) {
  const { loading, form, onRegister } = props;
  return (
    <Form
      form={form}
      autoComplete="off"
      initialValues={{
        username: "",
        password: "",
        fullName: "",
      }}
      onFinish={onRegister}
    >
      <div className="form">
        <h2 className="form-title">Sign Up</h2>
        <Form.Item
          name="fullName"
          rules={[
            {
              required: true,
              message: "Không được bỏ trống",
            },
          ]}
        >
          <Input
            type="text"
            placeholder="fullName"
            autoComplete="new-fullName"
            addonBefore={<IdcardOutlined />}
          />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Không được bỏ trống",
            },
            // {
            //   pattern: new RegExp(
            //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            //   ),
            //   message: "Không đúng định dạng email",
            // },
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
            Sign Up
          </Button>
        </div>
      </div>
    </Form>
  );
}
