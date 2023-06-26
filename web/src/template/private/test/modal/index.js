import { Form, Input } from "antd";
import FormComponent from "../../../../components/common/form";

export default function CreateEditFormDrawer(props) {
  const { data, form, handleCreateEditForm, handleClose } = props;

  return (
    <FormComponent
      form={form}
      onSubmitForm={handleCreateEditForm}
      textButton={data && data.key ? "Update" : "Create"}
      initialValues={data}
      isButtonFooter
      handleClose={handleClose}
      textAlignBtnFooter={"center"}
    >
      <Form.Item name="name" label="Name">
        <Input />
      </Form.Item>
      <Form.Item name="age" label="Age">
        <Input />
      </Form.Item>
      <Form.Item name="address" label="Address">
        <Input />
      </Form.Item>
    </FormComponent>
  );
}
