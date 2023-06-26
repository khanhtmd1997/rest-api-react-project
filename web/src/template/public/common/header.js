import SliderComponent from "../../../components/slider";
import InfoComponent from "../../../components/info";
import MenuComponent from "../../../components/menu";

export default function HeaderTemplate() {
  return (
    <div
      className="header-container"
      style={{
        height: "100%",
      }}
    >
      <div>
        <InfoComponent />
        <SliderComponent />
        <MenuComponent />
      </div>
    </div>
  );
}
