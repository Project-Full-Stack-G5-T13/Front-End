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
import Pagination from "../../components/Pagination";
import api from "../../services/api";
import { IAdsReturn } from "../../interface/card/card.interface";
import { StyledUserAvatar } from "../../components/UserAvatar/styled";
import UserAvatar from "../../components/UserAvatar";

const Profile = () => {
	const [isProfile, setIsProfile] = useState<boolean>(false);
	const { modalAds, setModalAds } = useContext(AdsContext);
	const [openEditModal, setOpenEditModal] = useState(false);
	const [adId, setAdId] = useState("");
	const navigate = useNavigate();
	const { getUserProfile, userProfile } = useContext(UserContext);
	const [userAds, setUserAds] = useState<IAdsReturn[]>([]);

	const { userId } = useParams();

	const [nextPage, setNextPage] = useState(false);
	const [prevPage, setPrevPage] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	async function getUserAds(userId: string): Promise<void> {
		try {
			const userAds = await api.get(
				`/ads/user/${userId}/?page=${currentPage}`
			);
			console.log(userAds);

			setUserAds(userAds.data.result);
			setTotalPages(userAds.data.totalPages);
			setCurrentPage(userAds.data.page);
			setNextPage(userAds.data.hasNextPage);
			setPrevPage(userAds.data.hasPrevPage);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		if (userProfile) {
			getUserAds(userProfile.id);
		}
	}, [currentPage]);

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
								<UserAvatar user={userProfile} vertical>
									{userProfile?.is_seller && (
										<StyledSpanDetail>
											Anunciante
										</StyledSpanDetail>
									)}
								</UserAvatar>
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
								{userAds.length > 0 ? (
									<>
										{userAds.map((e) => {
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
							<Pagination
								currentPage={currentPage}
								hasNextPage={nextPage}
								hasPrevPage={prevPage}
								setCurrentPage={setCurrentPage}
								totalPages={totalPages}
							/>
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
