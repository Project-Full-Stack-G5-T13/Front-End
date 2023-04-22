import * as yup from "yup";

export const schemaAdsCreate = yup.object({
	brand: yup.string().required("Marca é obrigatório"),
	model: yup.string().required("Modelo é obrigatório"),
	launch_year: yup.string().required("Ano é obrigatório"),
	fuel_type: yup.string().required("Tipo de combustível é obrigatório"),
	km: yup.string().required("Quilometragem é obrigatório"),
	car_color: yup.string().required("Cor é obrigatório"),
	price_table: yup.string().required("Preço da tabela FIPE é obrigatório"),
	price: yup.string().required("Preço é obrigatório"),
	description: yup.string().required("Descrição é obrigatório"),
	fuel: yup.string().notRequired(),
	images: yup.object({
		main_image: yup.string().required("Imagem de capa é obrigatório"),
		image_one: yup.string().notRequired(),
		image_two: yup.string().notRequired(),
		image_three: yup.string().notRequired(),
	}),
});

export const schemaTeste = yup.object({
	brand: yup.string().required(),
	model: yup.string().required(),
	fuel_type: yup.string().required(),
});

//price_table => tem na model
//fuel => tem no back
