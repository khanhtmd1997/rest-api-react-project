import i18next from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { languageSelector } from "../../../redux/language";
import { setLang } from "../../../redux/language/reducer";
import Layout from "./layout";

const arrayLanguage = [
  {
    value: "vi",
    label: "VietNamese",
    flag: "https://cdn0.iconfinder.com/data/icons/world-flags-1/100/Vietnam-2-64.png",
  },
  {
    value: "en",
    label: "English",
    flag: "https://cdn2.iconfinder.com/data/icons/world-flags-1-1/100/Britain-64.png",
  },
];

export default function LanguageComponent() {
  const { langDefault } = useSelector(languageSelector);
  const dispatch = useDispatch();

  //change language
  const handleChangeLanguage = (val) => {
    i18next.changeLanguage(val);
    dispatch(setLang(val));
  };

  return (
    <Layout
      handleChangeLanguage={handleChangeLanguage}
      langDefault={langDefault}
      arrayLanguage={arrayLanguage}
    />
  );
}
