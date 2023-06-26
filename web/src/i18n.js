import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { vn } from "./locale/vi";
import { en } from "./locale/en";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
const resources = {
  vn: {
    translation: {
      ...vn,
    },
  },
  en: {
    translation: {
      ...en,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "vn",
  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
