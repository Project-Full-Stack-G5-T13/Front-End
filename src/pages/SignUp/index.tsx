import { useNavigate } from "react-router-dom";
import { Button, Container, Article } from "./styled";
import { UserContext } from "../../contexts/UserContext";
import { Section } from "./styled";
import { schemaSignup } from "../../validations/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormSignup } from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { StyledLabel } from "../../styles/typografy";
import { StyledInput } from "../../styles/inputs";
import { BsEyeFill } from "react-icons/bs";

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormSignup>({
		resolver: yupResolver(schemaSignup),
	});

	const [validatedIsSeller, setValidatedIsSeller] = useState<boolean>(false);

	const [advertiserBuyer, setAdvertiserBuyer] = useState<string | boolean>(
		""
	);
	const [confirmPassword, setConfirmPassword] = useState(false);
	const [password, setPassword] = useState(false);
	const { registerUser } = useContext(UserContext);

	function validatedAccountType(data: IFormSignup) {
		if (advertiserBuyer && advertiserBuyer !== "") {
			data.is_seller = true;
			setAdvertiserBuyer(false);
			registerUser(data);
		} else if (!advertiserBuyer && advertiserBuyer !== "") {
			data.is_seller = false;
			setAdvertiserBuyer(false);
			registerUser(data);
		} else if (data.is_seller === undefined) {
			setValidatedIsSeller(true);
		}
	}

	return (
		<>
			<Container>
				<Section>
					<h1>Cadastro</h1>
					<form onSubmit={handleSubmit(validatedAccountType)}>
						<h4>Informações pessoais</h4>
						<div>
							<StyledLabel>Name</StyledLabel>

							<StyledInput
								{...register("name")}
								placeholder="Ex: Samnuel"
							/>
							<p className="heading-8-500">
								{errors.name?.message}
							</p>
						</div>
						<div>
							<StyledLabel>Email</StyledLabel>
							<StyledInput
								{...register("email")}
								placeholder="Ex: samuelk@kenzie.com.br"
							/>

							<p className="heading-8-500">
								{errors.email?.message}
							</p>
						</div>
						<div>
							<StyledLabel>CPF</StyledLabel>
							<StyledInput
								{...register("cpf")}
								placeholder="Ex: 15748568788"
							/>
							<p className="heading-8-500">
								{errors.cpf?.message}
							</p>
						</div>
						<div>
							<StyledLabel>Celular</StyledLabel>
							<StyledInput
								{...register("phone_number")}
								placeholder="Ex: 14981754895"
							/>

							<p className="heading-8-500">
								{errors.phone_number?.message}
							</p>
						</div>
						<div>
							<StyledLabel>Data de nascimento</StyledLabel>
							<StyledInput
								{...register("birth_date")}
								placeholder="Ex: 00/00/0000"
							/>
							<p className="heading-8-500">
								{errors.birth_date?.message}
							</p>
						</div>
						<div>
							<StyledLabel>Descrição</StyledLabel>
							<StyledInput
								{...register("description")}
								placeholder="Digitar descrição"
							/>

							<p className="heading-8-500">
								{" "}
								{errors.description?.message}
							</p>
						</div>
						<div>
							<StyledLabel>
								Imagem de perfil (opcional)
							</StyledLabel>
							<StyledInput
								{...register("image_url")}
								placeholder="Url da imagem"
							/>
						</div>
						<h4>Informações de endereço</h4>
						<div>
							<StyledLabel>CEP</StyledLabel>
							<StyledInput
								{...register("address.zip_code")}
								placeholder="Ex: 17340480"
							/>

							<p className="heading-8-500">
								{errors.address?.zip_code?.message}
							</p>
						</div>
						<Article>
							<div>
								<StyledLabel>Estado</StyledLabel>
								<StyledInput
									{...register("address.state")}
									placeholder="Digitar Estado"
								/>

								<p className="heading-8-500">
									{errors.address?.state?.message}
								</p>
							</div>
							<div>
								<StyledLabel>Cidade</StyledLabel>
								<StyledInput
									{...register("address.city")}
									placeholder="Digitar Cidade"
								/>

								<p className="heading-8-500">
									{errors.address?.city?.message}
								</p>
							</div>
						</Article>
						<div>
							<StyledLabel>Rua</StyledLabel>
							<StyledInput
								{...register("address.street")}
								placeholder="Digitar Rua"
							/>

							<p className="heading-8-500">
								{errors.address?.street?.message}
							</p>
						</div>
						<Article>
							<div>
								<StyledLabel>Número</StyledLabel>
								<StyledInput
									{...register("address.number")}
									placeholder="Digitar número"
								/>

								<p className="heading-8-500">
									{errors.address?.number?.message}
								</p>
							</div>
							<div>
								<StyledLabel>Complemento</StyledLabel>
								<StyledInput
									{...register("address.complement")}
									placeholder="Ex: apart. 201"
								/>
								<p className="heading-8-500">
									{errors.address?.complement?.message}
								</p>
							</div>
						</Article>
						<h4>Tipo de conta</h4>
						<Article>
							<button
								onClick={() => setAdvertiserBuyer(false)}
								type="button"
								className={`white_btn ${
									!advertiserBuyer && advertiserBuyer !== ""
										? "selected"
										: ""
								}`}
							>
								Comprador
							</button>
							<button
								onClick={() => setAdvertiserBuyer(true)}
								type="button"
								className={`white_btn ${
									advertiserBuyer && advertiserBuyer !== ""
										? "selected"
										: ""
								}`}
							>
								Anunciante
							</button>
						</Article>

						{validatedIsSeller && (
							<p>Tipo de conta é obrigatório</p>
						)}

						<div>
							<StyledLabel>Senha</StyledLabel>
							<StyledInput
								{...register("password")}
								type={password ? "text" : "password"}
								placeholder="Digitar senha"
							/>
							<BsEyeFill onClick={() => setPassword(!password)} />

							<p className="heading-8-500">
								{errors.password?.message}
							</p>
						</div>
						<div>
							<StyledLabel>Confirmar Senha</StyledLabel>
							<StyledInput
								{...register("confirmPassword")}
								type={confirmPassword ? "text" : "password"}
								placeholder="Digitar senha"
							/>

							<BsEyeFill
								onClick={() =>
									setConfirmPassword(!confirmPassword)
								}
							/>
							<p className="heading-8-500">
								{errors.confirmPassword?.message}
							</p>
						</div>
						<Button type="submit" children="Finalizar Cadastro" />
					</form>
				</Section>
			</Container>
		</>
	);
};

export default Register;
