import React from "react";
import LoginForm from "../../component/LoginForm";
import { LoginUser } from "../../model/admin";

function Login() {
  const onLogin = (values: LoginUser) => {
    return true;
  };
  return (
    <>
      <LoginForm nextStep="/main" onLogin={onLogin}></LoginForm>
    </>
  );
}
export default Login;
