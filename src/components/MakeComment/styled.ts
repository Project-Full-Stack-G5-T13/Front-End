import styled from "styled-components";

export const Div = styled.div`
	width: 100%;
	max-width: 878px;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-self: center;
	align-items: flex-start;
	border-radius: 4px;
	gap: 8px;
	background-color: var(--fixed-white);
	height: 340px;
	padding: 20px;
	margin-bottom: 30px;

	section{
		margin: 10px;
		width: 100%;
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

	
	.inputDiv{
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    margin-top: 30px;
    text-overflow: ellipsis;
    overflow-x: hidden;
    font-style: normal;
    font-weight: 400;
		font-size: 14px;
    width: 98%;
    height: 150px;
    border-radius: 4px;
    border: 2px solid var(--grey-7);
		padding: 10px;
  }

	button {
      margin-top: 80px;
      height: 40px;
      gap: 10px;
      width: 108px;
      height: 38px;
      background-color: var(--brand-1);
      color: var(--fixed-white);
      border-radius: 4px;
      border: none;
  }

	input {
		margin-top: 10px;
		text-overflow: ellipsis;
		overflow-x: hidden;
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		width: 100%;
		height: 100px;
		border: none;
	}

  img	{
		width: 50px;
		height: 50px;
		border-radius: 50px;
	}

	.pre-phrase{
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				gap: 5px;
				align-items: center;
  }

	span {
  	font-family: 'Inter';
    padding: 4px;
    margin-left: 10px;
    background-color: var(--grey-7);
    color: var(--gray-3);
    border-radius: 24px;
    font-size: 12px;
  }
`;