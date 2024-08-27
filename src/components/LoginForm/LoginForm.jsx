import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../../redux/auth/operations";
import { loginSchema } from "../../helpers/loginSchema";
import s from "./LoginForm.module.css";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(logIn(values));
    options.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            Email
            <Field type="text" name="email" className={s.input} />
            <ErrorMessage name="email" component="span" className={s.message} />
          </label>

          <label className={s.label}>
            Password
            <Field type="password" name="password" className={s.input} />
            <ErrorMessage
              name="password"
              component="span"
              className={s.message}
            />
          </label>

          <button type="submit" className={s.button}>
            Log In
          </button>
        </Form>
      </Formik>
      <p>
        Do not have an account?
        <Link to="/register" className={s.link}>
          Sign up now
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
