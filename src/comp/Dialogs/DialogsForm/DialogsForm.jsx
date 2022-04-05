import React from "react";
import { Field, reduxForm } from "redux-form";
import { required, maxLenghtTc } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLenght50 = maxLenghtTc(50);

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="dialog"
        placeholder="Enter message text"
        validate={[required, maxLenght50]}
      />
      <button>Send</button>
    </form>
  );
};

export const DialogReduxForm = reduxForm({ form: "dialog" })(DialogsForm);
