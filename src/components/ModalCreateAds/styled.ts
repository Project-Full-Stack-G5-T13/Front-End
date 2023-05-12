import styled from "styled-components";

const ModalCreateAdsStyled = styled.section`
	.top-modal {
		display: flex;
		justify-content: space-between;
		padding: 15px;
	}

	.selects {
		text-transform: capitalize;
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 20px;
	}

	.div-inputs {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.div-inputs label {
		padding: 0px 5px;
	}

	.image-input {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 1rem;

		input {
			width: 100%;
		}
	}

	.upload-btn {
		aspect-ratio: 1/1;
		height: 48px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--brand-1);
		border: 1.5px solid var(--brand-1);
		border-radius: 4px;
		font-size: x-large;
		font-weight: 600;
		color: var(--fixed-white);

		cursor: pointer;

		:hover {
			background-color: var(--brand-2);
			border-color: var(--brand-2);
		}

		:disabled {
			background-color: var(--brand-3);
			border-color: var(--brand-3);
			color: var(--brand-4);
		}
	}

	.div-inputs p {
		color: var(--alert-1);
		padding: 0px 5px;
		line-height: normal;
	}

	.inputs_row {
		width: 100%;
		display: flex;
		justify-content: space-between;
		gap: 15px;
	}

	.inputs_row input {
		width: 100%;
	}

	.ads_description {
		height: 100px;
	}

	.add_image {
		font: var(--TextBody_2_500);
	}

	.bottom-modal {
		display: flex;
		gap: 15px;
		width: 100%;
		justify-content: right;
		margin: 5px 0 20px 0;
	}
`;

export default ModalCreateAdsStyled;
