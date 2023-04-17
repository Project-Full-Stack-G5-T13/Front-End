import { useForm } from "react-hook-form";
import { StyledSelect } from "../../styles/select";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaAddAd } from "../../validations/select.schema";
import { StyledTeste } from "./styled";

const Teste = () => {
	// itens necessarios para fazer o select funcionar

	const selectOptions = [
		{ value: "uno", label: "uno" },
		{ value: "palio", label: "palio" },
		{ value: "ferrari", label: "ferrari" },
		{ value: "corolla", label: "corolla" },
	];
	interface IAddAd {
		model: string;
	}
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<IAddAd>({ resolver: yupResolver(schemaAddAd) });

	return (
		<StyledTeste>
			<StyledSelect
				name="model"
				placeholder="Selecione um modelo"
				control={control}
				options={selectOptions}
			/>
		</StyledTeste>
	);
};

export default Teste;
