import styled from "styled-components";

export const StyledButton_black = styled.button`
	padding: 12px 28px;
	background-color: var(--grey-0);
	border: 1.5px solid var(--grey-0);
	border-radius: 4px;

	font-size: 16px;
	font-weight: 600;
	color: var(--fixed-white);

	:hover {
		background-color: var(--grey-1);
		border-color: var(--grey-1);
	}
`;

export const StyledButton_black_medium = styled(StyledButton_black)`
	padding: 12px 20px;
	font-size: 14px;
`;

export const StyledButton_grey = styled.button`
	padding: 12px 28px;
	background-color: var(--grey-6);
	border: 1.5px solid var(--grey-6);
	border-radius: 4px;

	font-size: 16px;
	font-weight: 600;
	color: var(--grey-2);

	:hover {
		background-color: var(--grey-5);
		border-color: var(--grey-5);
	}
`;

export const StyledButton_grey_medium = styled(StyledButton_grey)`
	padding: 12px 20px;
	font-size: 14px;
`;

export const StyledButton_primary = styled.button`
	padding: 12px 28px;
	background-color: var(--brand-1);
	border: 1.5px solid var(--brand-1);
	border-radius: 4px;

	font-size: 16px;
	font-weight: 600;
	color: var(--fixed-white);

	:hover {
		background-color: var(--brand-2);
		border-color: var(--brand-2);
	}

	:disabled {
		background-color: var(--brand-3);
		border-color: var(--brand-3);
		color: var(--brand-4);
	}
`;

export const StyledButton_primary_medium = styled(StyledButton_primary)`
	padding: 12px 20px;
	font-size: 14px;
`;

export const StyledButton_brand_opacity = styled.button`
	padding: 12px 28px;
	background-color: var(--brand-4);
	border: 1.5px solid var(--brand-4);
	border-radius: 4px;

	font-size: 16px;
	font-weight: 600;
	color: var(--brand-1);

	:hover {
		background-color: var(--grey-10);
		border-color: var(--grey-10);
		color: var(--grey-1);
	}
`;

export const StyledButton_brand_opacity_medium = styled(
	StyledButton_brand_opacity
)`
	padding: 12px 20px;
	font-size: 14px;
`;

export const StyledButton_white_outline = styled.button`
	padding: 12px 28px;
	background-color: var(--grey-10);
	border: 1.5px solid var(--grey-0);
	border-radius: 4px;

	font-size: 16px;
	font-weight: 600;
	color: var(--grey-0);

	:hover {
		background-color: var(--grey-1);
		border-color: var(--grey-1);
		color: var(--grey-10);
	}
`;

export const StyledButton_white_outline_medium = styled(
	StyledButton_white_outline
)`
	padding: 12px 20px;
	font-size: 14px;
`;

export const StyledButton_brand_outline = styled.button`
	padding: 12px 28px;
	background-color: var(--grey-10);
	border: 1.5px solid var(--brand-1);
	border-radius: 4px;

	font-size: 16px;
	font-weight: 600;
	color: var(--brand-1);

	:hover {
		background-color: var(--brand-4);
		border-color: var(--brand-1);
		color: var(--brand-1);
	}
`;

export const StyledButton_brand_outline_medium = styled(
	StyledButton_brand_outline
)`
	padding: 12px 20px;
	font-size: 14px;
`;

export const StyledButton_alert = styled.button`
	padding: 12px 28px;
	background-color: var(--alert-3);
	border: 1.5px solid var(--alert-3);
	border-radius: 4px;

	font-size: 16px;
	font-weight: 600;
	color: var(--alert-1);

	:hover {
		background-color: var(--alert-2);
		border-color: var(--alert-2);
	}
`;

export const StyledButton_alert_medium = styled(StyledButton_alert)`
	padding: 12px 20px;
	font-size: 14px;
`;

export const StyledButton_success = styled.button`
	padding: 12px 28px;
	background-color: var(--success-3);
	border: 1.5px solid var(--success-3);
	border-radius: 4px;

	font-size: 16px;
	font-weight: 600;
	color: var(--success-1);

	:hover {
		background-color: var(--success-2);
		border-color: var(--success-2);
	}
`;

export const StyledButton_success_medium = styled(StyledButton_success)`
	padding: 12px 20px;
	font-size: 14px;
`;

export const StyledButton_brand_disable = styled.button`
	padding: 12px 28px;
	background-color: var(--brand-3);
	border: 1.5px solid var(--brand-3);
	border-radius: 4px;

	font-size: 16px;
	font-weight: 600;
	color: var(--brand-4);
`;
