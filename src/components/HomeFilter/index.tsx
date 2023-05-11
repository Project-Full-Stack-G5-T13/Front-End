import { StyledButton_primary } from "../../styles/buttons";
import {
	StyledHeading_4_600,
	StyledHeading_6_500,
} from "../../styles/typografy";
import { Div } from "./styled";

interface IHomeFilter {
	brands: string[];
	models: string[];
	colors: string[];
	years: number[];
	fuels: string[];
	handleSetQuery: (type: string, value: string | number) => void;
	clearQuery: () => void;
}

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const HomeFilter = ({
	brands,
	models,
	colors,
	years,
	fuels,
	handleSetQuery,
	clearQuery,
}: IHomeFilter) => {
	return (
		<Div className="advertisement-filter">
			<StyledHeading_4_600>Marca</StyledHeading_4_600>
			<ul>
				{brands.map((brand) => (
					<StyledHeading_6_500
						key={brand}
						onClick={() => handleSetQuery("brand", brand)}
					>
						{capitalize(brand)}
					</StyledHeading_6_500>
				))}
			</ul>
			<StyledHeading_4_600>Modelo</StyledHeading_4_600>
			<ul>
				{models.map((model) => (
					<StyledHeading_6_500
						key={model}
						onClick={() => handleSetQuery("model", model)}
					>
						{capitalize(model)}
					</StyledHeading_6_500>
				))}
			</ul>
			<StyledHeading_4_600>Cor</StyledHeading_4_600>
			<ul>
				{colors.map((car_color) => (
					<StyledHeading_6_500
						key={car_color}
						onClick={() => handleSetQuery("car_color", car_color)}
					>
						{capitalize(car_color)}
					</StyledHeading_6_500>
				))}
			</ul>
			<StyledHeading_4_600>Ano</StyledHeading_4_600>
			<ul>
				{years.map((year) => (
					<StyledHeading_6_500
						key={year}
						onClick={() => handleSetQuery("launch_year", year)}
					>
						{year}
					</StyledHeading_6_500>
				))}
			</ul>
			<StyledHeading_4_600>Combustível</StyledHeading_4_600>
			<ul>
				{fuels.map((fuel) => (
					<StyledHeading_6_500
						key={fuel}
						onClick={() => handleSetQuery("fuel_type", fuel)}
					>
						{capitalize(fuel)}
					</StyledHeading_6_500>
				))}
			</ul>
			<section>
				<StyledHeading_4_600>KM</StyledHeading_4_600>
				<div>
					<input
						onBlur={(e) => handleSetQuery("min_km", e.target.value)}
						type="text"
						placeholder="Mínima"
					/>
					<input
						onBlur={(e) => handleSetQuery("max_km", e.target.value)}
						type="text"
						placeholder="Máxima"
					/>
				</div>
			</section>
			<section>
				<StyledHeading_4_600>Preço</StyledHeading_4_600>
				<div>
					<input
						onBlur={(e) =>
							handleSetQuery("min_price", e.target.value)
						}
						type="text"
						placeholder="Mínima"
					/>
					<input
						onBlur={(e) =>
							handleSetQuery("max_price", e.target.value)
						}
						type="text"
						placeholder="Máxima"
					/>
				</div>
			</section>

			<StyledButton_primary onClick={() => clearQuery()}>
				Limpar filtros
			</StyledButton_primary>
		</Div>
	);
};

export default HomeFilter;
