import { StyledHeading_6_600, StyledLabel } from "../../styles/typografy";
import { ContainerSendEmailAndResetPassword } from "./styled";
import { StyledButton_primary } from "../../styles/buttons";
import { UserContext } from "../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSendEmail } from "../../validations";
import { StyledInput } from "../../styles/inputs";
import { useForm } from "react-hook-form";
import { useContext } from "react";

export interface iSendEmail {
  email: string;
}

function SendEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iSendEmail>({
    resolver: yupResolver(schemaSendEmail),
  });

  const { sendEmail } = useContext(UserContext);

  return (
    <ContainerSendEmailAndResetPassword>
      <form onSubmit={handleSubmit(sendEmail)}>
        <StyledHeading_6_600>Recuperação de senha</StyledHeading_6_600>

        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput
          {...register("email")}
          type="text"
          id="email"
          aria-label="E-mail"
          placeholder="Digite seu email..."
        />
        <p className="heading-8-500">{errors.email?.message}</p>
        <StyledButton_primary>Enviar email</StyledButton_primary>
      </form>
    </ContainerSendEmailAndResetPassword>
  );
}

export default SendEmail;
