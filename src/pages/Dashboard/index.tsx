import { useNavigate } from "react-router-dom";
import ContainerDash from "./styled";
import Header from "../../components/Header";

import Card from "../../components/Card";
import UserAvatar from "../../components/UserAvatar";
import Footer from "../../components/Footer";

function Dashboard() {
	const navigate = useNavigate();

	const mycar = {
		image: {
			main_image:
				"https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/novo-cruze-nb.jpg?imwidth=960",
		},
		model: "Cruze blablabla batinha 123 vaca atolada",
		description: "batatinha 123",
		user: {
			name: "Anderson",
			image_url: "",
		},
		km: 21000,
		launch_year: 2019,
		price: 25477.5,
	};

	const mycar2 = {
		image: {
			main_image:
				"https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/novo-cruze-nb.jpg?imwidth=960",
		},
		model: "Cruze blablabla",

		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ad quae quasi exercitationem nulla sit eos quos tempore possimus consequuntur deserunt totam recusandae accusamus, delectus molestiae laudantium non quod dicta.",
		user: {
			name: "Anderson",
			image_url:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png",
		},
		km: 21000,
		launch_year: 2019,
		price: 25477.5,
	};
	return (
		<ContainerDash>
			<Header />
			<h1 className="heading-1-700">meu teste</h1>
			<h1 className="heading-2-600">meu teste</h1>
			<h1 className="heading-3-600">meu teste</h1>

			<br />
			<br />

			<div style={{ display: "flex" }}>
				<Card car={mycar}></Card>
				<Card car={mycar2}></Card>
			</div>

			<br />
			<br />
			<UserAvatar user={mycar.user}></UserAvatar>
			<UserAvatar user={mycar2.user}></UserAvatar>
			<Footer/>
		</ContainerDash>
	);
}

export default Dashboard;
