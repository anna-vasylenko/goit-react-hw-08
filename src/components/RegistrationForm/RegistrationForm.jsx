import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import s from "./RegistrationForm.module.css";
import { registrationSchema } from "../../helpers/registrationSchema";
import { register } from "../../redux/auth/operations";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registrationSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            Username
            <Field type="text" name="name" className={s.input} />
            <ErrorMessage name="name" component="span" className={s.message} />
          </label>

          <label className={s.label}>
            Email
            <Field type="email" name="email" className={s.input} />
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
            Register
          </button>
        </Form>
      </Formik>
      <p>
        Do you have an account?
        <Link to="/login" className={s.link}>
          Log In
        </Link>
      </p>
    </>
  );
};

export default RegistrationForm;
