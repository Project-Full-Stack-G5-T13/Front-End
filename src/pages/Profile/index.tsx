import { useContext, useEffect, useState } from "react";
import { Container, Main, NotFound, UserHeader } from "./style";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../components/Card";
import { AdsContext } from "../../contexts/AdsContext";
import ModalCreateAds from "../../components/ModalCreateAds";
import {
	StyledButton_brand_outline,
	StyledButton_primary,
	StyledButton_white_outline,
} from "../../styles/buttons";
import {
	StyledHeading_1,
	StyledHeading_3_600,
	StyledHeading_5_600,
	StyledSpanDetail,
} from "../../styles/typografy";
import ModalEditAds from "../../components/ModalEditAds";
import CarList from "../../components/CarList";

const Profile = () => {
	const [isProfile, setIsProfile] = useState<boolean>(false);
	const { modalAds, setModalAds } = useContext(AdsContext);
	const [openEditModal, setOpenEditModal] = useState(false);
	const [adId, setAdId] = useState("");
	const navigate = useNavigate();
	const { getUserProfile, userProfile } = useContext(UserContext);

	const { userId } = useParams();

	useEffect(() => {
		const profileId = localStorage.getItem("@Motors:userId");
		if (profileId == userId) {
			setIsProfile(true);
		}
		async function fetchUser() {
			if (userId) {
				try {
					await getUserProfile(userId);
				} catch (error) {
					console.error(error);
				}
			}
		}
		fetchUser();
	}, [userId]);

	function editModal(id: string) {
		setAdId(id);
		setOpenEditModal(true);
	}

	function closeEditModal() {
		setOpenEditModal(false);
	}

	return (
		<>
			<Container>
				<Main>
					{userProfile ? (
						<>
							<UserHeader>
								<div className="img-box">
									<h1>{userProfile.name.charAt(0)}</h1>
								</div>
								<div className="name-box">
									<h3>{userProfile?.name}</h3>
									{userProfile?.is_seller && (
										<StyledSpanDetail>
											Anunciante
										</StyledSpanDetail>
									)}
								</div>
								<p className="description">
									{userProfile?.description}
								</p>
								{isProfile && (
									<StyledButton_brand_outline
										onClick={() => setModalAds(!modalAds)}
									>
										Criar Anúncio
									</StyledButton_brand_outline>
								)}
							</UserHeader>

							<StyledHeading_5_600 className="align-start">
								Anúncios
							</StyledHeading_5_600>

							<CarList>
								{userProfile?.cars.length > 0 ? (
									<>
										{userProfile.cars.map((e) => {
											return isProfile ? (
												<Card
													key={e.id}
													car={e}
													profile
													edit={editModal}
												/>
											) : (
												<Card key={e.id} car={e} />
											);
										})}
									</>
								) : (
									<StyledHeading_3_600>
										{isProfile
											? "Você ainda não possui nenhum veiculo cadastrado"
											: "Esse vendedor ainda não possui nenhum veículo cadastrado"}
									</StyledHeading_3_600>
								)}
							</CarList>

							{/* <div className="pagination">
								<span>1 de 2</span>
								<a href="">Seguinte</a>
							</div> */}
						</>
					) : (
						<NotFound>
							<StyledHeading_1>
								Usuário não encontrado
							</StyledHeading_1>
							<StyledButton_primary onClick={() => navigate("/")}>
								Voltar
							</StyledButton_primary>
						</NotFound>
					)}
				</Main>
			</Container>
			{modalAds && <ModalCreateAds />}
			{openEditModal && (
				<ModalEditAds adsId={adId} closeModal={closeEditModal} />
			)}
		</>
	);
};

export default Profile;
