import { COMMON } from "../../../constants";
import FormComponent from "../../common/form";

export default function ModalInfoComponent(props) {
  const {
    form,
    loading,
    handleSubmitForm,
    handleCloseModal,
    contentForm,
    stepModal,
    data,
  } = props;
  return (
    <FormComponent
      form={form}
      loading={loading}
      onSubmitForm={handleSubmitForm}
      isButtonFooter
      textButton={
        stepModal === COMMON.ONE ? "Change Profile" : "Change Password"
      }
      handleClose={handleCloseModal}
      textButtonClose="Close"
      initialValues={data}
      data={data}
    >
      {contentForm()}
    </FormComponent>
  );
}
