import { Image, Select } from "antd";
import { LanguageSelect } from "./style";

const { Option } = Select;

export default function Layout(props) {
  const { handleChangeLanguage, langDefault, arrayLanguage } = props;

  return (
    <LanguageSelect onChange={handleChangeLanguage} defaultValue={langDefault}>
      {arrayLanguage.map((el, i) => (
        <Option key={i} value={el.value}>
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                marginRight: "8px",
                marginTop: "-1px",
              }}
            >
              <Image
                src={el.flag}
                alt=""
                preview={false}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </div>
            <div>{el.label}</div>
          </div>
        </Option>
      ))}
    </LanguageSelect>
  );
}
