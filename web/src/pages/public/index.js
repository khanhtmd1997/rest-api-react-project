import { useCallback, useEffect, useState } from "react";
// import LoginPages from "./login";
import { Form } from "antd";
// import { login, register } from "../../../services/auth";
// import LoadingComponent from "../../../components/common/loading";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// // import "./css.css";
// import { COMMON } from "../../../constants";
// import { setUser } from "../../../redux/user/reducer";
import { FormContainer } from "./style";
import RegisterTemplate from "../../template/public/login/register";
import LoginTemplate from "../../template/public/login";
import { login, register } from "../../services/auth";
import { COMMON } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/reducer";

export default function Index() {
  const [form] = Form.useForm();
  const [form1] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    form.resetFields();
    form1.resetFields();
    console.log(form.getFieldsValue());
  }, [form, form1]);

  const [classForm, setClassForm] = useState("");

  const setFormDisplay = useCallback(
    (index) => {
      if (index === "signup") {
        setClassForm("right-panel-active");
        form1.resetFields();
      } else {
        setClassForm("");
        form.resetFields();
      }
    },
    [form, form1]
  );

  //submit login
  const onLogin = (values) => {
    login({
      payload: values,
      setLoading,
      onSuccess: (res) => {
        if (res) {
          localStorage.setItem(COMMON.TOKEN_NAME, JSON.stringify(res.token));
          dispatch(setUser(res.token));
          navigate("/");
        }
      },
    });
  };

  //submit register
  const onRegister = (values) => {
    register({
      payload: values,
      setLoading,
      onSuccess: (res) => {
        if (res) {
          setClassForm("");
        }
      },
    });
  };

  return (
    <FormContainer>
      <div className={`container ${classForm}`}>
        {/* Sign Up */}
        <div className="container-form signup-form">
          <RegisterTemplate
            loading={loading}
            form={form1}
            onRegister={onRegister}
          />
        </div>

        {/* Sign In */}
        <div className="container-form signin-form">
          <LoginTemplate
            setFormDisplay={setFormDisplay}
            form={form}
            onLogin={onLogin}
          />
        </div>

        {/* Overlay */}
        <div className="container-overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--left">
              <div className="btn" onClick={() => setFormDisplay("signin")}>
                Sign In
              </div>
            </div>
            <div className="overlay__panel overlay--right">
              <div className="btn" onClick={() => setFormDisplay("signup")}>
                Sign Up
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormContainer>
  );
}
