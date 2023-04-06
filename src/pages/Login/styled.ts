import styled from "styled-components";

export const Container = styled.div`
	flex-direction: column;
	align-items: center;
	background: var(--gray-8);
	height: 100vh;
	gap: 10%;
	@media (min-width: 767px) {
		display: flex;
	}
`;

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: var(--gray-10);
	padding: 30px;
	border-radius: 4px;
	margin-top: 90px;
	max-width: 412px; 
	width: 100%;

  	@media (max-width: 767px) {
		margin-left: auto;
		margin-right: auto;
		margin-top: 22px;
  	}

  	@media (max-width: 500px) {
		margin-left: auto;
		margin-right: auto;
		margin-top: 42px;
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
		color: var(--gray-0);
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 16px;
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
		color: var(--gray-3);
		border: 2px solid var(--gray-6);
		background-color:var(--gray-10);
	}

	span {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 24px;
		align-self: end;
	}

	h3 {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 24px;
		color: var(--gray-2);
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
  color: var(--gray-10);
  border: none;
	border-radius: 4px;
  background-color:var(--brand-1);
  cursor: pointer;
`;

export const SignInButton = styled.button`
  font-family: "Inter";
	font-size: 14px;
  font-weight: 600;
	height: 48px;
  color: var(--gray-0);
  border-radius: 4px;
  border: var(--gray-8);
	border: 2px solid var(--gray-4);
	background-color:var(--gray-10);
  cursor: pointer;
`;