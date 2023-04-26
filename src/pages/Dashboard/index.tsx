import { useNavigate } from "react-router-dom";
import { Main } from "./styled";
import HomeFilter from "../../components/HomeFilter";
import CarList from "../../components/CarList";
import HomePainel from "../../components/HomePainel";
import Modal from "../../components/Modal";
import { useContext, useEffect, useState } from "react";
import { StyledButton_primary } from "../../styles/buttons";
import { StyledModalTitle } from "../../components/Modal/styled";
import { StyledHeading_7_500 } from "../../styles/typografy";
import { string } from "yup";
import api from "../../services/api";
import { UserContext } from "../../contexts/UserContext";
import { IAdsReturn } from "../../interface/card/card.interface";



function Dashboard() {
	const navigate = useNavigate();
	const { getUser } = useContext(UserContext);
	const [widthWindow, setWidthWindow] = useState<number>(window.innerWidth);
	const [openModal, setOpenModal] = useState(false);
	window.addEventListener("resize", function () {
		setWidthWindow(window.innerWidth);
	});

	useEffect(() => {
		getUser();
	}, []);

	const [ads, setAds] = useState<IAdsReturn[]>([]);
	const [query, setQuery] = useState("");

	const [brands, setBrands] = useState<string[]>([]);
	const [models, setModels] = useState<string[]>([]);
	const [colors, setColors] = useState<string[]>([]);
	const [years, setYears] = useState<number[]>([]);
	const [fuels, setFuels] = useState<string[]>([]);

	const handleSetQuery = (type: string, value: string) => {
		const newQuery = query ? query + `&${type}=${value}` : query + `?${type}=${value}`;
		setQuery(newQuery);
	};

	async function getAds(): Promise<void> {
		try {
			const allAds = await api.get(`/ads/${query}`);
			setAds(allAds.data.result);

			const newBrands = allAds.data.result.map((ad: IAdsReturn) => ad.brand);
			setBrands([...new Set([...newBrands])]);

			const newModels = allAds.data.result.map((ad: IAdsReturn) => ad.model);
			setModels([...new Set([...newModels])]);

			const newColors = allAds.data.result.map((ad: IAdsReturn) => ad.car_color);
			setColors([...new Set([...newColors])]);

			const newYears = allAds.data.result.map((ad: IAdsReturn) => ad.launch_year);
			setYears([...new Set([...newYears])]);

			const newFuels = allAds.data.result.map((ad: IAdsReturn) => ad.fuel_type);
			setFuels([...new Set([...newFuels])]);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getAds();
	}, [query]);

	return (
		<>
			<HomePainel />
			<Main>
				{openModal && (
					<Modal>
						<StyledModalTitle>
							<StyledHeading_7_500>Filtros</StyledHeading_7_500>
							<button onClick={() => setOpenModal(false)}>X</button>
						</StyledModalTitle>

						<HomeFilter
							brands={brands}
							models={models}
							colors={colors}
							fuels={fuels}
							years={years}
							handleSetQuery={handleSetQuery}
						/>
						<div className="btn_container">
							<StyledButton_primary onClick={() => setOpenModal(false)}>
								Ver anúncios
							</StyledButton_primary>
						</div>
					</Modal>
				)}
				{widthWindow > 768 && (
					<HomeFilter
						brands={brands}
						models={models}
						colors={colors}
						fuels={fuels}
						years={years}
						handleSetQuery={handleSetQuery}
					/>
				)}
				<CarList ads={ads} />
				{widthWindow <= 768 && (
					<div className="btn_container">
						<StyledButton_primary onClick={() => setOpenModal(true)}>
							Filtros
						</StyledButton_primary>
					</div>
				)}
			</Main>
		</>
	);
}

export default Dashboard;
