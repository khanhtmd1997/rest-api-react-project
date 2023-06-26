import { Button, Col, Form, Row } from "antd";
import LoadingComponent from "../loading";
import { ContainerForm } from "./style";

export default function Layout(props) {
  const {
    loading,
    handleFieldsChange,
    formItemLayout,
    form,
    onSubmitForm,
    formLayout,
    initialValues,
    children,
    isButtonFooter,
    textAlignBtnFooter,
    handleClose,
    textButtonClose,
    buttonClass,
    disabledBtnForm,
    textButton,
  } = props;
  return (
    <LoadingComponent loading={loading}>
      <ContainerForm className="container-form">
        {/*formLayout =  horizontal | vertical | inline */}
        <Form
          onFieldsChange={handleFieldsChange}
          scrollToFirstError
          {...formItemLayout}
          form={form}
          onFinish={onSubmitForm}
          autoComplete="off"
          layout={formLayout}
          initialValues={{
            ...initialValues,
          }}
        >
          {children}

          {isButtonFooter ? (
            <Row
              gutter={24}
              align={"middle"}
              className="button-form"
              style={{ textAlign: textAlignBtnFooter }}
            >
              <Col span={24}>
                {handleClose ? (
                  <Button
                    type="default"
                    onClick={() => handleClose()}
                    className="close"
                  >
                    {textButtonClose ? textButtonClose : "Close"}
                  </Button>
                ) : null}
                <Button
                  type="primary"
                  htmlType="submit"
                  className={buttonClass}
                  disabled={disabledBtnForm}
                >
                  {textButton ? textButton : "Submit"}
                </Button>
              </Col>
            </Row>
          ) : null}
        </Form>
      </ContainerForm>
    </LoadingComponent>
  );
}
