import styled from "styled-components";

export const Container = styled.div`

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	background-color: var(--grey-8);
`;

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: var(--grey-10);
	padding: 30px;
	border-radius: 4px;
	max-width: 412px;
	width: 100%;

	@media (max-width: 500px) {
		max-width: 300px;
	}

	form {
		gap: 16px;
		display: flex;
		flex-direction: column;
		margin-top: 32px;

		& > .end {
			align-self: flex-end;
		}

		& > .center {
			align-self: center;
		}
	}
  
  /*
=======
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--grey-8);

  @media (min-width: 767px) {
    display: flex;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--grey-10);
  padding: 30px;
  border-radius: 4px;
  max-width: 412px;
  width: 100%;

  @media (max-width: 767px) {
  }

  @media (max-width: 500px) {
    max-width: 300px;
  }

  form {
    gap: 16px;
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin-bottom: 30px;
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: var(--grey-0);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
  }

  svg {
    position: absolute;
    top: 146px;
    scale: 1.2;
    right: 20px;
    color: var(--grey-2);
    cursor: pointer;
  }

  label {
    font-size: 14px;
    font-weight: 500;
    line-height: 16.94px;
  }

  input {
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    height: 48px;
    padding-left: 10px;
    border-radius: 4px;
    color: var(--grey-3);
    border: 2px solid var(--grey-6);
    background-color: var(--grey-10);
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    align-self: end;
  }

  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--grey-2);
    align-self: center;
  }

  @media (min-width: 1440px) {
    margin-bottom: 0.45rem;
  }
`;

export const Button = styled.button`
  font-family: "Inter";
  font-size: 14px;
  font-weight: 600;
  height: 48px;
  color: var(--grey-10);
  border: none;
  border-radius: 4px;
  background-color: var(--brand-1);
  cursor: pointer;
`;

export const SignInButton = styled.button`
  font-family: "Inter";
  font-size: 14px;
  font-weight: 600;
  height: 48px;
  color: var(--grey-0);
  border-radius: 4px;
  border: var(--grey-8);
  border: 2px solid var(--grey-4);
  background-color: var(--grey-10);
  cursor: pointer;

*/
`;
