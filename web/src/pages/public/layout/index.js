import LayoutTemplate from "../../../template/public/layout";

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: "100%",
  paddingInline: 0,
};
const contentStyle = {
  padding: 12,
  // // textAlign: "center",
  // // minHeight: 120,
  // lineHeight: "120px",
  // color: "#fff",
};
const footerStyle = {
  textAlign: "center",
  // color: "#fff",
};

export default function LayoutPublicPages() {
  return (
    <LayoutTemplate
      headerStyle={headerStyle}
      contentStyle={contentStyle}
      footerStyle={footerStyle}
    />
  );
}
