import { useForm } from "react-hook-form";
import { StyledSelect } from "../../styles/select";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaAddAd } from "../../validations/select.schema";
import { StyledTeste } from "./styled";
import { useEffect, useState } from "react";

const Teste = () => {
	// itens necessarios para fazer o select funcionar

	const selectOptions = [
		{ value: "uno", label: "uno" },
		{ value: "palio", label: "palio" },
		{ value: "ferrari", label: "ferrari" },
		{ value: "corolla", label: "corolla" },
		{ value: "corolla", label: "corolla" },
		{ value: "corolla", label: "corolla" },
		{ value: "corolla", label: "corolla" },
		{ value: "corolla", label: "corolla" },
		{ value: "corolla", label: "corolla" },
	];
	interface IAddAd {
		model: string;
	}
	function mostrar(data: any) {
		console.log(data);
	}

	const [myState, setMyState] = useState("");

	useEffect(() => {
		console.log(myState);
	}, [myState]);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<IAddAd>({ resolver: yupResolver(schemaAddAd) });

	return (
		<StyledTeste>
			<div>
				<form onSubmit={handleSubmit(mostrar)}>
					<StyledSelect
						name="model"
						placeholder="Selecione um modelo"
						control={control}
						options={selectOptions}
						setState={setMyState}
					/>

					<button type="submit">Clique aqui</button>
				</form>
			</div>
		</StyledTeste>
	);
};

export default Teste;
