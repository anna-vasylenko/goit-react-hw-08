import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().trim().email().required("Email is required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
