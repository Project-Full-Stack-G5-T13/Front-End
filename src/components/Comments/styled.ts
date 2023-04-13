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

	section{
		margin: 10px;
		height: 200px;
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
		margin-top: 17px;
		height: 40px;
		width: 160px;
		text-overflow: ellipsis;
		overflow-x: hidden;
	}

	p {
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
`;
