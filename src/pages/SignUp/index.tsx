import { useNavigate } from "react-router-dom";
import { Button, Container, Article, SignInButton } from "./styled";
import { UserContext } from "../../contexts/UserContext";
import { Section } from "./styled";
import { schemaSignup } from "../../validations/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iFormSignup } from "../../contexts/UserContext";
import { useContext, useState } from "react";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormSignup>({
    resolver: yupResolver(schemaSignup),
  });

  const [validatedIsSeller, setValidatedIsSeller] = useState<boolean>(false);
  const [advertiserBuyer, setAdvertiserBuyer] = useState<string | boolean>("");
  const { registerUser } = useContext(UserContext);

  function validatedAccountType(data: iFormSignup) {
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
            <label htmlFor="name">Nome</label>
            <input
              {...register("name")}
              type="text"
              id="name"
              aria-label="name"
              placeholder="Ex: Samuel"
            />
            <p className="heading-8-500">{errors.name?.message}</p>

            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              type="text"
              id="email"
              aria-label="email"
              placeholder="Ex: samuelk@kenzie.com.br"
            />

            <p className="heading-8-500">{errors.email?.message}</p>

            <label htmlFor="celular">CPF</label>
            <input
              {...register("cpf")}
              type="text"
              id="cpf"
              aria-label="cpf"
              placeholder="Ex: 15748568788"
            />
            <p className="heading-8-500">{errors.cpf?.message}</p>
            <label htmlFor="phonenumber">Celular</label>
            <input
              {...register("phone_number")}
              type="text"
              id="phonenumber"
              aria-label="phonenumber"
              placeholder="Ex: 14981754895"
            />
            <p className="heading-8-500">{errors.phone_number?.message}</p>
            <label htmlFor="birthdate">Data de nascimento</label>
            <input
              {...register("birth_date")}
              type="text"
              id="birthdate"
              aria-label="birthdate"
              placeholder="00/00/0000"
            />
            <p className="heading-8-500">{errors.birth_date?.message}</p>
            <label htmlFor="description">Descrição</label>
            <input
              {...register("description")}
              type="text"
              id="description"
              aria-label="description"
              placeholder="Digitar descrição"
            />
            <p className="heading-8-500"> {errors.description?.message}</p>
            <label htmlFor="imagem">Imagem de perfil (opcional)</label>
            <input
              {...register("image_url")}
              type="text"
              id="imagem"
              aria-label="image-profile"
              placeholder="Url da imagem"
            />
            <h4>Informações de endereço</h4>
            <label htmlFor="zipcode">CEP</label>
            <input
              {...register("address.zip_code")}
              type="text"
              id="zipcode"
              aria-label="zipcode"
              placeholder="Ex: 12570670"
            />
            <p className="heading-8-500">{errors.address?.zip_code?.message}</p>
            <Article>
              <div>
                <label htmlFor="state">Estado</label>
                <input
                  {...register("address.state")}
                  type="text"
                  id="state"
                  aria-label="state"
                  placeholder="Digitar Estado"
                />
                <p className="heading-8-500">
                  {errors.address?.state?.message}
                </p>
              </div>
              <div>
                <label htmlFor="city">Cidade</label>
                <input
                  {...register("address.city")}
                  type="text"
                  id="city"
                  aria-label="city"
                  placeholder="Digitar Cidade"
                />
                <p className="heading-8-500">{errors.address?.city?.message}</p>
              </div>
            </Article>
            <label htmlFor="street">Rua</label>
            <input
              {...register("address.street")}
              type="text"
              id="street"
              aria-label="street"
              placeholder="Digitar Rua"
            />
            <p className="heading-8-500">{errors.address?.street?.message}</p>
            <Article>
              <div>
                <label htmlFor="number">Número</label>
                <input
                  {...register("address.number")}
                  type="text"
                  id="number"
                  aria-label="number"
                  placeholder="Digitar número"
                />
                <p className="heading-8-500">
                  Digite AQUI
                </p>
              </div>
              <div>
                <label htmlFor="addressDescription">Complemento</label>
                <input
                  {...register("address.complement")}
                  type="text"
                  id="addressDescription"
                  aria-label="addressDescription"
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
                className="white_btn"
              >
                Comprador
              </button>
              <button
                onClick={() => setAdvertiserBuyer(true)}
                type="button"
                className="white_btn"
              >
                Anunciante
              </button>
            </Article>
            {validatedIsSeller && <p>Tipo de conta é obrigatório</p>}
            <label htmlFor="password">Senha</label>
            <input
              {...register("password")}
              type="text"
              id="password"
              aria-label="password"
              placeholder="Digitar senha"
            />
            <p className="heading-8-500">{errors.password?.message}</p>
            <label htmlFor="confirmpassword">Confirmar Senha</label>
            <input
              {...register("confirmPassword")}
              type="text"
              id="confirmpassword"
              aria-label="confirmpassword"
              placeholder="Digitar senha"
            />
            <p className="heading-8-500">{errors.confirmPassword?.message}</p>
            <Button type="submit" children="Finalizar Cadastro" />
          </form>
        </Section>
      </Container>
    </>
  );
};

export default Register;
