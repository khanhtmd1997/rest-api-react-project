import { useNavigate } from "react-router-dom";
import ErrorTemplate from "../../template/error";

export default function ErrorPages() {
  const navigate = useNavigate();

  //click redirect home
  const onClickHome = () => {
    navigate("/");
  };
  //end click redirect home
  return <ErrorTemplate onClickHome={onClickHome} />;
}
