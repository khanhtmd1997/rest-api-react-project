import React from "react";
import { Button, Col, Collapse, Row } from "antd";
import FormComponent from "../common/form";
import { FilterOutlined } from "@ant-design/icons";
import { CollapseContainer, FilterText } from "./style";

const { Panel } = Collapse;

export default function LayoutFilterForm(props) {
  const {
    form,
    handleSearchForm,
    filterData,
    formLayout,
    arrayButton,
    setStepClick,
    colButton,
    clearForm,
    children,
  } = props;
  return (
    <CollapseContainer
      // defaultActiveKey={["1"]}
      expandIconPosition="end"
      expandIcon={({ isActive }) => (
        <FilterText className={isActive ? "active" : ""}>
          <span style={{ fontSize: "14px" }}>Bộ lọc</span>
          <FilterOutlined style={{ fontSize: 16 }} />
        </FilterText>
      )}
    >
      <Panel key={"1"}>
        <FormComponent
          form={form}
          onSubmitForm={handleSearchForm}
          initialValues={{ ...filterData }}
          formLayout={formLayout}
        >
          <Row gutter={24} align={"middle"}>
            {children}
            {arrayButton ? (
              <Col
                span={colButton}
                style={{ textAlign: "right", marginTop: "4px" }}
              >
                {arrayButton.map((el, i) => {
                  if (el?.isSubmit)
                    return (
                      <Button
                        key={i}
                        type={el.type}
                        style={{
                          marginLeft: i === 0 ? 0 : "12px",
                          backgroundColor:
                            el?.bgColor && el.bgColor !== ""
                              ? el.bgColor
                              : "default",
                          color:
                            el?.color && el.color !== "" ? el.color : "default",
                        }}
                        htmlType="submit"
                        onClick={() => setStepClick(el?.key)}
                      >
                        {el.text}
                      </Button>
                    );
                  else {
                    return (
                      <Button
                        key={i}
                        type={el.type}
                        style={{
                          marginLeft: i === 0 ? 0 : "12px",
                          backgroundColor:
                            el?.bgColor && el.bgColor !== ""
                              ? el.bgColor
                              : "default",
                          color:
                            el?.color && el.color !== "" ? el.color : "default",
                        }}
                        onClick={() => clearForm()}
                      >
                        {el.text}
                      </Button>
                    );
                  }
                })}
              </Col>
            ) : null}
          </Row>
        </FormComponent>
      </Panel>
    </CollapseContainer>
  );
}
