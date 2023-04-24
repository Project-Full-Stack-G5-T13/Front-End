import * as yup from "yup";

export const schemaAdsCreate = yup.object({
  brand: yup.string().required("Marca é obrigatório"),
  model: yup.string().required("Modelo é obrigatório"),
  launch_year: yup.string().required("Ano é obrigatório"),
  fuel_type: yup.string().required("Tipo de combustível é obrigatório"),
  km: yup
    .number()
    .typeError("Obrigatório que seja numero")
    .positive("Obrigatório que seja numero positivo")
    .required("Quilometragem é obrigatório"),
  car_color: yup.string().required("Cor é obrigatório"),
  price: yup
    .number()
    .typeError("Obrigatório que seja numero")
    .positive("Obrigatório que seja numero positivo")
    .required("Preço é obrigatório"),
  description: yup.string().required("Descrição é obrigatório"),
  images: yup.object({
    main_image: yup
      .string()
      .required("Imagem de capa é obrigatório")
      .url("Necessário que seja uma url"),
    image_one: yup.string().notRequired().url("Necessário que seja uma url"),
    image_two: yup.string().notRequired().url("Necessário que seja uma url"),
    image_three: yup.string().notRequired().url("Necessário que seja uma url"),
  }),
});

export const schemaTeste = yup.object({
  brand: yup.string().required(),
  model: yup.string().required(),
  fuel_type: yup.string().required(),
});
