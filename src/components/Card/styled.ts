import styled from "styled-components";

export const StyledCardDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 310px;
	height: 380px;

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
`;
