import styled from "styled-components";

export const StyledInput = styled.input`
	padding: 0px 16px;
	height: 48px;
	color: var(--grey-1);
	border: 1.5px solid var(--grey-7);
	border-radius: 4px;

	::placeholder {
		font-weight: 400;
		font-size: 16px;
		color: var(--grey-2);
	}

	:hover {
		border-color: var(--brand-2);
		background-color: var(--grey-8);
	}

	:focus {
		border-color: var(--brand-1);
	}
`;

export const StyledTextArea = styled.textarea`
	padding: 16px 8px 8px 16px;
	color: var(--grey-1);
	resize:none;
	min-height:88px;
	border: 1.5px solid var(--grey-7);
	border-radius: 4px;

	::placeholder {
		font-weight: 400;
		font-size: 16px;
		color: var(--grey-2);
	}

	:hover {
		border-color: var(--brand-2);
		background-color: var(--grey-8);
	}

	:focus {
		border-color: var(--brand-1);
	}
`;
