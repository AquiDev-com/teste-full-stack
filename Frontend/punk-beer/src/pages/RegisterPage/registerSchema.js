import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is mandatory!")
    .min(3, "The name must be at least 3 characters long.")
    .max(127, "The name can have a maximum of 127 characters."),

  email: yup
    .string()
    .required("Email is mandatory")
    .email("You must provide an email."),

  password: yup
    .string()
    .required("Password is mandatory")
    .matches(/(?=.*?[A-Z])/, "Uppercase letter is required.")
    .matches(/(?=.*?[a-z])/, "Lowercase letter required.")
    .matches(/(?=.*?[0-9])/, "At least one number is required.")
    .min(8, "A password of at least 8 characters is required"),

  phone: yup.string().required("Phone is mandatory"),

  birthday: yup.string().required("Birthday is mandatory"),

  image: yup.string().notRequired(),

  gender: yup.string().required("Select an option"),
});
