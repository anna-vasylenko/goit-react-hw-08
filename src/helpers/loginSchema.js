import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email").required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
