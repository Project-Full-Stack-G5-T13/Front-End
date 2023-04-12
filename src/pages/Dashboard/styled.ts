import styled from "styled-components";

export const Main = styled.main`
  display: flex;
	flex-direction: row;
	width: 100%;
	color: var(--fixed-white);
	justify-content: space-between;
	max-width: 1400px;


  @media (max-width: 540px) {
		display: flex;
		flex-direction: column;
  }
`;