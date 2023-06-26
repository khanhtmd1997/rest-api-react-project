import { Form } from "antd";
import {
  GooglePlusOutlined,
  UserOutlined,
  KeyOutlined,
  // CalendarOutlined,
} from "@ant-design/icons";
import { Fragment } from "react";
// import DatePickerComponent from "../../../components/common/datepicker";
import InputComponent from "../../../components/common/input";

export default function RegisterTemplate() {
  return (
    <Fragment>
      <Form.Item
        name="email"
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
          <InputComponent type="email" placeholder="Enter Email" />
        </div>
      </Form.Item>
      <Form.Item
        name="fullName"
        rules={[
          {
            required: true,
            message: "Full name is empty",
          },
          {
            max: 255,
            message: "Please enter at least 255 characters",
          },
        ]}
      >
        <div className="form-field d-flex align-items-center">
          <UserOutlined className="icon" />
          <InputComponent type="text" placeholder="Enter FullName" />
        </div>
      </Form.Item>
      {/* <Form.Item name="birthDay">
        <div className="form-field d-flex align-items-center">
          <CalendarOutlined className="icon" />
          <DatePickerComponent placeholder="Enter Birthday" />
        </div>
      </Form.Item> */}
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Password is empty",
          },
          {
            min: 8,
            message: "Please enter at least 8 characters",
          },
        ]}
      >
        <div className="form-field d-flex align-items-center">
          <KeyOutlined className="icon" />
          <InputComponent
            type="password"
            placeholder="Enter password"
            style={{ backgroundColor: "unset", padding: 0, border: "unset" }}
          />
        </div>
      </Form.Item>
    </Fragment>
  );
}
