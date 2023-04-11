import { useNavigate } from "react-router-dom";
import { Button, Container, Section, SignInButton } from "./styled";
import Header from "../../components/Header";
import { UserContext, iFormLogin } from "../../contexts/UserContext";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../validations";
import { useForm } from "react-hook-form";
import Footer from "../../components/Footer";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLogin>({
    resolver: yupResolver(schemaLogin),
  });

  const navigate = useNavigate();

  const { signInUser } = useContext(UserContext);

  return (
    <>

      <Header />
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
                type="text"
                id="password"
                aria-label="Senha"
                placeholder="Digitar senha"
              />
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
      <Footer/>
    </>
  );
};

export default Login;
