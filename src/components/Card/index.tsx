import { StyledCardDiv } from "./styled";
import {
	StyledBody_2_400,
	StyledHeading_7_500,
	StyledHeading_7_600,
	StyledSpanDetail,
} from "../../styles/typografy";
import UserAvatar from "../UserAvatar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICardProps } from "../../interface/card/card.interface";
import { StyledButton_white_outline_medium } from "../../styles/buttons";
import ModalEditAds from "../ModalEditAds";

const Card = ({ car, good_price, is_active, profile, edit }: ICardProps) => {
	const [image, setImage] = useState(car.images.main_image);

	const handleErrorImage = () => {
		setImage(
			"https://img.freepik.com/vetores-premium/ilustracao-de-silhueta-de-carro-de-luxo-de-veiculo-simples_591091-249.jpg"
		);
	};

	const navigate = useNavigate();

	return (
		<StyledCardDiv>
			<figure
				className="imgContainer"
				onClick={() => navigate(`/car/${car.id}`)}
			>
				<img
					src={image}
					onError={handleErrorImage}
					alt="imagem do carro"
				/>
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
			<div
				className="userProfileRoute"
				onClick={() => {
					navigate(`/profile/${car.user.id}`);
				}}
			>
				{!profile && <UserAvatar user={car.user} />}
			</div>
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

			{profile && (
				<div className="button-container">
					<StyledButton_white_outline_medium
						onClick={() => edit(car.id)}
					>
						Editar
					</StyledButton_white_outline_medium>
					<StyledButton_white_outline_medium
						onClick={() => navigate(`/car/${car.id}`)}
					>
						Ver detalhes
					</StyledButton_white_outline_medium>
				</div>
			)}
		</StyledCardDiv>
	);
};

export default Card;
