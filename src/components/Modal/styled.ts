import styled from "styled-components";

export const StyledModal = styled.div`
	position: absolute;
	top: 70px;
	background-color: #1e1c1c9e;
	width: 100vw;
	height: auto;
	z-index: 900;
	padding: 1rem;

	& > div {
		margin: 0 auto;
		margin-bottom: 50px;
		background-color: var(--fixed-white);
		/* width: 150px;
		height: 150px; */
		padding: 0 1.5rem;
		gap: 2rem;
	}
`;

export const StyledModalTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 0;

	& > button {
		color: var(--grey-4);
		font-size: 24px;
		font-weight: 800;
		border: none;
		background-color: transparent;
	}
`;
