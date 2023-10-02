import * as yup from "yup";

export const registerSchema = yup.object().shape({
    name: yup
      .string()
      .required("O nome é obrigatório!")
      .min(3, "O nome precisa ter pelo menos 3 caracteres.")
      .max(45, "O nome pode ter no máximo 45 caracteres."),
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
      .matches(
        /(?=.*[a-z])/,
        "É necessário conter ao menos uma letra minúscula."
      )
      .matches(/(?=.*\d)/, "É necessário conter ao menos um dígito.")
      .matches(
        /(?=.*[$*&@#])/,
        "É necessário conter ao menos um caractere especial."
      ),
    phone: yup.string().required("O seu contato é obrigatório!"),
  });
