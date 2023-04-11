import * as yup from "yup";

const brazilianPhoneRegex = /^\d{2}\d{4,5}\d{4}$/gi;
const cep = /^[0-9]{5}[0-9]{3}$/;

export const schemaLogin = yup.object({
  email: yup.string().required("E-mail obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export const schemaSignup = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .required("E-mail obrigatório")
    .email("Preencher o email corretamente"),
  cpf: yup.string().required("Cpf obrigatório"),
  birth_date: yup.string().required("Data de nascimento obrigatório"),
  description: yup.string().required("Descrição obrigatório"),
  image_url:yup.string().notRequired().url("Necessário que seja uma url"),
  phone_number: yup
    .string()
    .required("Telefone obrigatório")
    .matches(brazilianPhoneRegex, "Telefone não é valido"),
  password: yup
    .string()
    .required("Senha obrigatória!")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .matches(/.{8,}/, "Deve ter no mínimo 8 digitos"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ),
  address: yup.object({
    zip_code: yup.string().required("CEP obrigatório") .matches(cep, "Cep não é valido"),
    state: yup.string().required("Estado obrigatório"),
    city: yup.string().required("Cidade obrigatório"),
    street: yup.string().required("Rua obrigatório"),
    number: yup.string().required("Numero obrigatório"),
    complement: yup.string().notRequired(),
  }),
});
