import Logo from "../../assets/img/401_page.png";
import { Button } from "antd";
import { Container } from "./style";

export default function UnauthorizeTemplate(props) {
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
