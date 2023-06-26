import { useCallback, useState } from "react";
import LoginPages from "./login";
import ForgotPasswordTemplate from "../../../template/public/login/forgot";
import RegisterTemplate from "../../../template/public/login/register";
import LoginTemplate from "../../../template/public/login";
import { COMMON } from "../../../constants";
import { Form } from "antd";
export default function Index() {
  const [step, setStep] = useState(1);
  const [form] = Form.useForm();
  //submit form
  const onSubmitForm = (values) => {
    console.log(values);
    console.log(step);
    if (step === COMMON.TWO) {
      console.log("call api send email");
      setStep(COMMON.ONE);
    } else if (step === COMMON.THREE) {
      console.log("call api register");
      setStep(COMMON.ONE);
    } else {
      console.log("call api login");
    }
  };
  //end submit form

  //render template by step
  const renderStep = useCallback(() => {
    switch (step) {
      case COMMON.TWO:
        return <ForgotPasswordTemplate setStep={setStep} />;
      case COMMON.THREE:
        return <RegisterTemplate setStep={setStep} />;
      default:
        return <LoginTemplate setStep={setStep} />;
    }
  }, [step]);
  //end render template by step

  return (
    <LoginPages
      renderStep={renderStep}
      onSubmitForm={onSubmitForm}
      step={step}
      setStep={setStep}
      form={form}
    />
  );
}
