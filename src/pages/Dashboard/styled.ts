import styled from "styled-components";

export const Main = styled.main`
	display: flex;
	flex-direction: row;
	width: 100%;
	/* min-height: 100%; */
	margin-bottom: 20px;
	color: var(--fixed-white);
	gap: 100px;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}

	.btn_container {
		width: 280px;
		margin: 0 auto 50px auto;

		& > button {
			width: 100%;
		}
	}
`;
