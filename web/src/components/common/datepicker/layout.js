import { COMMON } from "../../../constants";
import { Container } from "./style";

export default function Layout(props) {
  const {
    renderFormatDate,
    langDefault,
    defaultValue,
    handleChangeDate,
    inputReadOnly,
    allowClear,
    placeholder,
    localeEn,
    localeVN,
  } = props;
  return (
    <Container
      format={renderFormatDate()}
      locale={langDefault === COMMON.VI ? localeVN : localeEn}
      defaultValue={defaultValue}
      onChange={handleChangeDate}
      disabled={inputReadOnly}
      allowClear={allowClear}
      placeholder={placeholder}
    ></Container>
  );
}
