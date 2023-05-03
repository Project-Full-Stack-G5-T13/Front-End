import styled from "styled-components";

export const Section = styled.section`
	display: flex;
	flex-direction: row;
	flex-flow: row wrap;
	width: 100%;
	gap: 30px;
	/* max-width: 1012px; */
	flex-wrap: wrap;
	align-content: flex-start;
	justify-content: stretch;
	padding-top: 40px;

	@media (max-width: 768px) {
		width: 100%;

		flex-wrap: nowrap;
		overflow-y: scroll;
		height: fit-content;
		padding: 16px;
	}
`;
