import styled from "styled-components";

const randomColors = [
	"#E34D8C",
	"#C04277",
	"#7D2A4D",
	"#7000FF",
	"#6200E3",
	"#36007D",
	"#349974",
	"#2A7D5F",
	"#153D2E",
	"#6100FF",
	"#5700E3",
	"#30007D",
];

const getRandomColor = () => {
	const index = Math.floor(Math.random() * randomColors.length);
	return randomColors[index];
};

interface teste {
	vertical: boolean;
}

export const StyledUserAvatar = styled.div<teste>`
	display: flex;
	gap: ${(props) => (props.vertical ? "20px" : "8px")};
	/* align-items: center; */
	width: fit-content;
	flex-direction: ${(props) => (props.vertical ? "column" : "row")};

	& > .imgContainer {
		width: ${(props) => (props.vertical ? "104px" : "40px")};
		height: ${(props) => (props.vertical ? "104px" : "40px")};
		border-radius: 50%;
		overflow: hidden;

		& > img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		& > .defaultImage {
			width: ${(props) => (props.vertical ? "104px" : "40px")};
			height: ${(props) => (props.vertical ? "104px" : "40px")};
			border-radius: 50%;

			background-color: ${getRandomColor()};
			display: flex;
			align-items: center;
			justify-content: center;

			color: var(--fixed-white);
			font-weight: 600;
			font-size: ${(props) => (props.vertical ? "36px" : "14px")};

			text-transform: capitalize;
		}
	}
	@media (max-width: 425px) {
		align-items: center;
	}
	& > .userInfo {
		display: flex;
		align-self: center;
		justify-content: center;
		gap: 16px;

		@media (max-width: 425px) {
			flex-direction: column;
			gap: 6px;

			& > span {
				margin: 0;
			}
		}
	}
`;
