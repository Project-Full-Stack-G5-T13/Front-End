import {
	StyledHeading_4_600,
	StyledHeading_6_500,
} from "../../styles/typografy";
import { Div } from "./styled";

interface IHomeFilter {
	brands: string[];
	models: string[];
	colors: string[];
	years: string[];
	fuels: string[];
}

const HomeFilter = ({ brands, models, colors, years, fuels }: IHomeFilter) => {
	return (
		<Div className="advertisement-filter">
			<section>
				<StyledHeading_4_600>Marca</StyledHeading_4_600>
				{brands.filter((brand) => {
					<StyledHeading_6_500 key={brand}>
						{brand}
					</StyledHeading_6_500>;
				})}
			</section>
			<section>
				<StyledHeading_4_600>Modelo</StyledHeading_4_600>
				{models.filter((model) => {
					<StyledHeading_6_500 key={model}>
						{model}
					</StyledHeading_6_500>;
				})}
			</section>
			<section>
				<StyledHeading_4_600>Cor</StyledHeading_4_600>
				{colors.filter((color) => {
					<StyledHeading_6_500 key={color}>
						{color}
					</StyledHeading_6_500>;
				})}
			</section>
			<section>
				<StyledHeading_4_600>Ano</StyledHeading_4_600>
				{years.filter((year) => {
					<StyledHeading_6_500 key={year}>
						{year}
					</StyledHeading_6_500>;
				})}
			</section>
			<section>
				<StyledHeading_4_600>Combustível</StyledHeading_4_600>
				{fuels.filter((fuel) => {
					<StyledHeading_6_500 key={fuel}>
						{fuel}
					</StyledHeading_6_500>;
				})}
			</section>
			<section>
				<StyledHeading_4_600>KM</StyledHeading_4_600>
				<div>
					<input type="text" placeholder="Mínima" />
					<input type="text" placeholder="Máxima" />
				</div>
			</section>
			<section>
				<StyledHeading_4_600>Preço</StyledHeading_4_600>
				<div>
					<input type="text" placeholder="Mínima" />
					<input type="text" placeholder="Máxima" />
				</div>
			</section>
		</Div>
	);
};

export default HomeFilter;
