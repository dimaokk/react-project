import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../utils/validators/validators";
import { Input } from "../../common/FormsControls/FormsControls";
import { createField } from "../../common/FormsControls/FormsControls";
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"email"}
          component={Input}
          type="text"
          placeholder="login"
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name={"password"}
          component={Input}
          type="text"
          placeholder="password"
          validate={[required]}
        />
      </div>
      <div>
        <span>remember me</span>
        <Field
          name={"rememberMe"}
          component={Input}
          type="checkbox"
          validate={[required]}
        />
      </div>
      {props.error}
      <div>
        {props.captchaUrl && (
          <img src={props.captchaUrl} alt={props.captchaUrl} />
        )}
      </div>
      <div>
        {props.captchaUrl &&
          createField("Symbol", "captcha", [required], Input, {})}
      </div>
      <button>login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default LoginReduxForm;
