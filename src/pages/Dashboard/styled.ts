import styled from "styled-components";

export const Main = styled.main`
  display: flex;
	flex-direction: row;
	width: 100%;
	min-height: 100%;
	margin-bottom: 20px;
	color: var(--fixed-white);
	justify-content: space-between;

  @media (max-width: 540px) {
		display: flex;
		flex-direction: column;
  }
`;