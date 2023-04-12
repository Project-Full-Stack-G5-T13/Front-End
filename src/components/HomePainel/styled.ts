import styled from "styled-components";

export const Section = styled.section`
	background: rgb(131,100,180);
	background: radial-gradient(circle, rgba(131,100,180,1) 0%, rgba(88,71,187,1) 27%, rgba(33,37,41,1) 93%);
	filter: blur(0px);
	height: 400px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	object-fit: cover;
	margin-top: 74px;

img	{	
	width: 100%;
	filter: blur(0px);
	max-width: 1100px;
	min-width: 800px;
}

div {
    width: 550px;
	filter: blur(0px);
	height: 70px;
	display: flex;
	flex-direction: column;
	align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

 h2{
	font-size: 42px;
	font-family: "Lexend";
  font-style: normal;
  font-weight: 500;
	color: var(--fixed-white);
}

 p{
	font-size: 21px;
	font-family: "Lexend";
  font-style: normal;
  font-weight: 500;
	color: var(--fixed-white);
	margin-top: 110px;
}

@media (max-width: 550px) {
		 p {
			font-size: 17px;
		}
	}

	@media (max-width: 430px) {
		 p {
			font-size: 11px;
			margin-top: 110px;
		}
	}
`;
