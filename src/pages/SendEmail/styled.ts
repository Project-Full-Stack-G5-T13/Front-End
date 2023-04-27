import styled from "styled-components";

export const ContainerSendEmailAndResetPassword = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h6 {
    text-align: center;
  }

  form {
    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 15px;
    gap: 15px;
    background-color: var(--grey-10);
    border-radius: 5px;
    max-width: 430px;
    position: relative;
  }


  

  label {
    margin-left: 5px;
  }

  p {
    color: var(--alert-1);
    font-size: 14px;
    margin-left: 5px;
  }
`;
