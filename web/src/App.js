import { useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes/appRoutes";
import { useSelector } from "react-redux";
import { languageSelector } from "./redux/language";
import i18next from "i18next";

function App() {
  const { langDefault } = useSelector(languageSelector);
  useEffect(() => {
    i18next.changeLanguage(langDefault);
  }, [langDefault]);

  return <AppRoutes />;
}

export default App;
