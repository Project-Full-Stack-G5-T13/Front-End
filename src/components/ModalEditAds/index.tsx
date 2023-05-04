import { AdsContext, IAdsUpdate } from "../../contexts/AdsContext";
import { schemaAdsUpdate } from "../../validations/select.schema";
import { StyledInput, StyledTextArea } from "../../styles/inputs";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledSelect } from "../../styles/select";
import { StyledModalTitle } from "../Modal/styled";
import { Controller, useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import Modal from "../Modal";
import {
	StyledHeading_7_500,
	StyledLabel,
	TextBody_2_500,
} from "../../styles/typografy";
import {
	StyledButton_brand_opacity,
	StyledButton_primary,
	StyledButton_alert,
	StyledButton_white_outline,
} from "../../styles/buttons";
import { UserContext } from "../../contexts/UserContext";
import { useParams } from "react-router-dom";
import { StyledForm } from "./styled";
import { StyledDivError } from "../ModalEditUser/styled";

interface ModalEditAdsProps {
	adsId: string;
	closeModal: () => void;
}

const ModalEditAds = ({ adsId, closeModal }: ModalEditAdsProps) => {
	const {
		carsTableKenzie,
		setBrandSelect,
		model,
		modelSelect,
		setModelSelect,
		setColorSelect,
	} = useContext(AdsContext);

	const { userId } = useParams();

	const { getUserProfile } = useContext(UserContext);

	const brands = Object.keys(carsTableKenzie);

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
	const listColor = [
		{ value: "Branco", label: "Branco" },
		{ value: "Preto", label: "Preto" },
		{ value: "Cinza", label: "Cinza" },
		{ value: "Prata", label: "Prata" },
		{ value: "Laranja", label: "Laranja" },
		{ value: "Amarelo", label: "Amarelo" },
		{ value: "Violeta", label: "Violeta" },
		{ value: "Azul", label: "Azul" },
		{ value: "Bege", label: "Bege" },
		{ value: "Marrom", label: "Marrom" },
		{ value: "Verde", label: "Verde" },
		{ value: "Outras...", label: "Outras..." },
	];

	const findModel = Object.values(model).find(
		(car: any) => car.name === modelSelect
	) as any;

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

	function formatPrice(event) {
		let value = event.target.value;

		value = parseInt(value.replace(/\D/g, ""));

		value = value + "";

		value = value.replace(/([0-9]{2})$/g, ",$1");

		if (value.length > 6) {
			value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
		}

		event.target.value = "R$ " + value;

		if (value == "NaN") event.target.value = "";
	}

	const {
		register,
		handleSubmit,
		control,
		setValue,
		formState: { errors },
	} = useForm<IAdsUpdate>({
		resolver: yupResolver(schemaAdsUpdate),
	});

	const [buttonClass, setButtonClass] = useState(true);
	const { updateAds, deleteAds } = useContext(AdsContext);

	const submitUpdateAds = async (data: IAdsUpdate) => {
		if (data.images) {
			for (const key in data.images) {
				if (data.images[key] === "") {
					delete data.images[key];
				}
			}
		}

		if (Object.keys(data.images).length == 0) {
			delete data.images;
		}

		for (const key in data) {
			if (data[key] === "") {
				delete data[key];
			}
		}

		try {
			await updateAds(data, adsId);
			await getUserProfile(userId);
			closeModal();
		} catch (error) {
			console.error(error);
		}
	};

	const onClickDeleteAds = async () => {
		try {
			await deleteAds(adsId);
			await getUserProfile(userId);
			closeModal();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Modal>
			<StyledModalTitle>
				<StyledHeading_7_500>Editar anúncio</StyledHeading_7_500>
				<button onClick={() => closeModal()}>X</button>
			</StyledModalTitle>

			<TextBody_2_500>Informações do veículo</TextBody_2_500>
			<StyledForm onSubmit={handleSubmit(submitUpdateAds)}>
				<div className="input-container">
					<StyledLabel>Marca</StyledLabel>
					<StyledSelect
						name="brand"
						placeholder="Selecione uma marca"
						control={control}
						options={listBrand}
						setState={setBrandSelect}
					/>
					<StyledDivError className="errors">
						<span>{errors.brand?.message}</span>
					</StyledDivError>
					{/* <p className="heading-8-500">{errors.brand?.message}</p> */}
				</div>

				<div className="input-container">
					<StyledLabel>Modelo</StyledLabel>
					<StyledSelect
						name="model"
						placeholder="Selecione um modelo"
						control={control}
						options={listModel}
						setState={setModelSelect}
					/>
					{/* <p className="heading-8-500">{errors.model?.message}</p> */}
					<StyledDivError className="errors">
						<span>{errors.model?.message}</span>
					</StyledDivError>
				</div>

				<div className="side-by-side-inputs">
					<div className="input-container">
						<StyledLabel>Ano</StyledLabel>
						<StyledInput
							readOnly={true}
							{...register("launch_year")}
							placeholder="Ano"
						/>
						{/* <p className="heading-8-500">
							{errors.launch_year?.message}
						</p> */}
						<StyledDivError className="errors">
							<span>{errors.launch_year?.message}</span>
						</StyledDivError>
					</div>

					<div className="input-container">
						<StyledLabel>Combustível</StyledLabel>
						<StyledInput
							readOnly={true}
							{...register("fuel_type")}
							placeholder="Combustível"
						/>
						{/* <p className="heading-8-500">
							{errors.fuel_type?.message}
						</p> */}
						<StyledDivError className="errors">
							<span>{errors.fuel_type?.message}</span>
						</StyledDivError>
					</div>
				</div>

				<div className="side-by-side-inputs">
					<div className="input-container">
						<StyledLabel>Quilometragem</StyledLabel>
						<StyledInput
							{...register("km")}
							placeholder="KM"
							pattern="^[0-9]+$"
						/>
						{/* <p className="heading-8-500">{errors.km?.message}</p> */}
						<StyledDivError className="errors">
							<span>{errors.km?.message}</span>
						</StyledDivError>
					</div>
					<div className="input-container">
						<StyledLabel>Cor</StyledLabel>
						<StyledSelect
							name="car_color"
							placeholder="Selecione uma cor"
							control={control}
							options={listColor}
							setState={setColorSelect}
						/>
						{/* <p className="heading-8-500">
							{errors.car_color?.message}
						</p> */}
						<StyledDivError className="errors">
							<span>{errors.car_color?.message}</span>
						</StyledDivError>
					</div>
				</div>

				<div className="side-by-side-inputs">
					<div className="input-container">
						<StyledLabel>Preço tabela FIPE</StyledLabel>
						<StyledInput
							readOnly={true}
							{...register("price_table")}
							placeholder="R$"
						/>
						{/* <p className="heading-8-500">
							{errors.price_table?.message}
						</p> */}
						<StyledDivError className="errors">
							<span>{errors.price_table?.message}</span>
						</StyledDivError>
					</div>
					<div className="input-container">
						<StyledLabel>Preço</StyledLabel>
						<StyledInput
							{...register("price")}
							placeholder="R$"
							onChange={formatPrice}
						/>
						{/* <p className="heading-8-500">{errors.price?.message}</p> */}
						<StyledDivError className="errors">
							<span>{errors.price?.message}</span>
						</StyledDivError>
					</div>
				</div>

				<div className="input-container">
					<StyledLabel>Descrição</StyledLabel>
					<StyledTextArea
						{...register("description")}
						placeholder="Descreva aqui o veiculo..."
					/>
				</div>

				<div className="input-container">
					<StyledLabel>Publicado</StyledLabel>
					<Controller
						control={control}
						name="is_active"
						defaultValue={true}
						render={({ field: { onChange } }) => (
							<div className="button-container">
								<StyledButton_white_outline
									type="button"
									className={
										buttonClass ? "button-selected" : ""
									}
									onClick={() => {
										onChange(true);
										setButtonClass(true);
									}}
								>
									Sim
								</StyledButton_white_outline>
								<StyledButton_white_outline
									type="button"
									className={
										buttonClass ? "" : "button-selected"
									}
									onClick={() => {
										onChange(false);
										setButtonClass(false);
									}}
								>
									Não
								</StyledButton_white_outline>
							</div>
						)}
					/>
					<StyledDivError className="errors">
						<span>{errors.is_active?.message}</span>
					</StyledDivError>
				</div>

				<div className="input-container">
					<StyledLabel>Imagem de capa</StyledLabel>
					<StyledInput
						{...register("images.main_image")}
						placeholder="URL de imagem"
					/>

					{/* <p className="heading-8-500">
						{errors.images?.main_image?.message}
					</p> */}
					<StyledDivError className="errors">
						<span>{errors.images?.main_image?.message}</span>
					</StyledDivError>
				</div>

				<div className="input-container">
					<StyledLabel>1° Imagem da galeria</StyledLabel>
					<StyledInput
						{...register("images.image_one")}
						placeholder="URL de imagem"
					/>
					{/* <p className="heading-8-500">
						{errors.images?.image_one?.message}
					</p> */}
					<StyledDivError className="errors">
						<span>{errors.images?.image_one?.message}</span>
					</StyledDivError>
				</div>

				<div className="input-container">
					<StyledLabel>2° Imagem da galeria</StyledLabel>
					<StyledInput
						{...register("images.image_two")}
						placeholder="URL de imagem"
					/>
					{/* <p className="heading-8-500">
						{errors.images?.image_two?.message}
					</p> */}
					<StyledDivError className="errors">
						<span>{errors.images?.image_two?.message}</span>
					</StyledDivError>
				</div>

				<StyledButton_brand_opacity>
					Adicionar campo para imagem da galeria
				</StyledButton_brand_opacity>

				<div className="button-container">
					<StyledButton_alert
						type="button"
						onClick={() => onClickDeleteAds()}
					>
						Excluir anúncio
					</StyledButton_alert>
					<StyledButton_primary type="submit">
						Salvar alterações
					</StyledButton_primary>
				</div>
			</StyledForm>
		</Modal>
	);
};

export default ModalEditAds;
