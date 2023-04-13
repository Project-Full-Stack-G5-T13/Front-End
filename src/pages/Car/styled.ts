import styled from "styled-components";
import halfimg from "../../assets/half-back.png";

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 30%;
	background-image: url(${halfimg});
	background-repeat: no-repeat;
	background-size: contain;

	@media (max-width: 900px){
		background-size: 100% 900px;
	}

	@media (max-width: 580px){
		background-size: 100% 900px;
	}
`;

export const Article = styled.article`
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	max-width: 1400px;
	gap: 30px;

	@media (max-width: 900px) {
		display: flex;
		flex-direction: column;
		gap: 0px;
	}	

	@media (max-width: 580px){
		width: 280px;
		
		h3 {
			font-size: 16px;
		}
	}
`;

export const Main = styled.main`
		display: flex;
		flex-direction: column;
		margin-top: 29px;
		width: 550px;

		@media (max-width: 580px) {
			align-items: center;
		}
`;

export const SecondMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 140px;
	margin-bottom: 30px;
	gap: 30px;
	width: 300px;

	@media (max-width: 900px) {
			margin-top: 0px;
		}
`;

export const Figure = styled.figure`
	margin-top: 120px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 550px;
	height: 260px;
	background-color: var(--grey-10);
	border-radius: 4px;
	
	img	{	
		width: 80%;
		max-width: 470px;
		min-width: 280px;
	}

	@media (max-width: 580px) {
		width: 280px;
	}
`;

export const Div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	border-radius: 4px;
	gap: 8px;
	background-color: var(--fixed-white);
	width: 550px;
	height: 260px;
	margin-top: 30px;
	padding: 20px;

	h3 {
		height: 80px;
		width: 100%;
    text-align:center;
    margin: 0 auto;	
		text-overflow: ellipsis;
		overflow-x: hidden;
	}

	.container {
		width: 100%;
	}

	.priceAndSpan{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-family: 'Inter';
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
	}
	.span {
		font-family: "Inter";
		display: flex;
		flex-direction: row;
		width: 50%;
		gap: 20px;
	}

	.price {
		font-family: "Inter";
		width: 100px;
	}

	span {
		width: 70px;
		height: 28px;
		display: flex;
		justify-content: space-around;
		background-color: var(--brand-4);
		color: var(--brand-2);
		padding-top: 5px;
		border-radius: 4px;
	}

	button {
		margin-top: 20px;
		width: 100px;
		height: 38px;
		background-color: var(--brand-1);
		border: 1.5px solid #4529E6;
		border-radius: 4px;
		color: var(--fixed-white);
		font-family: 'Inter';
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
	}

	@media (max-width: 580px){
		width: 280px;
		
		h3 {
			font-size: 16px;
		}
	}
`;

export const SecondDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	border-radius: 4px;
	gap: 8px;
	background-color: var(--fixed-white);
	width: 550px;
	height: 260px;
	margin-top: 30px;
	padding: 20px;
	margin-bottom: 30px;

	h3 {
		height: 40px;
		width: 500px;
		text-overflow: ellipsis;
		overflow-x: hidden;
	}

	p {
		width: 100%;
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		height: 130px;
		text-overflow: ellipsis;
		overflow-x: hidden;
	}

	@media (max-width: 580px){
		width: 280px;
		
		h3 {
			font-size: 18px;
		}
	}
`;

export const Aside = styled.aside`
	width: 300px;
	height: 300px;
	border-radius: 4px;
	background-color: var(--fixed-white);
	display:flex;
	flex-direction: column;
	gap: 20px;
	padding: 30px;

	.aside-images {
		display: flex;
		flex-wrap: wrap;
		justify-content: stretch;
		gap: 10px;
	}

	.aside-images img {
		width: 73px;
		height: 73px;
		background-color: var(--grey-8);
	}

	.defaultphoto	{
		width: 60px;
		height: 60px;
		border-radius: 50px;
	}	

	@media (max-width: 900px) {
		width: 550px;
		
		.aside-images {
			align-self: center;
			width: 300px;
			justify-content: center;
		}
	}

	@media (max-width: 580px){
		width: 280px;
		
		h3 {
			font-size: 18px;
		}
	}
`;

export const SecondAside = styled.aside`
	width: 300px;
	height: 300px;
	border-radius: 4px;
	background-color: var(--fixed-white);
	display:flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	padding: 30px;

	img	{
		width: 60px;
		height: 60px;
		border-radius: 50px;
	}
	p	{
		height: 80px;
    text-align:center;
    margin: 0 auto;	
		text-overflow: ellipsis;
		overflow-x: hidden;
	}

	button{
		width: 206px;
		height: 48px;
		background-color: var(--grey-0);
		color: var(--fixed-white);
		border-radius: 4px;
		border: none;
	}

	@media (max-width: 900px) {
		width: 550px;
		
		.aside-images {
			align-self: center;
			width: 300px;
			justify-content: center;
		}
	}

	@media (max-width: 580px){
		width: 280px;
		
		h3 {
			font-size: 16px;
		}
	}
`;