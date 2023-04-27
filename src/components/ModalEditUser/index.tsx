import { useForm } from "react-hook-form";
import {
	StyledButton_alert,
	StyledButton_grey,
	StyledButton_primary,
} from "../../styles/buttons";
import { StyledInput, StyledTextArea } from "../../styles/inputs";
import { StyledHeading_7_500, StyledLabel } from "../../styles/typografy";
import Modal from "../Modal";
import { StyledModalTitle } from "../Modal/styled";
import { StyledDivError, StyledForm } from "./styled";
import { schemaUserUpdate } from "../../validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export interface iUserUpdate {
	name?: string;
	email?: string;
	cpf?: string;
	phone_number?: string;
	birth_date?: string;
	description?: string;
}

const ModalEditUser = ({ closeModal }) => {
	const { updateUser, deleteUser } = useContext(UserContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<iUserUpdate>({
		resolver: yupResolver(schemaUserUpdate),
	});

	function handleDateChange(event) {
		let value = event.target.value;

		// Remove caracteres que não são números
		value = value.replace(/\D/g, "");

		// Adiciona as barras no formato dd/mm/yyyy
		if (value.length > 2 && value.length <= 4) {
			value = `${value.substr(0, 2)}/${value.substr(2)}`;
		} else if (value.length > 4 && value.length <= 8) {
			value = `${value.substr(0, 2)}/${value.substr(2, 2)}/${value.substr(
				4
			)}`;
		}

		event.target.value = value;
	}

	function onSubmitDataValidate(data) {
		for (const key in data) {
			if (data[key] == "") {
				delete data[key];
			}
		}
		updateUser(data, closeModal);
	}
	return (
		<Modal>
			<StyledModalTitle>
				<StyledHeading_7_500>Editar perfil</StyledHeading_7_500>
				<button onClick={() => closeModal()}>X</button>
			</StyledModalTitle>

			<div>
				<StyledForm onSubmit={handleSubmit(onSubmitDataValidate)}>
					<StyledLabel>Nome (opcional)</StyledLabel>
					<StyledInput placeholder="Nome" {...register("name")} />
					<StyledLabel>Email (opcional)</StyledLabel>
					<StyledInput
						placeholder="Email"
						{...register("email")}
						onClickCapture={() => {
							delete errors.email;
							console.log("oi");
						}}
					/>
					{errors.email && (
						<StyledDivError>
							<span>{errors.email.message}</span>
						</StyledDivError>
					)}
					<StyledLabel>CPF (opcional)</StyledLabel>
					<StyledInput placeholder="CPF" {...register("cpf")} />
					{errors.cpf && (
						<StyledDivError>
							<span>{errors.cpf.message}</span>
						</StyledDivError>
					)}

					<StyledLabel>Celular (opcional)</StyledLabel>
					<StyledInput
						placeholder="Celular"
						{...register("phone_number")}
					/>
					{errors.phone_number && (
						<StyledDivError>
							<span>{errors.phone_number.message}</span>
						</StyledDivError>
					)}

					<StyledLabel>Data de Nascimento (opcional)</StyledLabel>
					<StyledInput
						placeholder="Data de Nascimento"
						{...register("birth_date")}
						onChange={handleDateChange}
					/>
					{errors.birth_date && (
						<StyledDivError>
							<span>{errors.birth_date.message}</span>
						</StyledDivError>
					)}
					<StyledLabel>Descrição (opcional)</StyledLabel>
					<StyledTextArea
						placeholder="Descrição"
						{...register("description")}
					/>
					<div>
						<StyledButton_grey
							type="button"
							onClick={() => closeModal()}
						>
							Cancelar
						</StyledButton_grey>

						<StyledButton_alert
							type="button"
							onClick={() => deleteUser(closeModal)}
						>
							Excluir Perfil
						</StyledButton_alert>

						<StyledButton_primary type="submit">
							Salvar Alterações
						</StyledButton_primary>
					</div>
				</StyledForm>
			</div>
		</Modal>
	);
};

export default ModalEditUser;
