import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import car from "../../assets/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png";
import defaultphoto from "../../assets/default-user-image.png";
import {
	Article,
	Aside,
	Div,
	Figure,
	Main,
	Modal,
	SecondAside,
	SecondDiv,
	SecondMain,
	Section,
} from "./styled";
import Comments from "../../components/Comments";
import MakeComment from "../../components/MakeComment";
import { useState } from "react";

function Car() {
	const [isOpen, setIsOpen] = useState(false);

	const navigate = useNavigate();

	return (
		<>
			<Section>
				<Article>
					<Main>
						<Figure onClick={() => setIsOpen(true)}>
							<img src={car} alt="" />
						</Figure>
						<Div>
							<h3>Mercedes Benz A 2000 CGI ADVANCE SEDAN Mercedes Benz A 200</h3>
							<div className="container">
								<div className="priceAndSpan">
									<div className="span">
										<span>2013</span>
										<span>0 KM</span>
									</div>
									<div className="price">
										<p>R$ 40.000,00</p>
									</div>
								</div>
								<button>Comprar</button>
							</div>
						</Div>
						<SecondDiv className="description">
							<h3>Descrição</h3>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy text
								ever since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen book.
							</p>
						</SecondDiv>
					</Main>
					<SecondMain>
						<Aside>
							<div>
								<h3>Fotos</h3>
							</div>
							<div className="aside-images">
								<img src={car} alt="" />
								<img src={car} alt="" />
								<img src={car} alt="" />
								<img src={car} alt="" />
								<img src={car} alt="" />
								<img src={car} alt="" />
							</div>
						</Aside>
						<SecondAside>
							<img src={defaultphoto} alt="" />
							<h3>Samuel Leão</h3>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy text
								ever since the 1500s
							</p>
							<button>Ver todos anúncios</button>
						</SecondAside>
					</SecondMain>
				</Article>
				<Comments />
				<MakeComment />
			</Section>
			{isOpen && (
				<Modal
					id="overlay"
					onClick={(e: React.MouseEvent<HTMLDivElement>) => {
						const target = e.target as HTMLButtonElement;
						if (target.id === "overlay") {
							setIsOpen(false);
						}
					}}
				>
					<div className="modal-wrapper">
						<div className="modal-header">
							<h3>Mercedes Benz A 2000 CGI ADVANCE SEDAN</h3>
							<button onClick={() => setIsOpen(false)}>
								<IoClose />
							</button>
						</div>
						<div className="modal-img">
							<img src={car} alt="" />
						</div>
					</div>
				</Modal>
			)}
		</>
	);
}

export default Car;
