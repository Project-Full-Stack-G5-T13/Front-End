import {
	createContext,
	useState,
	ReactNode,
	useEffect,
	useContext,
} from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { UserContext } from "./UserContext";

interface iProvidersAdsProps {
	children: ReactNode;
}

export interface iAdsCreate {
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

export interface iBrandObject {
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
// email, phone number, cpf

interface iAdsContext {
	modalAds: boolean;
	setModalAds: React.Dispatch<React.SetStateAction<boolean>>;
	carsTableKenzie: iBrandObject;
	setCarsTableKenzie: React.Dispatch<React.SetStateAction<iBrandObject>>;
	brandSelect: string;
	setBrandSelect: React.Dispatch<React.SetStateAction<string>>;
	model: iModel[];
	modelSelect: string;
	setModelSelect: React.Dispatch<React.SetStateAction<string>>;
	// allAds:iAdsCreate[];
	// setAllAds: React.Dispatch<React.SetStateAction<iAdsCreate[]>>
	createAds: (data: iAdsCreate) => Promise<void>;
}
export interface iModel {
	brand: string;
	fuel: number;
	id: string;
	name: string;
	value: number;
	year: number;
}

export const AdsContext = createContext({} as iAdsContext);

const AdsProvider = ({ children }: iProvidersAdsProps) => {
	const [modalAds, setModalAds] = useState<boolean>(false);
	const [carsTableKenzie, setCarsTableKenzie] = useState<iBrandObject>(
		{} as iBrandObject
	);
	const [brandSelect, setBrandSelect] = useState<string>("");
	const [modelSelect, setModelSelect] = useState<string>("");

	const [model, setModel] = useState<iModel[]>([]);

	const token = localStorage.getItem("@Motors:token");

	const { globalLoading, setGlobalLoading } = useContext(UserContext);
	const [allAds, setAllAds] = useState<iAdsCreate[]>([]);

	useEffect(() => {
		async function carsTable() {
			try {
				const response = await api.get(
					"https://kenzie-kars.herokuapp.com/cars"
				);

				setCarsTableKenzie(response.data);
			} catch (error) {
				console.error(error);
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
				console.error(error);
			}
		}

		brandSelectRequest();
	}, [brandSelect]);

	async function createAds(data: iAdsCreate): Promise<void> {
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
			}}
		>
			{children}
		</AdsContext.Provider>
	);
};

export default AdsProvider;
