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
		image_one: yup
			.string()
			.notRequired()
			.url("Necessário que seja uma url"),
		image_two: yup
			.string()
			.notRequired()
			.url("Necessário que seja uma url"),
		image_three: yup
			.string()
			.notRequired()
			.url("Necessário que seja uma url"),
	}),
});

export const schemaTeste = yup.object({
	brand: yup.string().required(),
	model: yup.string().required(),
	fuel_type: yup.string().required(),
});

export const schemaAdsUpdate = yup.object({
	brand: yup.string().notRequired(),
	model: yup.string().when("brand", {
		is: (brand) => brand && brand.trim().length > 0,
		then: yup
			.string()
			.required(
				"Obrigatótio selecionar modelo caso tenho selecionado uma marca"
			),
		otherwise: yup.string().notRequired(),
	}),
	launch_year: yup.number().when({
		is: (val) => !val,
		then: yup
			.number()
			.transform(() => undefined)
			.notRequired(),
	}),

	fuel_type: yup.string().notRequired(),
	km: yup.number().when({
		is: (val) => !val,
		then: yup
			.number()
			.typeError("KM deve ser número")
			.transform(() => undefined)
			.notRequired(),
		otherwise: yup
			.number()
			.positive("Obrigatório que seja numero positivo")
			.required(),
	}),

	car_color: yup.string().notRequired(),
	price: yup.number().when({
		is: (val) => !val || isNaN(val),
		then: yup
			.number()
			.transform((value, originalValue) => {
				let formated = originalValue
					.replace("R$ ", "")
					.replace(".", "")
					.replace(",", ".");

				formated = Number(formated);

				return formated == 0 ? undefined : formated;
			})
			.typeError("O preço deve ser número")
			.notRequired(),
	}),
	description: yup.string().notRequired(),
	images: yup.object({
		main_image: yup
			.string()
			.url("Necessário que seja uma url")
			.notRequired(),
		image_one: yup
			.string()
			.url("Necessário que seja uma url")
			.notRequired(),
		image_two: yup
			.string()
			.url("Necessário que seja uma url")
			.notRequired(),
		image_three: yup
			.string()
			.url("Necessário que seja uma url")
			.notRequired(),
	}),
});
