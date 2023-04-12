import styled from "styled-components";

export const Section = styled.section`
		display: flex;
    flex-flow: row wrap;
    width: 80%;
    gap: 30px;
    max-width: 1012px;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
		justify-content: center;
    padding-top: 40px;

    @media (max-width: 550px) {
      width: 100%;
      justify-content: center;
	}

`;