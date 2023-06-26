import { Carousel, Image } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef } from "react";
import { LeftIcon, RightIcon } from "./style";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
};

const arrayTest = [
  {
    id: 1,
    label: 1,
  },
  {
    id: 2,
    label: 2,
  },
  {
    id: 3,
    label: 3,
  },
  {
    id: 4,
    label: 4,
  },
];
export default function SliderComponent(props) {
  const { array, isShow } = props;

  const carouselRef = useRef(null);

  //
  const handleNext = () => carouselRef.current.next();

  //
  const handlePrev = () => carouselRef.current.prev();

  return (
    <div
      style={{
        position: "relative",
        display: isShow ? "block" : "none",
      }}
    >
      <Carousel
        // afterChange={onChange}
        ref={carouselRef}
        {...settings}
      >
        {array && array.length > 0
          ? array.map((el, i) => (
              <div>
                <Image src={el?.image ?? el?.url} alt="" />
              </div>
            ))
          : arrayTest.map((el, i) => (
              <div key={i}>
                <h3 style={contentStyle}>{el.label}</h3>
              </div>
            ))}
      </Carousel>
      <LeftIcon onClick={handlePrev}>
        <LeftOutlined />
      </LeftIcon>
      <RightIcon onClick={handleNext}>
        <RightOutlined />
      </RightIcon>
    </div>
  );
}
