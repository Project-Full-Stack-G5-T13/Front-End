import { AdsContext } from "../../contexts/AdsContext";
import { schemaAdsCreate } from "../../validations/select.schema";
import { StyledInput, StyledTextArea } from "../../styles/inputs";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledSelect } from "../../styles/select";
import { StyledModalTitle } from "../Modal/styled";
import ModalCreateAdsStyled from "./styled";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState, useRef, ChangeEvent } from "react";
import Modal from "../Modal";
import { StyledHeading_7_500, StyledLabel, TextBody_2_500 } from "../../styles/typografy";
import {
	StyledButton_brand_opacity,
	StyledButton_primary,
	StyledButton_grey,
} from "../../styles/buttons";
import { UserContext } from "../../contexts/UserContext";
import { useParams } from "react-router-dom";
import { IAdsCreate } from "../../interface/card/card.interface";

const ModalCreateAds = () => {
	const {
		modalAds,
		setModalAds,
		carsTableKenzie,
		setBrandSelect,
		model,
		modelSelect,
		setModelSelect,
		createAds,
	} = useContext(AdsContext);

	const { userId } = useParams();

	const { getUserProfile } = useContext(UserContext);

	const brands = Object.keys(carsTableKenzie);

	const [inputFuel, setInputFuel] = useState<string>("");
	const [inputYear, setInputYear] = useState<string>("");
	const [inputFipe, setInputFipe] = useState<string>("");

	function createListBrand(br: any) {
		const selectOptions = [];
		for (let i = 0; i < br.length; i++) {
			selectOptions.push({ value: br[i], label: br[i] });
		}
		return selectOptions;
	}
	function createListModel(mod: any) {
		const selectOptions = [];
		for (let i = 0; i < mod.length; i++) {
			selectOptions.push({ value: mod[i].name, label: mod[i].name });
		}
		return selectOptions;
	}
	const listBrand = createListBrand(brands);
	const listModel = createListModel(model);

	const findModel = Object.values(model).find((car: any) => car.name === modelSelect) as any;

	useEffect(() => {
		const fuelType = (car: any) => {
			if (car && car.fuel === 1) {
				return "Flex";
			} else if (car && car.fuel === 2) {
				return "Híbrido";
			} else if (car && car.fuel === 3) {
				return "Elétrico";
			}
			return "";
		};

		const resultFuel = fuelType(findModel);

		setValue("fuel_type", resultFuel);

		if (findModel) {
			setValue("launch_year", findModel.year);

			const fipe = findModel.value;
			const valueFipe = fipe.toLocaleString("pt-br", {
				style: "currency",
				currency: "BRL",
			});

			setValue("price_table", valueFipe);
		}
	}, [findModel]);

	const {
		register,
		handleSubmit,
		control,
		setValue,
		formState: { errors },
	} = useForm<IAdsCreate>({
		resolver: yupResolver(schemaAdsCreate),
	});

	const submitAds = async (data: IAdsCreate) => {
		await createAds(data);
		getUserProfile(userId);
		setModalAds(false);
	};

	return (
		<Modal>
			<ModalCreateAdsStyled>
				<StyledModalTitle>
					<StyledHeading_7_500>Criar anúncio</StyledHeading_7_500>
					<button onClick={() => setModalAds(!modalAds)}>X</button>
				</StyledModalTitle>

				<form onSubmit={handleSubmit(submitAds)} className="selects">
					<TextBody_2_500 style={{ padding: "5px 0px" }}>
						Informações do veículo
					</TextBody_2_500>
					<div className="div-inputs">
						<StyledLabel>Marca</StyledLabel>
						<StyledSelect
							name="brand"
							placeholder="Selecione uma marca"
							control={control}
							options={listBrand}
							setState={setBrandSelect}
						/>
						<p className="heading-8-500">{errors.brand?.message}</p>
					</div>
					<div className="div-inputs">
						<StyledLabel>Modelo</StyledLabel>
						<StyledSelect
							name="model"
							placeholder="Selecione um modelo"
							control={control}
							options={listModel}
							setState={setModelSelect}
						/>
						<p className="heading-8-500">{errors.model?.message}</p>
					</div>
					<div className="inputs_row">
						<div className="div-inputs">
							<StyledLabel>Ano</StyledLabel>
							<StyledInput
								readOnly={true}
								{...register("launch_year")}
								placeholder="Ano"
							/>
							<p className="heading-8-500">{errors.launch_year?.message}</p>
						</div>
						<div className="div-inputs">
							<StyledLabel>Combustível</StyledLabel>
							<StyledInput
								readOnly={true}
								{...register("fuel_type")}
								placeholder="Combustível"
							/>
							<p className="heading-8-500">{errors.fuel_type?.message}</p>
						</div>
					</div>
					<div className="inputs_row">
						<div className="div-inputs">
							<StyledLabel>Quilometragem</StyledLabel>
							<StyledInput
								{...register("km")}
								placeholder="30.000"
								pattern="^[0-9]+$"
							/>
							<p className="heading-8-500">{errors.km?.message}</p>
						</div>
						<div className="div-inputs">
							<StyledLabel>Cor</StyledLabel>
							<StyledInput {...register("car_color")} placeholder="Branco" />
							<p className="heading-8-500">{errors.car_color?.message}</p>
						</div>
					</div>
					<div className="inputs_row">
						<div className="div-inputs">
							<StyledLabel>Preço tabela FIPE</StyledLabel>
							<StyledInput
								readOnly={true}
								{...register("price_table")}
								placeholder="R$ 48.000,00"
							/>
							<p className="heading-8-500">{errors.price_table?.message}</p>
						</div>
						<div className="div-inputs">
							<StyledLabel>Preço</StyledLabel>
							<StyledInput {...register("price")} placeholder="R$ 50.000,00" />
							<p className="heading-8-500">{errors.price?.message}</p>
						</div>
					</div>
					<div className="div-inputs">
						<StyledLabel>Descrição</StyledLabel>
						<StyledTextArea
							{...register("description")}
							placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
						/>
					</div>
					<div className="div-inputs">
						<StyledLabel>Imagem de capa</StyledLabel>
						<StyledInput
							{...register("images.main_image")}
							placeholder="https://image.com"
						/>
						<p className="heading-8-500">{errors.images?.main_image?.message}</p>
					</div>
					<div className="div-inputs">
						<StyledLabel>1° Imagem da galeria</StyledLabel>
						<StyledInput
							{...register("images.image_one")}
							placeholder="https://image.com"
						/>
						<p className="heading-8-500">{errors.images?.image_one?.message}</p>
					</div>
					<div className="div-inputs">
						<StyledLabel>2° Imagem da galeria</StyledLabel>
						<StyledInput
							{...register("images.image_two")}
							placeholder="https://image.com"
						/>
						<p className="heading-8-500">{errors.images?.image_two?.message}</p>
					</div>

					<StyledButton_brand_opacity className="add_image">
						Adicionar campo para imagem da galeria
					</StyledButton_brand_opacity>

					<div className="bottom-modal">
						<StyledButton_grey>Cancelar</StyledButton_grey>
						<StyledButton_primary type="submit">Criar anúncio</StyledButton_primary>
					</div>
				</form>
			</ModalCreateAdsStyled>
		</Modal>
	);
};

export default ModalCreateAds;
