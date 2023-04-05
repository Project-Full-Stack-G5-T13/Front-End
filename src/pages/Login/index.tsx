import { useNavigate } from "react-router-dom";
import { Button, Container, Section, SignInButton } from "./styled";
import Header from "../../components/Header";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <Section>
          <h1>Login</h1>
          <form>
            <div>
              <label htmlFor="username">Usuário</label>
              <input
                type="text"
                id="username"
                aria-label="E-mail"
                placeholder="Digitar usuário"
              />
              <label htmlFor="password">Usuário</label>
              <input
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
    </>
  );
};

export default Login;
