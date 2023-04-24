import { StyledCardDiv } from "./styled";
import {
	StyledBody_2_400,
	StyledHeading_7_500,
	StyledHeading_7_600,
	StyledSpanDetail,
} from "../../styles/typografy";
import UserAvatar from "../UserAvatar";
import { IAdsReturn } from "../../pages/Dashboard";
import imgCarDefault from "../../assets/car-default.png";
import { useEffect, useState } from "react";

interface ICardProps {
	car: {
		images: {
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
		is_active: boolean;
	};

	good_price?: boolean;

	is_active?: boolean;
}

const Card = ({ car, good_price, is_active }: ICardProps) => {
	const [image, setImage] = useState(car.images.main_image);

	const handleErrorImage = () => {
		setImage(
			"https://img.freepik.com/vetores-premium/ilustracao-de-silhueta-de-carro-de-luxo-de-veiculo-simples_591091-249.jpg"
		);
	};

	console.log("car user card", car);
	return (
		<StyledCardDiv>
			<figure className="imgContainer">
				<img src={image} onError={handleErrorImage} alt="imagem do carro" />
			</figure>

			{good_price && <div className="good_price">$</div>}

			{is_active ? (
				car.is_active ? (
					<div className="active">Ativo</div>
				) : (
					<div className="inactive">Inativo</div>
				)
			) : (
				<></>
			)}

			<StyledHeading_7_600>{car.model}</StyledHeading_7_600>

			<StyledBody_2_400>{car.description}</StyledBody_2_400>

			<UserAvatar user={car.user} />
			<div className="base_info">
				<div>
					<StyledSpanDetail>{car.km} KM</StyledSpanDetail>
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
