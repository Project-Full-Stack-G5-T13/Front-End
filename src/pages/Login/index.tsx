import { useNavigate } from "react-router-dom";
import { Container, Section } from "./styled";
import { UserContext, iFormLogin } from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../validations";
import { useForm } from "react-hook-form";

import {
	StyledBody_2_400,
	StyledBody_2_500,
	StyledHeading_5_500,
	StyledLabel,
} from "../../styles/typografy";
import { StyledInput } from "../../styles/inputs";
import {
	StyledButton_primary,
	StyledButton_white_outline,
} from "../../styles/buttons";

import { BsEyeFill } from "react-icons/bs";


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLogin>({
    resolver: yupResolver(schemaLogin),
  });

  const navigate = useNavigate();
  const [passwordLogin, setPasswordLogin] = useState(false);

  const { signInUser } = useContext(UserContext);


	return (
		<Container>
			<Section>
				<StyledHeading_5_500>Login</StyledHeading_5_500>
				<form onSubmit={handleSubmit(signInUser)}>
					<StyledLabel htmlFor="username">Usuário</StyledLabel>

					<StyledInput
						{...register("email")}
						type="text"
						id="username"
						aria-label="E-mail"
						placeholder="Digitar usuário"
					/>
					<StyledLabel htmlFor="password">Senha</StyledLabel>

					<StyledInput
						{...register("password")}
						type="text"
						id="password"
						aria-label="Senha"
						placeholder="Digitar senha"
					/>

					<StyledBody_2_500 className="end">
						Esqueci minha senha
					</StyledBody_2_500>
					<StyledButton_primary type="submit">
						Entrar
					</StyledButton_primary>
					<StyledBody_2_400 className="center">
						Ainda não possui conta?
					</StyledBody_2_400>
					<StyledButton_white_outline
						onClick={() => navigate("/register")}
					>
						Cadastrar
					</StyledButton_white_outline>
				</form>
			</Section>
		</Container>
	);

};

export default Login;
