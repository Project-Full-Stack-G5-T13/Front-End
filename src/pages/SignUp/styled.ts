import styled, { css } from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
	margin: 20px 0;
	max-width: 412px;
	width: 100%;
	margin-bottom: 20px;

	@media (max-width: 767px) {
		margin-left: auto;
		margin-right: auto;
	}

	@media (max-width: 500px) {
		margin-left: auto;
		margin-right: auto;
		max-width: 300px;
	}

	form {
		gap: 20px;
		display: flex;
		flex-direction: column;
	}

	div {
		gap: 10px;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	svg {
		position: absolute;
		top: 43px;
		scale: 1.2;
		right: 20px;
		color: var(--grey-2);
		cursor: pointer;
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

	label {
		color: var(--grey-0);
		margin-left: 5px;
	}

	p {
		margin: 2px 0 0 5px;
		color: var(--alert-1);
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

export const Article = styled.article`
	display: flex;
	flex-direction: row;
	gap: 10%;
	position: relative;

	div {
		display: flex;
		flex-direction: column;
		width: 45%;
	}

	p {
		line-height: normal;
	}

	.white_btn {
		font-family: "Inter";
		font-size: 14px;
		font-weight: 600;
		height: 48px;
		width: 100%;
		color: var(--grey-0);
		border: 2px solid var(--grey-6);
		background-color: var(--grey-10);
		border-radius: 4px;
		cursor: pointer;
		:hover {
			background-color: var(--brand-1);
			color: var(--fixed-white);
			border: 2px solid var(--grey-6);
		}
	}

	.selected {
		background-color: var(--brand-1);
		color: var(--grey-10);
		border: none;
		border-radius: 4px;
	}
`;
