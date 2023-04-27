import { ContainerSendEmailAndResetPassword } from "../SendEmail/styled";
import { StyledHeading_6_600, StyledLabel } from "../../styles/typografy";
import { StyledButton_primary } from "../../styles/buttons";
import { schemaResetPassword } from "../../validations";
import { UserContext } from "../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledInput } from "../../styles/inputs";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { BsEyeFill } from "react-icons/bs";

export interface iResetPassword {
  password: string;
  confirmPassword: string;
}

function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iResetPassword>({
    resolver: yupResolver(schemaResetPassword),
  });

  let { token } = useParams();
  const { resetPassword } = useContext(UserContext);

  const handlePassword = (data: iResetPassword) => {
    resetPassword(data, token);
  };

  return (
    <ContainerSendEmailAndResetPassword>
      <form onSubmit={handleSubmit(handlePassword)}>
        <StyledHeading_6_600>Recuperação de senha</StyledHeading_6_600>

        <StyledLabel htmlFor="password">Senha</StyledLabel>
        <StyledInput
          {...register("password")}
          id="password"
          placeholder="Digite sua nova senha..."
          type="password"
        />

        <p className="heading-8-500">{errors.password?.message}</p>

        <StyledLabel htmlFor="confirmPassword">
          Confirmação de senha
        </StyledLabel>
        <StyledInput
          {...register("confirmPassword")}
          id="confirmPassword"
          placeholder="Confirme sua senha..."
          type="password"
        />

        <p className="heading-8-500">{errors.confirmPassword?.message}</p>

        <StyledButton_primary>Redefinir senha</StyledButton_primary>
      </form>
    </ContainerSendEmailAndResetPassword>
  );
}

export default ResetPassword;
