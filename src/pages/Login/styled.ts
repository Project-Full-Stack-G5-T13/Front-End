import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	background-color: var(--grey-8);
`;

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: var(--grey-10);
	padding: 30px;
	border-radius: 4px;
	max-width: 412px;
	width: 100%;

	@media (max-width: 500px) {
		max-width: 300px;
	}

	form {
		gap: 16px;
		display: flex;
		flex-direction: column;
		margin-top: 32px;

		& > .end {
			align-self: flex-end;
		}

		& > .center {
			align-self: center;
		}

		& > .password_container {
			width: 100%;
			position: relative;
			& > svg {
				position: absolute;
				top: calc(50% - 8px);
				right: 10px;
			}

			& > input {
				width: 100%;
			}
		}
	}
`;
