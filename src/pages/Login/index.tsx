import { useNavigate } from "react-router-dom";
import { Button, Container, Section, SignInButton } from "./styled";
import { UserContext, iFormLogin } from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../validations";
import { useForm } from "react-hook-form";
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
        <h1>Login</h1>
        <form onSubmit={handleSubmit(signInUser)}>
          <div>
            <label htmlFor="username">Usuário</label>
            <input
              {...register("email")}
              type="text"
              id="username"
              aria-label="E-mail"
              placeholder="Digitar usuário"
            />
            <label htmlFor="password">Senha</label>
            <input
              {...register("password")}
              id="password"
              type={passwordLogin ? "text" : "password"}
              aria-label="Senha"
              placeholder="Digitar senha"
            />
            <BsEyeFill onClick={() => setPasswordLogin(!passwordLogin)} />
          </div>
          <span>Esqueci minha senha</span>
          <Button type="submit" children="Entrar" />
          <h3>Ainda não possui conta?</h3>
          <SignInButton
            children="Cadastrar"
            onClick={() => navigate("/register")}
          />
        </form>
      </Section>
    </Container>
  );
};

export default Login;
