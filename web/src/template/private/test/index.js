import { Col, Form, Input } from "antd";
import FilterFormComponent from "../../../components/filterForm";
import { Fragment } from "react";
import TableComponent from "../../../components/common/table";
import FormComponent from "../../../components/common/form";

export default function TestTemplate(props) {
  const {
    form,
    form1,
    handleSearchForm,
    filterData,
    totalData,
    formLayout,
    arrayButton,
    setStep,
    clearFilter,
    colButton,
    rowSelection,
    dataSource,
    columns,
    removeKey,
    setRemoveKey,
    setDataSource,
    onChangePagination,
    isCreate,
  } = props;

  return (
    <Fragment>
      <FilterFormComponent
        form={form}
        handleSearchForm={handleSearchForm}
        filterData={filterData}
        formLayout={formLayout}
        arrayButton={arrayButton}
        setStep={setStep}
        clearFilter={clearFilter}
        colButton={colButton}
      >
        <Col span={12}>
          <Form.Item name="test" label="text">
            <Input />
          </Form.Item>
        </Col>
      </FilterFormComponent>

      <FormComponent
        form={form1}
        initialValues={{
          ...form1.getFieldsValue(),
        }}
      >
        <TableComponent
          rowSelection={rowSelection}
          data={dataSource}
          columns={columns}
          removeKey={removeKey}
          setRemoveKey={setRemoveKey}
          setDataSource={setDataSource}
          pagination={filterData}
          totalData={totalData}
          onChangePagination={onChangePagination}
          headerTable="Test table"
          isEditTable={false}
          isSelectType={false}
          isCreate={isCreate}
        />
      </FormComponent>
    </Fragment>
  );
}
