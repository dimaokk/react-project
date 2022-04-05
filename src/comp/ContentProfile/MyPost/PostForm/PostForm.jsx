import React from "react";
import { Field, reduxForm } from "redux-form";
import { required, maxLenghtTc } from "../../../../utils/validators/validators";
import { Textarea } from "../../../common/FormsControls/FormsControls";

const maxLenght10 = maxLenghtTc(10);
const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name={"postBody"}
        placeholder="Введите текст"
        validate={[required, maxLenght10]}
      />
      <button>Add</button>
    </form>
  );
};

export const PostReduxForm = reduxForm({ form: "post" })(PostForm);
