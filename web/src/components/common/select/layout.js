import { Select } from "antd";

const { Option } = Select;

export default function Layout(props) {
  const {
    handleChange,
    allowClear,
    defaultValue,
    mode,
    showSearch,
    placeholder,
    data,
    formKey,
    formName,
  } = props;
  return (
    <Select
      onChange={handleChange}
      allowClear={allowClear}
      defaultValue={defaultValue}
      mode={mode}
      showSearch={showSearch}
      optionFilterProp="children"
      filterOption={(input, option) =>
        (option?.children ?? "").toLowerCase().includes(input.toLowerCase())
      }
      placeholder={placeholder}
      notFoundContent={<div>Not Content Data</div>}
    >
      {data &&
        data.map((el, i) => (
          <Option key={i} value={el?.value ? el.value : el[formKey]}>
            {el?.label ? el.label : el?.name ? el.name : el[formName]}
          </Option>
        ))}
    </Select>
  );
}
