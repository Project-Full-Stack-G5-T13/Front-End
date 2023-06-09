import { useForm } from "react-hook-form";
import { StyledButton_grey, StyledButton_primary } from "../../styles/buttons";
import { StyledInput } from "../../styles/inputs";
import { StyledHeading_7_500, StyledLabel } from "../../styles/typografy";
import Modal from "../Modal";
import { StyledModalTitle } from "../Modal/styled";
import { StyledDivError, StyledForm } from "./styled";
import { schemaAddressUpdate } from "../../validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export interface IAddressUpdate {
	zip_code: string;
	state: string;
	city: string;
	street: string;
	number: string;
	complement?: string;
}

export interface IAddressUpdateRequest {
	address: {
		zip_code: string;
		state: string;
		city: string;
		street: string;
		number: string;
		complement?: string;
	};
}

const ModalEditAddress = ({ closeModal }) => {
	const { updateUser, checkZipCode } = useContext(UserContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setValue,
	} = useForm<IAddressUpdate>({
		resolver: yupResolver(schemaAddressUpdate),
		shouldUnregister: true,
	});

	const onSubmitDataValidate = (data) => {
		for (const key in data) {
			if (data[key] == "") {
				delete data[key];
			}
		}

		const newAddress = {
			address: {
				...data,
			},
		};

		updateUser(newAddress, closeModal);
	};

	const [zip_code, state, city, street, number] = watch([
		"zip_code",
		"state",
		"city",
		"street",
		"number",
	]);

	const allFields = Boolean(zip_code && state && city && street && number);

	return (
		<Modal>
			<StyledModalTitle>
				<StyledHeading_7_500>Editar endereço</StyledHeading_7_500>
				<button onClick={() => closeModal()}>X</button>
			</StyledModalTitle>

			<div>
				<StyledForm onSubmit={handleSubmit(onSubmitDataValidate)}>
					<StyledLabel>
						CEP
						<StyledInput
							maxLength={8}
							placeholder="CEP"
							{...register("zip_code")}
							onChange={(event) => checkZipCode(event, setValue)}
						/>
						{errors.zip_code && (
							<StyledDivError>
								<span>{errors.zip_code.message}</span>
							</StyledDivError>
						)}
					</StyledLabel>

					<div className="input_container">
						<StyledLabel width="47%">
							Estado
							<StyledInput
								placeholder="Estado"
								readOnly
								{...register("state")}
							/>
							{errors.state && (
								<StyledDivError>
									<span>{errors.state.message}</span>
								</StyledDivError>
							)}
						</StyledLabel>

						<StyledLabel width="47%">
							Cidade
							<StyledInput
								placeholder="Cidade"
								readOnly
								{...register("city")}
							/>
							{errors.city && (
								<StyledDivError>
									<span>{errors.city.message}</span>
								</StyledDivError>
							)}
						</StyledLabel>
					</div>

					<StyledLabel>
						Rua
						<StyledInput
							placeholder="Rua"
							readOnly
							{...register("street")}
						/>
						{errors.street && (
							<StyledDivError>
								<span>{errors.street.message}</span>
							</StyledDivError>
						)}
					</StyledLabel>

					<div className="input_container">
						<StyledLabel width="47%">
							Número
							<StyledInput
								placeholder="Número"
								{...register("number")}
							/>
							{errors.number && (
								<StyledDivError>
									<span>{errors.number.message}</span>
								</StyledDivError>
							)}
						</StyledLabel>

						<StyledLabel width="47%">
							Complemento (opcional)
							<StyledInput
								placeholder="Complemento"
								{...register("complement", { required: false })}
							/>
						</StyledLabel>
					</div>

					<div className="buttons_container ">
						<StyledButton_grey
							type="button"
							onClick={() => closeModal()}
						>
							Cancelar
						</StyledButton_grey>

						<StyledButton_primary
							type="submit"
							disabled={!allFields}
						>
							Salvar Alterações
						</StyledButton_primary>
					</div>
				</StyledForm>
			</div>
		</Modal>
	);
};

export default ModalEditAddress;
