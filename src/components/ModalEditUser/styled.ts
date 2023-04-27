import styled from "styled-components";

export const StyledForm = styled.form`
	margin-top: 16px;
	& > label {
		color: var(--grey-1);
		margin-bottom: 8px;
	}
	& > input {
		width: 100%;
		margin-bottom: 24px;
	}

	& > textArea {
		width: 100%;
		margin-bottom: 24px;
	}

	& > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 16px;

		& > button {
			width: 160px;
			padding: 12px 4px;
		}

		@media (max-width: 621px) {
			flex-direction: column;
		}
	}
`;

export const StyledDivError = styled.div`
	margin: 0;
	padding: 0;
	position: relative;
	top: -14px;

	& > span {
		color: var(--alert-1);
		font-size: 14px;
		line-height: 0px;

		position: absolute;
		top: 0;
		left: 0;
	}
`;
