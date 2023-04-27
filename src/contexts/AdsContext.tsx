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
import { IAdsContext, IAdsCreate, IBrandObject, IModel, IProvidersAdsProps } from "../interface/card/card.interface";

export const AdsContext = createContext({} as IAdsContext);

const AdsProvider = ({ children }: IProvidersAdsProps) => {
	const [modalAds, setModalAds] = useState<boolean>(false);
	const [carsTableKenzie, setCarsTableKenzie] = useState<IBrandObject>(
		{} as IBrandObject
	);
	const [brandSelect, setBrandSelect] = useState<string>("");
	const [modelSelect, setModelSelect] = useState<string>("");

	const [model, setModel] = useState<IModel[]>([]);

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
