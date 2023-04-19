import { useNavigate } from "react-router-dom";
import { Main } from "./styled";
import HomeFilter from "../../components/HomeFilter";
import CarList from "../../components/CarList";
import HomePainel from "../../components/HomePainel";
import Modal from "../../components/Modal";
import { useState } from "react";
import { StyledButton_primary } from "../../styles/buttons";
import { StyledModalTitle } from "../../components/Modal/styled";
import { StyledHeading_7_500 } from "../../styles/typografy";
import { string } from "yup";
import api from "../../services/api";

function Dashboard() {
	const navigate = useNavigate();
	const [widthWindow, setWidthWindow] = useState<number>(window.innerWidth);
	const [openModal, setOpenModal] = useState(false);
	window.addEventListener("resize", function () {
		setWidthWindow(window.innerWidth);
	});

	// const ads = await api.get("/ads")

	const [brands, setBrands] = useState<string[]>();
	const [models, setModels] = useState<string[]>();
	const [colors, setColors] = useState<string[]>();
	const [years, setYears] = useState<string[]>();
	const [fuels, setFuels] = useState<string[]>();

	return (
		<>
			<HomePainel />
			<Main>
				{openModal && (
					<Modal>
						<StyledModalTitle>
							<StyledHeading_7_500>Filtros</StyledHeading_7_500>
							<button onClick={() => setOpenModal(false)}>
								X
							</button>
						</StyledModalTitle>

						<HomeFilter />
						<div className="btn_container">
							<StyledButton_primary
								onClick={() => setOpenModal(false)}
							>
								Ver anúncios
							</StyledButton_primary>
						</div>
					</Modal>
				)}
				{widthWindow > 768 && <HomeFilter />}
				<CarList />
				{widthWindow <= 768 && (
					<div className="btn_container">
						<StyledButton_primary
							onClick={() => setOpenModal(true)}
						>
							Filtros
						</StyledButton_primary>
					</div>
				)}
			</Main>
		</>
	);
}

export default Dashboard;
