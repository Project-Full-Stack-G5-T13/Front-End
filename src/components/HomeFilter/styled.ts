import styled from "styled-components";

export const Div = styled.div`
	width: 380px;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	padding: 20px;
	gap: 20px;

	& > ul {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-height: 300px;
		overflow-y: auto;

		& > h6 {
			color: var(--grey-3);
			cursor: pointer;
			margin-left: 10px;
			margin-top: 4px;
		}
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	section div {
		margin: 0 auto;
		width: 100%;
		max-width: 500px;
		display: flex;
		justify-content: space-between;
		flex-flow: row;
		flex-wrap: wrap;
		gap: 20px;
	}

	input {
		max-width: 100px;
		height: 37px;
		border-style: none;
		border-radius: 4px;
		background-color: var(--grey-5);
		font-family: "Lexend";
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		text-align: center;
	}
`;
