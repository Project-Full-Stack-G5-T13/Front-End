import styled from "styled-components";

export const StyledPagination = styled.div`
	width: 100%;
	min-height: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;

	.pagination-box {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.current-page {
		border: none;
		font-size: large;
		font-weight: bold;
		color: var(--grey-2);
	}
	.total-page {
		border: none;
		font-size: large;
		font-weight: bold;
		color: var(--grey-3);
	}

	.page-btn {
		border: none;
		font-size: large;
		font-weight: bold;
		color: var(--brand-1);
	}

	.page-btn:disabled {
		opacity: 0.5;
	}
`;
