import styled from "styled-components";

export const StyledModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 280px;
    height: 250px;
    background-color: var(--grey-10);
    padding: 10px;
    border: 1.5px solid var(--brand-1);
    border-radius: 10px;
    box-shadow: 10px 10px 5px #888888;
    display: flex;
    h2 {
        margin-top: 40px;
        font-size: 23px;
        padding-left: 8px;
    }
	& > div {
		margin: 0 auto;
		border-radius: 5px;
		max-width: 280px;
        height: 235px;
        display: flex;
        flex-direction: column;
        align-items: center;
	}
    textarea {
        margin-top: 20px;
        width: 210px;
        height: 100%;
    }
    button{
        padding: 10px 24px;
        background-color: var(--grey-10);
        border: 1.5px solid var(--brand-1);
        border-radius: 4px;
        margin: 10px;
        margin-top: 35px;
        font-size: 16px;
        font-weight: 600;
        color: var(--brand-1);
        :hover {
            background-color: var(--brand-4);
            border-color: var(--brand-1);
            color: var(--brand-1);
        }
    }
`;