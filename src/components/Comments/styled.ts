import styled from "styled-components";

export const Div = styled.div`
	max-width: 878px;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-self: center;
	align-items: flex-start;
	border-radius: 4px;
	gap: 8px;
	background-color: var(--fixed-white);
	height: 500px;
	padding: 20px;
	margin-bottom: 30px;
	width: 100%;
	overflow-y: auto;
		section{
			margin: 8px;
			height: 240px;
		}
		.profile-comment{
			font-family: 'Inter';
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: center;
			gap: 20px;
			width: 100%
		}
		span {
			align-self: center;
			color: var(--grey-2);
			font-size: 11px;
		}
		h3 {
			margin-top: 5px;
			height: 40px;
			width: 160px;
			text-overflow: ellipsis;
			overflow-x: hidden;
		}
		p {
			font-family: 'Inter';
			margin-top: 10px;
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			width: 100%;
			height: 70px;
		}
		img	{
			width: 50px;
			height: 50px;
			border-radius: 50px;
		}
		.updateDiv button {
			padding: 5px 12px;
			background-color: var(--grey-10);
			border: 1.5px solid var(--brand-1);
			border-radius: 4px;
			margin: 10px;
			margin-top: 2px;
			font-size: 12px;
			font-weight: 600;
			color: var(--brand-1);
			:hover {
				background-color: var(--brand-4);
				border-color: var(--brand-1);
				color: var(--brand-1);
			}
		}
`;