import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is mandatory")
    .email("You must provide an email."),

  password: yup.string().required("Password is mandatory"),
});
