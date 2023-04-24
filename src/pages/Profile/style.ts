import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	background: linear-gradient(
		to bottom,
		var(--brand-1) 0%,
		var(--brand-1) 20%,
		var(--grey-8) 20%,
		var(--grey-8) 100%
	);
	padding: 1rem;
`;

export const Main = styled.div`
	width: 100%;
	max-width: 1440px;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	margin-top: 2rem;
	gap: 2rem;

	.pagination {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const UserHeader = styled.div`
	width: 100%;
	background-color: var(--grey-9);
	min-height: 220px;
	padding: 2rem;
	gap: 1rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media (min-width: 768px) {
		min-height: 250px;
	}

	.img-box {
		padding: 1rem;
		background-color: var(--brand-1);
		width: 70px;
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		color: white;

		img {
			width: 100%;
			height: 100%;
		}
	}

	.name-box {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.description {
	}
`;

export const CarList = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;

	.list {
		display: flex;
		flex-direction: row;
		flex-flow: row wrap;
		width: 100%;
		gap: 30px;
		/* max-width: 1012px; */
		flex-wrap: wrap;
		align-content: flex-start;
		justify-content: space-around;
		padding-top: 40px;

		@media (max-width: 768px) {
			width: 100%;

			flex-wrap: nowrap;
			overflow-y: scroll;
			height: fit-content;
			padding: 16px;
		}
	}
`;

export const NotFound = styled.div`
	width: 100%;
	min-height: 500px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
