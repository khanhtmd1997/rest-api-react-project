import Logo from "../../assets/img/404_page.jpg";
import { Button } from "antd";
import { Container } from "./style";

export default function ErrorTemplate(props) {
  const { onClickHome } = props;
  return (
    <Container style={{ backgroundImage: `url(${Logo})` }}>
      <div className="button-home">
        <Button type="primary" onClick={onClickHome}>
          Go Home
        </Button>
      </div>
    </Container>
  );
}
