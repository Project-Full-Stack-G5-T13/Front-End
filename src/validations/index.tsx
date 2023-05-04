import * as yup from "yup";

const brazilianPhoneRegex = /^\d{2}\d{5}\d{4}$/gi;
const dateRegex = /^\d{2}[/]\d{2}[/]\d{4}$/gi;
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
  image_url: yup.string().notRequired().url("Necessário que seja uma url"),
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
    zip_code: yup
      .string()
      .required("CEP obrigatório")
      .matches(cep, "Cep não é valido"),
    state: yup.string().required("Estado obrigatório"),
    city: yup.string().required("Cidade obrigatório"),
    street: yup.string().required("Rua obrigatório"),
    number: yup.string().required("Numero obrigatório"),
    complement: yup.string().notRequired(),
  }),
});

export const schemaUserUpdate = yup.object().shape({
  name: yup.string().nullable(),
  email: yup
    .string()
    .email("Deve ser um formato de email valido")
    .notRequired(),
  cpf: yup
    .string()
    .test(
      "length",
      "CPF deve possuir 11 caracteres",
      (value) => !value || value.length == 11
    )
    .notRequired(),
  phone_number: yup.string().when({
    is: (val) => !val,
    then: yup.string().notRequired(),
    otherwise: yup
      .string()
      .matches(brazilianPhoneRegex, "Telefone não é valido"),
  }),

  birth_date: yup.string().when({
    is: (val) => !val,
    then: yup.string().optional(),
    otherwise: yup
      .string()
      .transform((value, originalValue) => {
        const [day, month, year] = originalValue.split("/");
        const formatedDate = `${month}/${day}/${year}`;
        return formatedDate;
      })
      .matches(dateRegex, {
        excludeEmptyString: true,
        message: "Data invalida",
      }),
  }),

  description: yup.string().notRequired(),
});

export const schemaAddressUpdate = yup.object().shape({
  zip_code: yup.string().length(8, "O CEP deve conter 8 digitos").required(),
  state: yup.string().required("O Estado é obrigatório"),
  city: yup.string().required("A Cidade é obrigatória"),
  street: yup.string().required("A Rua é obrigatória"),
  number: yup.number().when({
    is: (val) => !val,
    then: yup
      .number()
      .typeError("Deve ser um número")
      .required("O número é obrigatório"),
    otherwise: yup
      .number()
      .positive("O número deve ser positivo")
      .required("O Número é obrigatório"),
  }),

  complement: yup.string().notRequired(),
});

export const schemaSendEmail = yup.object({
  email: yup.string().required("E-mail obrigatório"),
});

export const schemaResetPassword = yup.object({
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
});

export const schemaCreateComment = yup.object({
  description: yup.string().min(1, "Deve conter no mínimo 1 caractér"),
});