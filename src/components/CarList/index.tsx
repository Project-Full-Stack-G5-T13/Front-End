import Card from "../../components/Card";
import { Section } from "./styled";
import { ICardListProps } from "../../interface/card/card.interface";

function CarList({ ads, removeInactive, children }: ICardListProps) {
	const mycar = {
		images: {
			main_image:
				"https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/novo-cruze-nb.jpg?imwidth=960",
		},
		model: "Masserati - Ghibli",
		description:
			"Lorem Ipsum is simply a dummy text of the printing and typesetting industry.",
		user: {
			name: "Anderson",
			image_url: "",
		},
		km: 21000,
		launch_year: 2019,
		price: 25477.5,
		is_active: true,
	};

	return (
		<Section>
			{/* <Card car={mycar}></Card> */}
			{/* {removeInactive
				? ads.map((ad) =>
						ad.is_active ? <Card key={ad.id} car={ad} /> : null
				  )
				: ads.map((ad) => <Card key={ad.id} car={ad} />)} */}
			{children}
		</Section>
	);
}

export default CarList;
