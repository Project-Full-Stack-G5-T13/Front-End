import styled from "styled-components";

export const StyledForm = styled.form`
	margin-top: 16px;
	label {
		color: var(--grey-1);
		margin-bottom: 24px;
	}

	& > .input_container {
		display: flex;
		justify-content: space-between;
		width: 100%;
		/* margin-bottom: 24px; */

		@media (max-width: 455px) {
			flex-direction: column;
			margin-bottom: 0;
			& > label {
				width: 100%;
				margin-bottom: 24px;
			}
		}
	}

	& > textArea {
		width: 100%;
		margin-bottom: 24px;
	}

	& > .buttons_container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 16px;

		& > button {
			width: 160px;
			padding: 12px 4px;
		}

		@media (max-width: 440px) {
			flex-direction: column;
			justify-content: center;
		}
	}
`;

export const StyledDivError = styled.div`
	margin: 0;
	padding: 0;
	position: relative;
	top: -6px;
	height: 0px;

	& > span {
		color: var(--alert-1);
		font-size: 14px;
		position: absolute;
		top: 0;
		left: 0;
	}
`;
