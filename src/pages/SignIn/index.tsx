import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { Button, Container, Article, SignInButton } from "./styled";
import { Section } from "./styled";
const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <Section>
          <h1>Cadastro</h1>
          <form>
            <div>
              <h4>Informações pessoais</h4>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                aria-label="name"
                placeholder="Ex: Samuel"
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                aria-label="email"
                placeholder="Ex: samuelk@kenzie.com.br"
              />
              <label htmlFor="celular">CPF</label>
              <input
                type="text"
                id="cpf"
                aria-label="cpf"
                placeholder="000.000.000-00"
              />
              <label htmlFor="phonenumber">Celular</label>
              <input
                type="text"
                id="phonenumber"
                aria-label="phonenumber"
                placeholder="(DDD) 90000-0000"
              />
              <label htmlFor="birthdate">Data de nascimento</label>
              <input
                type="text"
                id="birthdate"
                aria-label="birthdate"
                placeholder="00/00/0000"
              />
              <label htmlFor="description">Descrição</label>
              <input
                type="text"
                id="description"
                aria-label="description"
                placeholder="Digitar descrição"
              />
              <p>Informações de endereço</p>
              <label htmlFor="zipcode">CEP</label>
              <input
                type="text"
                id="zipcode"
                aria-label="zipcode"
                placeholder="00000.000"
              />
              <Article>
                <div>
                  <label htmlFor="state">Estado</label>
                  <input
                    type="text"
                    id="state"
                    aria-label="state"
                    placeholder="Digitar Estado"
                  />                  
                </div>
                <div>
                  <label htmlFor="city">Cidade</label>
                  <input
                      type="text"
                      id="city"
                      aria-label="city"
                      placeholder="Digitar Cidade"
                  />                  
                </div>
              </Article>
                <label htmlFor="street">Rua</label>
                <input
                  type="text"
                  id="street"
                  aria-label="street"
                  placeholder="Digitar Rua"
                />
                <Article>
                  <div>
                    <label htmlFor="number">Número</label>
                    <input
                      type="text"
                      id="number"
                      aria-label="number"
                      placeholder="Digitar número"
                    /> 
                  </div>
                  <div>
                    <label htmlFor="addressDescription">Complemento</label>
                    <input
                      type="text"
                      id="addressDescription"
                      aria-label="addressDescription"
                      placeholder="Ex: apart. 201"
                    /> 
                  </div>
                </Article>
                <h4>Tipo de conta</h4> 
                <Article>
                    <button className="purple_btn" type="submit">Comprador</button>
                    <button className="white_btn" type="submit">Anunciante</button>
                </Article>
                  <label htmlFor="password">Senha</label>
                  <input
                    type="text"
                    id="password"
                    aria-label="password"
                    placeholder="Digitar senha"
                  /> 
                  <label htmlFor="confirmpassword">Confirmar Senha</label>
                 <input
                    type="text"
                    id="confirmpassword"
                    aria-label="confirmpassword"
                    placeholder="Digitar senha"
                  /> 
                </div>
            <Button type="submit" children="Finalizar Cadastro"/>
          </form>
        </Section>
      </Container>
    </>
  );
};

export default Register;
