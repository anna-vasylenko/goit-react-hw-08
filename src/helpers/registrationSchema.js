import * as Yup from "yup";

export const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
});
