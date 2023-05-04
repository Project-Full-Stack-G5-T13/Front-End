import styled from "styled-components";
import halfimg from "../../assets/half-back.png";
import UserAvatar from "../../components/UserAvatar";

export const Section = styled.section`
	width: 100vw;
	min-height: 100vh;
	background-image: url(${halfimg});
	background-repeat: no-repeat;
	background-size: contain;
	background-size: 100% 900px;

	@media (max-width: 768px) {
		background-size: 100% 700px;
	}
`;

export const Container = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: 1240px;
	padding: 1rem;
`;

export const Main = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 1rem;

	@media (max-width: 768px) {
		flex-direction: column;
	}

	.main-content {
		width: 60%;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		@media (max-width: 768px) {
			width: 100%;
		}
	}
	.main-picture {
		width: 100%;
		padding: 2rem;
		background-color: white;
		aspect-ratio: 16/9;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.car-info-box {
		width: 100%;
		padding: 2rem;
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 2rem;
	}

	.car-info {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}

	.info {
		display: flex;
		gap: 1rem;
	}
	.car-description-box {
		width: 100%;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: white;
		min-height: 160px;
	}
	.side-content {
		width: 40%;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		@media (max-width: 768px) {
			width: 100%;
		}
	}
	.car-gallery {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 2rem;
		background-color: white;
	}

	.wrapper {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;
	}

	.img-box {
		width: 100%;
		aspect-ratio: 1/1;
		overflow: hidden;
		border-radius: 12px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.user-box {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		background-color: white;
		padding: 2rem;
	}
`;

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

export const UserImage = styled.div`
	width: 100px;
	aspect-ratio: 1/1;
	overflow: hidden;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${getRandomColor};
	color: var(--fixed-white);
	font-weight: 600;
	font-size: 2rem;
	line-height: 24px;
	text-transform: capitalize;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
