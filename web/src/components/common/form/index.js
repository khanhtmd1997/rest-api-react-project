import { COMMON } from "../../../constants";
import { useCallback, useState } from "react";
import { setChangedData } from "../../../redux/common/reducer";
import { useDispatch } from "react-redux";
import Layout from "./layout";

export default function FormComponent(props) {
  const {
    formLayout = COMMON.FORMLAYOUT_VER,
    labelCol = 5,
    wrapperCol = 19,
    loading = false,
    children,
    onSubmitForm,
    isButtonFooter = false,
    textButton = "Submit",
    handleClose,
    textButtonClose = "Close",
    buttonClass = "btn ",
    initialValues = {},
    form,
    textAlignBtnFooter = "right",
    data = {},
  } = props;
  const dispatch = useDispatch();
  const [disabledBtnForm, setDisabledBtnForm] = useState(false);
  const formItemLayout =
    formLayout === COMMON.FORMLAYOUT_HORI
      ? {
          labelCol: {
            span: labelCol,
          },
          wrapperCol: {
            span: wrapperCol,
          },
        }
      : null;

  //change field form
  const handleFieldsChange = useCallback(
    (changedFields) => {
      console.log(changedFields);
      if (data && data[changedFields[0]?.name] === changedFields[0]?.value) {
        dispatch(setChangedData(false));
      } else dispatch(setChangedData(true));

      if (changedFields[0]?.errors?.length > 0) {
        setDisabledBtnForm(true);
      } else setDisabledBtnForm(false);
    },
    [data, dispatch]
  );
  //end change field form
  return (
    <Layout
      loading={loading}
      handleFieldsChange={handleFieldsChange}
      formItemLayout={formItemLayout}
      form={form}
      onSubmitForm={onSubmitForm}
      formLayout={formLayout}
      initialValues={initialValues}
      children={children}
      isButtonFooter={isButtonFooter}
      textAlignBtnFooter={textAlignBtnFooter}
      handleClose={handleClose}
      textButtonClose={textButtonClose}
      buttonClass={buttonClass}
      disabledBtnForm={disabledBtnForm}
      textButton={textButton}
    />
  );
}
