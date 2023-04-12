import styled from "styled-components";

const HeaderStyled = styled.header`
	width: 100%;
	max-width: 1400px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 12px;
	position: fixed;
	background-color: var(--grey-10);
	top: 0;
	left: 50%;
	z-index: 999;

	.container-header {
		margin: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	img {
		width: 200px;
	}

	.svg-menu {
		scale: 2.1;
	}

	.closed-menu {
		scale: 1.5;
		font-weight: bold;
	}

	.mobile {
		padding: 20px 0px;
		border-top: 1px solid var(--grey-3);
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		width: 93%;
		gap: 23px;
	}

	.mobile p {
		cursor: pointer;
	}

	.mobile :nth-child(3) {
		padding-bottom: 30px;
		border-bottom: 1px solid var(--grey-3);
	}

	.mobile:nth-child(4) {
		width: 100px;
		height: 40px;
		border: none;
	}
	.mobile button {
		width: 100%;
		height: 40px;
		background-color: transparent;
		border: 1px solid var(--grey-3);
		border-radius: var(--radius-1);
		cursor: pointer;
	}

	.desktop-menu {
		width: 300px;
		display: flex;
		justify-content: right;
		gap: 30px;
		align-items: center;
	}

	.desktop-menu :nth-child(1) {
		color: var(--brand-1);
		cursor: pointer;
	}

	.desktop-menu button {
		width: 140px;
		height: 40px;
		background-color: transparent;
		border: 1px solid var(--grey-3);
		border-radius: var(--radius-1);
		cursor: pointer;
	}

	.profile {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.profile :first-child {
		width: 40px;
		height: 40px;
		background-color: var(--brand-2);
		color: var(--grey-8);
		font-weight: bold;
		font-size: 20px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.profile :nth-child(2) {
		cursor: pointer;
	}

	.svg-profile {
		color: var(--brand-2);
		scale: 1.5;
		cursor: pointer;
	}
`;

const ModalOptionsProfile = styled.div`
	position: relative;

	div {
		padding: 23px;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		position: fixed;
		background-color: var(--grey-10);
		top: 100px;
		right: 40px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	div p {
		cursor: pointer;
	}
`;

export { HeaderStyled, ModalOptionsProfile };
