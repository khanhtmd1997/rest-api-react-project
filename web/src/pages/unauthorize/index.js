import { useNavigate } from "react-router-dom";
import UnauthorizeTemplate from "../../template/unauthorize";

export default function UnauthorizePages() {
  const navigate = useNavigate();

  //click redirect home
  const onClickHome = () => {
    navigate("/");
  };
  //end click redirect home
  return <UnauthorizeTemplate onClickHome={onClickHome} />;
}
