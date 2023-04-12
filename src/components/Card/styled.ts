import styled from "styled-components";

export const StyledCardDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 310px;
  height: 380px;
	position: relative;	


	& > h6 {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	& > p {
		overflow: hidden;
		text-overflow: ellipsis;

		display: -webkit-box;
		height: 40px;
		line-height: 20px;
		max-height: 40px;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	& > div {
		display: flex;
		gap: 8px;
		align-items: center;

		& > img {
			max-width: 32px;
			max-height: 32px;
			border-radius: 50%;
		}

		& > div {
			display: flex;
			gap: 16px;
		}
	}

	& > .base_info {
		display: flex;
		justify-content: space-between;
	}

	& > .good_price {
		width: 16px;
		height: 28px;
		background-color: #349974;
		position: absolute;
		top: 0;
		right: 0;
		border-radius: 2px;

		display: flex;
		justify-content: center;
		align-items: center;

		font-weight: 500;
		font-size: 14px;
		color: #ffffff;
	}

	& > .active {
		background-color: var(--brand-1);
		padding: 0 8px;
		position: absolute;

		top: 10px;
		left: 16px;

		font-weight: 500;
		font-size: 14px;
		color: var(--fixed-white);
	}

	& > .inactive {
		background-color: var(--grey-4);
		padding: 0 8px;
		position: absolute;

		top: 10px;
		left: 16px;

		font-weight: 500;
		font-size: 14px;
		color: var(--fixed-white);
	}
`;
