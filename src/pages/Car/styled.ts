import styled from "styled-components";

export const Section = styled.section`
	background: rgb(131,100,180);
	background: radial-gradient(circle, rgba(131,100,180,1) 0%, rgba(88,71,187,1) 27%, rgba(33,37,41,1) 93%);
	filter: blur(1px);
	height: 470px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	object-fit: cover;
	margin-top: 74px;

    div{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 730px;
			height: 300px;
			background-color: var(--grey-10);
			border-radius: 4px;
		}

	img	{	
		width: 80%;
		filter: blur(0px);
		max-width: 470px;
		min-width: 370px;
	}


  @media (max-width: 540px) {

  }
`;