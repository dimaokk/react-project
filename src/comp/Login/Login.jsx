import React from "react";
import LoginReduxForm from "./LoginForm/LoginForm";
import styles from "./Login.module.css";
import { Redirect } from "react-router-dom";

export const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div className={styles.loginForm}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};
