import { COMMON } from "../../../constants";
import FormComponent from "../../common/form";

export default function ModalInfoComponent(props) {
  const {
    form,
    loading,
    handleSubmitForm,
    handleCloseModal,
    stepModal,
    data,
    children,
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
      data={data}
    >
      {children}
    </FormComponent>
  );
}
