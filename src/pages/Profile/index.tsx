import { useContext, useEffect, useState } from "react";
import { CarList, Container, Main, UserHeader } from "./style";
import { UserContext, iUserWithCars } from "../../contexts/UserContext";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import { AdsContext } from "../../contexts/AdsContext";
import ModalCreateAds from "../../components/ModalCreateAds";
const Profile = () => {
	const [isProfile, setIsProfile] = useState<boolean>(false);
	const { modalAds, setModalAds } = useContext(AdsContext);
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
					console.log(error);
				}
			}
		}
		fetchUser();
	}, [userId]);

	return (
		<>
			<Container>
				<Main>
					<UserHeader>
						<div className="img-box">
							<h1>S</h1>
						</div>
						<div className="name-box">
							<h3>{userProfile?.name}</h3>
							{userProfile?.is_seller && <span>Anunciante</span>}
						</div>
						<p className="description">{userProfile?.description}</p>
						{isProfile && (
							<button onClick={() => setModalAds(!modalAds)}>Criar Anúncio</button>
						)}
					</UserHeader>
					<h3 className="title">Anuncios</h3>
					<CarList>
						{userProfile?.cars && userProfile?.cars.length > 0 ? (
							<ul className="list">
								{userProfile?.cars.map((e) => {
									const carData = {
										image: {
											main_image: e.images.main_image,
										},
										model: e.model,
										description: e.description,
										user: {
											name: userProfile.name,
											image_url: userProfile.image_url,
										},
										km: e.km,
										launch_year: 2023,
										price: e.price,
										is_active: e.is_active,
									};
									return <Card car={e} is_active={e.is_active} />;
								})}
							</ul>
						) : (
							<h2>Esse usuário não possui nenhum veículo cadastrado</h2>
						)}
					</CarList>

					<div className="pagination">
						<span>1 de 2</span>
						<a href="">Seguinte</a>
					</div>
				</Main>
			</Container>
			{modalAds && <ModalCreateAds />}
		</>
	);
};

export default Profile;
