import styled from "styled-components";

export const Modal = styled.div`
	z-index: 1000;
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.modal-wrapper {
		width: 100%;
		max-width: 500px;
		background-color: white;
		border-radius: 5px;
		padding: 1rem;
	}

	.modal-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1rem;

		button {
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: 700;
			font-size: x-large;
			border: none;
			color: var(--grey-4);
			background-color: transparent;
		}
	}

	.modal-content {
		background-color: var(--grey-6);
		border-radius: 5px;
		width: 100%;
		aspect-ratio: 16/9;
		position: relative;
	}

	.left-arrow {
		position: absolute;
		top: 50%;
		transform: translate(0, -50%);
		left: 32px;
		font-size: 45px;
		color: #fff;
		z-index: 1;
		cursor: pointer;
	}
	.right-arrow {
		position: absolute;
		top: 50%;
		transform: translate(0, -50%);
		right: 32px;
		font-size: 45px;
		color: #fff;
		z-index: 1;
		cursor: pointer;
	}

	.images-box {
		width: 100%;
		height: 100%;
	}
	.slides {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: none;
	}

	.slides.active {
		display: block;
	}

	.modal-footer {
		width: 100%;
		padding: 10px;
	}
	.dots-container {
		display: flex;
		justify-content: center;
		margin: 0 auto;
	}
	.dots {
		margin: 0 3px;
		cursor: pointer;
		font-size: 20px;
		opacity: 0.2;
	}

	.dots.active {
		opacity: 1;
	}
`;
