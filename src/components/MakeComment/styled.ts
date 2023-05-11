import styled from "styled-components";

export const Div = styled.div`
	width: 59%;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-self: center;
	align-items: flex-start;
	border-radius: 4px;
	gap: 8px;
	background-color: var(--fixed-white);
	/* height: 340px; */
	padding: 20px;
	margin-bottom: 30px;

	section {
		margin: 10px;
		width: 100%;
	}

	.profile-comment {
		font-family: "Inter";
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		gap: 20px;
		width: 100%;
	}

	span {
		align-self: center;
		color: var(--grey-2);
		font-size: 11px;
	}

	h3 {
		margin-top: 17px;
		height: 40px;
		width: 160px;
		text-overflow: ellipsis;
		overflow-x: hidden;
	}

	.inputForm {
		display: flex;
		flex-direction: column;
		margin-top: 30px;
		width: 98%;
		height: 160px;
		border-radius: 4px;
		border: 2px solid var(--grey-7);
		padding: 10px;

		@media (max-width: 1050px) {
			height: 200px;
		}

		@media (max-width: 768px) {
			height: 180px;
		}

		@media (max-width: 560px) {
			height: 220px;
		}

		@media (max-width: 450px) {
			height: 250px;
		}

		@media (max-width: 390px) {
			height: 280px;
		}

		@media (max-width: 340px) {
			height: 300px;
		}

		@media (max-width: 340px) {
			height: 340px;
		}

		& > textArea {
			font-style: normal;
			font-weight: 500;
			font-size: 16px;
			border: none;
			height: 100%;
			color: var(--grey-2);
			resize: none;
		}

		& > button {
			min-height: 40px;
			width: 108px;
			align-self: flex-end;
			background-color: var(--brand-1);
			color: var(--fixed-white);
			border-radius: 4px;
			border: none;

			:disabled {
				background-color: #ced4da;
			}
		}
	}
	img {
		width: 50px;
		height: 50px;
		border-radius: 50px;
	}

	.pre-phrase {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 5px;
		align-items: center;
	}

	span {
		font-family: "Inter";
		padding: 4px;
		margin-left: 10px;
		background-color: var(--grey-7);
		color: var(--gray-3);
		border-radius: 24px;
		font-size: 12px;
		cursor: pointer;
	}

	.error-message {
		font-size: 12px;
		color: #ff1f1f;
		padding-top: 5px;
	}

	@media (max-width: 768px) {
		margin: 0 auto;
		width: 100%;
	}
`;
