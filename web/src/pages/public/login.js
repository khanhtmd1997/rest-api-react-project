import LoginTemplate from "../../template/public/login";
import RegisterTemplate from "../../template/public/login/register";
import { FormContainer } from "./style";

export default function LoginPages(props) {
  const { loading, classForm, setFormDisplay } = props;

  return (
    <FormContainer>
      <div className={`container ${classForm}`}>
        {/* Sign Up */}
        <div className="container-form signup-form">
          <RegisterTemplate loading={loading} />
        </div>
        {/* Sign In */}
        <div className="container-form signin-form">
          <LoginTemplate setFormDisplay={setFormDisplay} />
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
