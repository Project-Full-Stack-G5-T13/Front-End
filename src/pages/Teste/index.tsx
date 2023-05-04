import { useForm } from "react-hook-form";
import { StyledSelect } from "../../styles/select";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaTeste } from "../../validations/select.schema";
import { StyledTeste } from "./styled";
import { useEffect, useState } from "react";
import { StyledInput } from "../../styles/inputs";

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
		fuel_type: string;
		brand: string;
	}
	function mostrar(data: any) {
		console.log(data);
	}

	const [myState, setMyState] = useState("");

	const [brand, setBrand] = useState("");
	const [fuelType, setFuelType] = useState("");

	const {
		register,
		handleSubmit,
		control,
		setValue,
		formState: { errors },
	} = useForm<IAddAd>({ resolver: yupResolver(schemaTeste) });

	useEffect(() => {
		if (myState) {
			setValue("brand", "Ford");
			setValue("fuel_type", "Flex");
		}
	}, [myState]);

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

					<StyledInput placeholder="brand" {...register("brand")} />
					<StyledInput placeholder="combustivel" {...register("fuel_type")} />

					<button type="submit">Clique aqui</button>
				</form>
			</div>
		</StyledTeste>
	);
};

export default Teste;
