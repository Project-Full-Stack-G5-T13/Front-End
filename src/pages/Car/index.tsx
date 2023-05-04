import { useNavigate, useParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import car from "../../assets/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png";
import defaultphoto from "../../assets/default-user-image.png";
import { Container, Main, Section, UserImage } from "./styled";
import Comments from "../../components/Comments";
import MakeComment from "../../components/MakeComment";
import { useContext, useEffect, useState } from "react";
import { AdsContext } from "../../contexts/AdsContext";
import { IAdsCompleteReturn } from "../../interface/card/card.interface";
import UserAvatar from "../../components/UserAvatar";
import { StyledButton_black, StyledButton_primary } from "../../styles/buttons";
import { StyledHeading_7_500, StyledSpanDetail } from "../../styles/typografy";
import SliderModal from "../../components/SliderModal";
import { PointSpreadLoading } from "react-loading-typescript";
import MakeComments from "../../components/MakeComment";

function Car() {
	const { getCar } = useContext(AdsContext);
	const [currentCar, setCurrentCar] = useState<IAdsCompleteReturn | undefined>();
	const [data, setData] = useState<any>({});
	const [images, setImages] = useState([]);
	const { id } = useParams();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const fetchCar = async () => {
			const car = await getCar(id);
			setCurrentCar(car);
		};
		fetchCar();
	}, [id]);

	useEffect(() => {
		setImages([]);
		if (currentCar) {
			setImages([
				currentCar.images.main_image,
				currentCar.images.image_one,
				currentCar.images.image_three,
			]);
			if (currentCar.images.image_four) {
				setImages([...images, currentCar.images.image_four]);
			}
			if (currentCar.images.image_five) {
				setImages([...images, currentCar.images.image_five]);
			}
		}
	}, [currentCar]);

	const handleOpen = (firstImage: number) => {
		setIsOpen(true);
		setData({
			images,
			firstImage,
			model: currentCar.model,
		});
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<>
			<Section>
				<Container>
					{currentCar ? (
						<>
							<Main>
								<div className="main-content">
									<div className="main-picture">
										<img
											src={currentCar.images.main_image}
											alt="main image"
											onClick={() => handleOpen(0)}
										/>
									</div>
									<div className="car-info-box">
										<h3>{currentCar.model}</h3>
										<div className="car-info">
											<div className="info">
												<StyledSpanDetail>
													{currentCar.launch_year}
												</StyledSpanDetail>
												<StyledSpanDetail>
													{currentCar.km} KM
												</StyledSpanDetail>
											</div>

											<StyledHeading_7_500>
												{currentCar.price.toLocaleString("pt-br", {
													style: "currency",
													currency: "BRL",
												})}
											</StyledHeading_7_500>
										</div>
										<StyledButton_primary>Comprar</StyledButton_primary>
									</div>
									<div className="car-description-box">
										<h3>Descrição</h3>
										<p>{currentCar.description}</p>
									</div>
								</div>
								<div className="side-content">
									<div className="car-gallery">
										<h3>Fotos</h3>
										<div className="wrapper">
											{images.map((i, index) => (
												<div key={index} className="img-box">
													<img
														src={i}
														onClick={() => handleOpen(index)}
													/>
												</div>
											))}
										</div>
									</div>
									<div className="user-box">
										<UserImage>
											<div>{currentCar.user.name[0].toUpperCase()}</div>
										</UserImage>
										<h2>{currentCar.user.name}</h2>
										<StyledButton_black>
											Ver todos os anuncios{" "}
										</StyledButton_black>
									</div>
								</div>
							</Main>
							<Comments />
							<MakeComments />
						</>
					) : (
						<div>car not found</div>
					)}
				</Container>
			</Section>
			{isOpen && <SliderModal onClose={handleClose} data={data} />}
		</>
	);
}

export default Car;
