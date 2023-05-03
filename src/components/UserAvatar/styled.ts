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

	& > .img_container {
		max-width: 40px;
		max-height: 40px;
		border-radius: 50%;
		overflow: hidden;

		& > img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
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
	& > p {
		text-transform: capitalize;
	}
`;
