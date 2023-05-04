import styled from "styled-components";

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 24px;
	margin-top: 16px;

	.input-container {
		width: 100%;

		& > label {
			color: var(--grey-1);
			margin-bottom: 8px;
		}
		& > input {
			width: 100%;
		}

		& > textArea {
			width: 100%;
		}

		& > .errors {
			top: 8px;
		}
	}

	& > .side-by-side-inputs {
		display: flex;
		justify-content: space-between;

		& > .input-container {
			width: 46%;
		}

		@media (max-width: 450px) {
			flex-direction: column;
			gap: 24px;

			& > .input-container {
				width: 100%;
			}
		}
	}

	& > button {
		align-self: center;
	}

	.button-container {
		display: flex;
		justify-content: space-between;

		& > button {
			width: calc(40%);
			min-width: fit-content;
		}

		@media (max-width: 470px) {
			flex-direction: column;
			gap: 24px;

			& > button {
				width: 100%;
			}
		}
	}

	.button-selected {
		background-color: var(--brand-1);
		border-color: var(--brand-1);
		color: var(--fixed-white);
	}
`;
