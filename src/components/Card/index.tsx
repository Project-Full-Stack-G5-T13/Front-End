import { StyledCardDiv } from "./styled";
import carro from "../../assets/carro.png";
import user from "../../assets/default-user-image.png";
import {
	StyledBody_2_400,
	StyledBody_2_500,
	StyledHeading_7_500,
	StyledHeading_7_600,
	StyledSpanDetail,
} from "../../styles/typografy";
import UserAvatar from "../UserAvatar";

interface ICardProps {
	car: {
		image: {
			main_image: string;
		};
		model: string;
		description: string;
		user: {
			name: string;
			image_url: string;
		};
		km: number;
		launch_year: number;
		price: number;
	};
}

const Card = ({ car }: ICardProps) => {
	return (
		<StyledCardDiv>
			<img src={car.image.main_image} alt="carro" />

			<StyledHeading_7_600>{car.model}</StyledHeading_7_600>

			<StyledBody_2_400>{car.description}</StyledBody_2_400>

			<UserAvatar user={car.user} />
			<div className="base_info">
				<div>
					<StyledSpanDetail>{car.km}</StyledSpanDetail>
					<StyledSpanDetail>{car.launch_year}</StyledSpanDetail>
				</div>
				<StyledHeading_7_500>
					{car.price.toLocaleString("pt-br", {
						style: "currency",
						currency: "BRL",
					})}
				</StyledHeading_7_500>
			</div>
		</StyledCardDiv>
	);
};

export default Card;
