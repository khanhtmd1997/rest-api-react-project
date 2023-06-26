import { Col, Form, Row } from "antd";
import DatePickerComponent from "../../../components/common/datepicker";
import InputComponent from "../../../components/common/input";

export default function InfoLayout(props) {
  const { field, form } = props;
  return (
    <Row gutter={24}>
      {field.map((el, i) => (
        <Col span={24} key={i}>
          <Form.Item
            name={el.name}
            label={el.isLabel ? el.label : ""}
            rules={[
              {
                required: el?.valid.required,
                message: `${el.label} is empty`,
              },
              {
                min: el?.valid.min,
                message: `${el.label} is min ${el.valid.min} character`,
              },
              el.name === "email"
                ? {
                    pattern: new RegExp(
                      // eslint-disable-next-line no-useless-escape
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    ),
                    message: "Enter a valid email address!",
                  }
                : null,
              el.name === "confirmPassword"
                ? ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  })
                : null,
            ]}
          >
            {el.type !== "date" ? (
              <InputComponent placeholder={el.placeholder} type={el.type} />
            ) : (
              <DatePickerComponent form={form} formKey="birthDay" />
            )}
          </Form.Item>
        </Col>
      ))}
    </Row>
  );
}
