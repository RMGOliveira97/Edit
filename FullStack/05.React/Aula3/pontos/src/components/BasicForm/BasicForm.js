import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import Button from "../Button/Button";

function BasicForm() {
  const handleSubmit = (values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values));
      actions.setSubmitting(false);
    }, 1000);
  };

  const validation = (values) => {
    const errors = {};
    if (values.name.length < 5) {
      errors.name = "Name should have at least 5 characters.";
    }
    if (values.password.length < 10) {
      errors.password = "Password should have at least 10 characters.";
    }
    return errors;
  };

  return (
    <div>
      <section>
        <h1>Form Section</h1>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) =>
            handleSubmit(values, { setSubmitting })
          }
          validate={(values) => validation(values)}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="name">Name: </label>
                <Field type="name" name="name" />
                <ErrorMessage name="name" component="p" />
              </div>

              <div>
                <label htmlFor="email">Email: </label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="p" />
              </div>

              <div>
                <label htmlFor="password">Password: </label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="p" />
              </div>

              <div>
                <Button type={"submit"} disabled={isSubmitting}>
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
}

export default BasicForm;
