import styled from "styled-components";

export const Div = styled.div`
	width: 270px;
	display: flex;
	flex-direction: column;
	padding: 30px;
	gap: 20px;

	section {
		display: flex;
		flex-direction: column;
	}

	/* h3 {
		color: var(--grey-0);
		font-family: "Lexend";
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    margin-bottom: 7px;
	}

 	p {
    font-family: "Lexend";
    font-weight: 500;
    font-size: 20px;
    line-height: 35px;
    color: var(--grey-3);
	} */

	section div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		color: var(--grey-3);
	}

	input {
		width: 47%;
		height: 37px;
		border-style: none;
		background-color: var(--grey-5);
		font-family: "Lexend";
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		text-align: center;
	}
`;
