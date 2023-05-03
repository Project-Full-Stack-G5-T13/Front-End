import styled from "styled-components";

export const StyledTeste = styled.div`
	width: 100%;
	height: 1600px;
	background-color: aqua;
	padding: 20px;
	& > div {
		max-width: 500px;
		margin: 0 auto;

		& > form {
			display: flex;
			flex-direction: column;
			gap: 20px;
		}
	}
`;
