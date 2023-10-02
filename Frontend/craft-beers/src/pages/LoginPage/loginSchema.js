import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup
    .string()
    .required("E-mail inválido.")
    .email("É necessário fornecer um e-mail."),
    password: yup
    .string()
    .required("A senha é obrigatória!")
    .min(8, "É necessário conter ao menos 8 caracteres.")
    .matches(
      /(?=.*[A-Z])/,
      "É necessário conter ao menos uma letra maiúscula."
    )
})