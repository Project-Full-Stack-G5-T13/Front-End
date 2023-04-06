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

export const StyledUserAvatar = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;

	& > img {
		max-width: 32px;
		max-height: 32px;
		border-radius: 50%;
	}

	& > div {
		width: 32px;
		height: 32px;
		border-radius: 50%;

		background-color: ${getRandomColor()};
		display: flex;
		align-items: center;
		justify-content: center;

		color: var(--fixed-white);
		font-weight: 600;
		font-size: 14px;
		line-height: 24px;
	}
`;
