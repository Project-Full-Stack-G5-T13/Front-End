import styled from "styled-components";

export const StyledModal = styled.div`
	position: absolute;
	top: 70px;
	background-color: #1e1c1c9e;
	width: 100%;
	height: auto;
	z-index: 900;
	padding: 1rem;

	& > div {
		margin: 0 auto;
		margin-bottom: 50px;
		background-color: var(--fixed-white);
		border-radius: 5px;
		padding: 0 1.5rem 1rem 1.5rem;
		width: 95%;
		gap: 2rem;
	}

	@media (min-width: 768px) {
		& > div {
			width: 520px;
		}
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
