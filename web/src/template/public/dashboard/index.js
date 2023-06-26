import { useTranslation } from "react-i18next";

export default function DashboardTemplate() {
  const { t } = useTranslation();
  return <>{t("title")}Dashboard Public</>;
}
