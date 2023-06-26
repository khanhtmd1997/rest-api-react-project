import { useEffect, useState } from "react";
import Layout from "./layout";

export default function SelectComponent(props) {
  const {
    form,
    formKey,
    formName,
    data,
    defaultValue = null,
    allowClear = false,
    setValue,
    mode = undefined,
    showSearch = true,
    placeholder = "",
  } = props;
  const [valueChange, setValueChange] = useState(defaultValue);

  //set form field
  useEffect(() => {
    if (form) {
      form.setFieldsValue({
        [formKey]: valueChange,
      });
    }
  }, [form, valueChange, formKey]);
  //end set form field

  //change select
  const handleChange = (value) => {
    setValueChange(value);
    if (setValue) setValue(value);
  };
  //end change select

  return (
    <Layout
      handleChange={handleChange}
      allowClear={allowClear}
      defaultValue={defaultValue}
      mode={mode}
      showSearch={showSearch}
      placeholder={placeholder}
      data={data}
      formKey={formKey}
      formName={formName}
    />
  );
}
