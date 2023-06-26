import Layout from "./layout";

export default function TooltipComponent(props) {
  const { children, arrow = "Show", placement = "topLeft", text = "" } = props;
  // arrow = Show | Hide | Center
  // placement = topLeft | top | topRight | leftTop | left | leftBottom | rightTop | right | rightBottom | bottomLeft | bottom | bottomRight

  return (
    <Layout
      placement={placement}
      text={text}
      arrow={arrow}
      children={children}
    />
  );
}
