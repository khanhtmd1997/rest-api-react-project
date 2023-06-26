import { Carousel, Image } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Container, LeftIcon, RightIcon } from "./style";

export default function Layout(props) {
  const {
    isShow,
    carouselRef,
    settings,
    array,
    arrayTest,
    contentStyle,
    handleNext,
    handlePrev,
  } = props;
  return (
    <Container
      style={{
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
    </Container>
  );
}
