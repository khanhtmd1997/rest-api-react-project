import localeVN from "antd/es/date-picker/locale/vi_VN";
import localeEn from "antd/es/date-picker/locale/en_US";
import { useSelector } from "react-redux";
import { languageSelector } from "../../../redux/language";
import { COMMON } from "../../../constants";
import { Fragment, useCallback, useEffect } from "react";
import Layout from "./layout";
export default function DatePickerComponent(props) {
  const {
    defaultValue,
    form,
    formKey,
    inputReadOnly = false,
    picker = COMMON.TEXT_DATE,
    allowClear = false,
    placeholder = "",
  } = props;

  const { langDefault } = useSelector(languageSelector);

  useEffect(() => {
    if (form && formKey)
      form.setFieldsValue({
        [formKey]: defaultValue,
      });
    // eslint-disable-next-line
  }, []);

  const handleChangeDate = useCallback(
    (date, dateString) => {
      form.setFieldsValue({
        [formKey]: dateString,
      });
    },
    [form, formKey]
  );

  //type format date
  const renderFormatDate = useCallback(() => {
    switch (picker) {
      case COMMON.TEXT_MONTH:
        return COMMON.FORMAT_MONTH;
      case COMMON.TEXT_YEAR:
        return COMMON.FORMAT_YEAR;
      case COMMON.TEXT_QUANTER:
        return COMMON.FORMAT_QUANTER;
      default:
        return COMMON.FORMAT_DATE;
    }
  }, [picker]);

  const renderLayout = useCallback(() => {
    return (
      <Layout
        renderFormatDate={renderFormatDate}
        langDefault={langDefault}
        defaultValue={defaultValue}
        handleChangeDate={handleChangeDate}
        inputReadOnly={inputReadOnly}
        allowClear={allowClear}
        placeholder={placeholder}
        localeEn={localeEn}
        localeVN={localeVN}
      />
    );
  }, [
    allowClear,
    defaultValue,
    handleChangeDate,
    inputReadOnly,
    langDefault,
    placeholder,
    renderFormatDate,
  ]);

  return <Fragment>{renderLayout()}</Fragment>;
}
