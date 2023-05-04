import {
	createContext,
	useState,
	useEffect,
	useContext,
	ReactNode,
} from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { UserContext } from "./UserContext";

interface IProvidersAdsProps {
	children: ReactNode;
}

export interface IAdsCreate {
	brand: string;
	model: string;
	car_color: string;
	fuel_type: string;
	description: string;
	km: number;
	launch_year: number;
	price_table?: number;
	price: number;
	images: {
		main_image: string;
		image_one?: string;
		image_two?: string;
		image_three?: string;
	};
}

export interface IAdsUpdate {
	brand?: string;
	model?: string;
	car_color?: string;
	fuel_type?: string;
	description?: string;
	km?: number;
	launch_year?: number;
	price_table?: number;
	price?: number;
	images?: {
		main_image?: string;
		image_one?: string;
		image_two?: string;
		image_three?: string;
	};
	is_active?: boolean;
}

export interface IComment {
	id: string;
	description: string;
	user_id: string;
	car_id: string;
	created_at: string;
	user: {
		name: string;
		image_url: string;
	};
}

export interface IComment {
	id: string;
	description: string;
	user_id: string;
	car_id: string;
	created_at: string;
	user: {
		name: string;
		image_url: string;
	};
}
export interface IBrandObject {
	chevrolet: Array<Object>;
	citroën: Array<Object>;
	fiat: Array<Object>;
	ford: Array<Object>;
	honda: Array<Object>;
	hyundai: Array<Object>;
	nissan: Array<Object>;
	peugeot: Array<Object>;
	renault: Array<Object>;
	toyota: Array<Object>;
	volkswagen: Array<Object>;
}

export interface IAdsContext {
	modalAds: boolean;
	setModalAds: React.Dispatch<React.SetStateAction<boolean>>;
	carsTableKenzie: IBrandObject;
	setCarsTableKenzie: React.Dispatch<React.SetStateAction<IBrandObject>>;
	brandSelect: string;
	setBrandSelect: React.Dispatch<React.SetStateAction<string>>;
	model: IModel[];
	modelSelect: string;
	setModelSelect: React.Dispatch<React.SetStateAction<string>>;
	// allAds:iAdsCreate[];
	// setAllAds: React.Dispatch<React.SetStateAction<iAdsCreate[]>>
	createAds: (data: IAdsCreate) => Promise<void>;
	colorSelect: string;
	setColorSelect: React.Dispatch<React.SetStateAction<string>>;
	updateAds: (data: IAdsUpdate, adId: string) => Promise<void>;
	deleteAds: (adId: string) => Promise<void>;
	comments: IComment[];
	setComments: React.Dispatch<React.SetStateAction<IComment>>;
	getCar: (carId: string) => Promise<any>;
}

interface IModel {
	brand: string;
	fuel: number;
	id: string;
	name: string;
	value: number;
	year: number;
}

export const AdsContext = createContext({} as any);

const AdsProvider = ({ children }: IProvidersAdsProps) => {
	const [modalAds, setModalAds] = useState<boolean>(false);
	const [carsTableKenzie, setCarsTableKenzie] = useState<IBrandObject>(
		{} as IBrandObject
	);
	const [brandSelect, setBrandSelect] = useState<string>("");
	const [modelSelect, setModelSelect] = useState<string>("");
	const [colorSelect, setColorSelect] = useState<string>("");

	const [model, setModel] = useState<IModel[]>([]);

	const [comments, setComments] = useState<any>([]);

	const token = localStorage.getItem("@Motors:token");

	const { globalLoading, setGlobalLoading } = useContext(UserContext);
	const [allAds, setAllAds] = useState<IAdsCreate[]>([]);

	useEffect(() => {
		async function carsTable() {
			try {
				const response = await api.get(
					"https://kenzie-kars.herokuapp.com/cars"
				);

				setCarsTableKenzie(response.data);
			} catch (error) {
				console.log("Deu erro");
			}
		}

		carsTable();
	}, []);

	useEffect(() => {
		async function brandSelectRequest() {
			try {
				const response = await api.get(
					`https://kenzie-kars.herokuapp.com/cars?brand=${brandSelect}`
				);

				setModel(response.data);
			} catch (error) {
				console.log("Deu erro");
			}
		}

		brandSelectRequest();
	}, [brandSelect]);

	async function createAds(data: IAdsCreate): Promise<void> {
		setGlobalLoading(true);
		try {
			api.defaults.headers.common.authorization = `Bearer ${token}`;

			const response = await api.post("/ads", data);

			toast.success("Anúncio criado com sucesso!");

			setAllAds([...allAds, response.data]);
		} catch (error) {
			console.error(error);
		} finally {
			setGlobalLoading(false);
		}
	}

	async function updateAds(data: IAdsUpdate, adId: string): Promise<void> {
		setGlobalLoading(true);
		try {
			api.defaults.headers.common.authorization = `Bearer ${token}`;

			const response = await api.patch(`/ads/${adId}`, data);

			toast.success("Anúncio atualizado com sucesso!");
		} catch (error) {
			console.error(error);
		} finally {
			setGlobalLoading(false);
		}
	}

	async function deleteAds(adId: string): Promise<void> {
		setGlobalLoading(true);
		try {
			api.defaults.headers.common.authorization = `Bearer ${token}`;

			const response = await api.delete(`/ads/${adId}`);

			toast.success("Anúncio deletado com sucesso!");
		} catch (error) {
			console.error(error);
		} finally {
			setGlobalLoading(false);
		}
	}

	const getCar = async (carId: string) => {
		try {
			const { data } = await api.get(`/ads/${carId}`);
			return data;
		} catch (err) {
			toast.error("Ocorreu algum erro");
			console.log(err);
		}
	};

	return (
		<AdsContext.Provider
			value={{
				modalAds,
				setModalAds,
				carsTableKenzie,
				setCarsTableKenzie,
				brandSelect,
				setBrandSelect,
				model,
				modelSelect,
				setModelSelect,
				createAds,
				colorSelect,
				setColorSelect,
				updateAds,
				deleteAds,
				globalLoading,
				comments,
				setComments,
				getCar,
			}}
		>
			{children}
		</AdsContext.Provider>
	);
};

export default AdsProvider;
