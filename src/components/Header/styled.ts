import styled from "styled-components";

const HeaderStyled = styled.header`
	width: 100%;
	border-bottom: 2px solid var(--grey-6);
	position: sticky;
	background-color: var(--grey-10);
	top: 0;
	left: 0;
	z-index: 900;

	& > .container_header {
		margin: 0 auto;
		max-width: 1400px;
		height: 80px;
		padding: 0 1rem 0 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;

		@media (min-width: 1400px) {
			padding: 0;
		}

		& > .desktop_options {
			display: flex;
			align-items: center;
			height: 100%;
			gap: 20px;
			padding-left: 40px;
			border-left: 2px solid var(--grey-6);
			cursor: pointer;
		}

		& > .burguer_menu {
			background: none;
			border: none;
			font-size: 24px;
			font-weight: 700;
			width: 30px;
			height: 30px;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.mobile_options {
			position: absolute;
			top: 75px;
			left: 0;

			width: 100%;
			background-color: var(--grey-10);
			padding: 20px 30px;

			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 30px;

			& > button {
				width: 100%;
				max-width: 300px;
			}

			& > :nth-child(1) {
				align-self: flex-start;
				width: fit-content;
				border: none;
				padding: 5px 0 5px 0;

				:hover {
					background-color: unset;
					color: unset;
				}
			}
		}
	}
`;

const ModalOptionsProfile = styled.div`
	position: absolute;
	z-index: 920;
	top: 70px;
	right: 20px;

	& > div {
		padding: 16px;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		background-color: var(--grey-10);
		display: flex;
		flex-direction: column;
		gap: 20px;
		border-radius: 4px;

		& > button {
			font-weight: 400;
			font-size: 16px;
			line-height: 28px;

			color: var(--grey-2);

			border: none;
			background-color: unset;

			text-align: left;

			:hover {
				text-decoration: underline;
			}
		}
	}
	@media (max-width: 768px) {
		width: 100%;
		right: 0;
	}
`;

export { HeaderStyled, ModalOptionsProfile };
