import styled from "styled-components";

export const Main = styled.main`
	display: flex;
	flex-direction: row;
	width: 100%;
	/* min-height: 100%; */
	margin-bottom: 20px;
	color: var(--fixed-white);
	gap: 50px;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}

	.btn_container {
		max-width: 280px;
		margin: 30px auto;

		& > button {
			width: 100%;
		}
	}
`;
