import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { contactSchema } from "../../helpers/contactSchema";
import s from "./ContactUpdateForm.module.css";
import { updateContact } from "../../redux/contacts/operations";
import { setCurrentContact } from "../../redux/contacts/slice";

const ContactUpdateForm = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(updateContact({ name: values.name, number: values.number, id }));
    options.resetForm();
  };

  return (
    <Formik
      initialValues={{ name, number }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={s.form}>
        <label className={s.label}>
          Name
          <Field type="text" name="name" className={s.input} />
          <ErrorMessage name="name" component="span" className={s.message} />
        </label>

        <label className={s.label}>
          Number
          <Field type="text" name="number" className={s.input} />
          <ErrorMessage name="number" component="span" className={s.message} />
        </label>
        <button type="submit" className={s.button}>
          Update Contact
        </button>
        <button
          type="button"
          className={s.button}
          onClick={() => dispatch(setCurrentContact(null))}
        >
          Cancel
        </button>
      </Form>
    </Formik>
  );
};

export default ContactUpdateForm;
