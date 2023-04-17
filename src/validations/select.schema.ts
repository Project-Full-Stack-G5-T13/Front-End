import * as yup from "yup";

export const schemaAddAd = yup.object({
	model: yup.string().required("Modelo obrigatório"),
});
