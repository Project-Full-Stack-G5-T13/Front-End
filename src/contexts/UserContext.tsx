import { createContext, useState, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { IUserUpdate } from "../components/ModalEditUser";
import { IAddressUpdateRequest } from "../components/ModalEditAddress";
import { IAdsReturn } from "../interface/card/card.interface";
import { IResetPassword, ISendEmail } from "../interface/user/user.interface";

export const UserContext = createContext({} as IUserContext);

interface IProvidersProps {
	children: ReactNode;
}

export interface IFormLogin {
	email: string;
	password: string;
}

export interface IFormSignup {
	name: string;
	email: string;
	cpf: string;
	phone_number: string;
	birth_date: string;
	description: string;
	image_url?: string;
	is_seller: boolean;
	password: string;
	confirmPassword: string;
	address: {
		zip_code: string;
		state: string;
		city: string;
		street: string;
		number: string;
		complement: string;
	};
}

interface IUser {
	id: string;
	name: string;
	email: string;
	cpf: string;
	phone_number: string;
	birth_date: string;
	description: string;
	image_url?: string;
	is_seller: boolean;
	is_adm: boolean;
	address: {
		state: string;
		city: string;
		zip_code: string;
		complement?: string;
		number: string;
		street: string;
		id: string;
	};
}

interface IUserWithCars extends IUser {
	cars: IAdsReturn[];
}

interface IJwtDecoded {
	exp: number;
	iat: number;
	isAdm: boolean;
	isSeller: boolean;
	sub: string;
}

interface IUserContext {
	registerUser: (data: IFormSignup) => Promise<void>;
	signInUser: (data: IFormLogin) => Promise<void>;
	globalLoading: boolean;
	setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
	user: IUser | undefined;
	setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
	getUser: () => Promise<void>;
	userProfile: IUserWithCars;
	getUserProfile(userId: string): Promise<void>;
	updateUser: (
		data: IUserUpdate | IAddressUpdateRequest,
		closeModal: () => void
	) => Promise<Omit<IUser, "address">>;
	deleteUser: (closeModal: () => void) => Promise<void>;
	sendEmail: (data: ISendEmail) => Promise<void>;
	resetPassword: (data: IResetPassword, token: string) => Promise<void>;
	checkZipCode: (event, setValue, prefix?) => Promise<void>;
}

const Providers = ({ children }: IProvidersProps) => {
	const navigate = useNavigate();

	const [userProfile, setUserProfile] = useState<IUserWithCars>();
	const [globalLoading, setGlobalLoading] = useState<boolean>(false);
	const [user, setUser] = useState<IUser>();

	async function getUser() {
		try {
			const token = localStorage.getItem("@Motors:token");
			const userId = localStorage.getItem("@Motors:userId");
			api.defaults.headers.common.Authorization = `Bearer ${token}`;
			const response = await api.get(`users/${userId}`);
			const myUser: IUser = response.data;
			setUser(myUser);
		} catch (error) {
			setUser(null);
			console.error(error);
		}
	}

	async function getUserProfile(userId: string) {
		try {
			const { data } = await api.get(`users/${userId}`);
			setUserProfile(data);
		} catch (error) {
			console.error(error);
		}
	}

	async function signInUser(data: IFormLogin): Promise<void> {
		setGlobalLoading(true);
		try {
			const response = await api.post("/session", data);
			localStorage.setItem("@Motors:token", response.data.token);
			const decoded: IJwtDecoded = jwtDecode(response.data.token);
			const userId = decoded.sub;
			localStorage.setItem("@Motors:userId", `${userId}`);

			await getUser();

			toast.success("Logado com sucesso!");
			navigate(`/`);
		} catch (error) {
			toast.error("Email ou senha invalido!");
		} finally {
			setGlobalLoading(false);
		}
	}

	async function registerUser(data: IFormSignup): Promise<void> {
		setGlobalLoading(true);
		try {
			await api.post("/users", data);

			navigate("/login");
			toast.success("Usuário cadastrado com sucesso!");
		} catch (error) {
			console.error(error);
			if (axios.isAxiosError(error)) {
				if (
					error?.response?.data.message ==
					"There is already an account with this email"
				) {
					toast.error("Já existe uma conta com este e-mail");
				} else if (
					error?.response?.data.message ==
					"There is already an account with this phone number"
				) {
					toast.error(
						"Já existe uma conta com este número de telefone"
					);
				} else if (
					error?.response?.data.message ==
					"There is already an account with this cpf"
				) {
					toast.error("Já existe uma conta com este cpf");
				}
			}
		} finally {
			setGlobalLoading(false);
		}
	}

	async function updateUser(
		data: IUserUpdate | IAddressUpdateRequest,
		closeModal: () => void
	): Promise<Omit<IUser, "address">> {
		setGlobalLoading(true);
		try {
			const token = localStorage.getItem("@Motors:token");
			const userId = localStorage.getItem("@Motors:userId");
			api.defaults.headers.common.Authorization = `Bearer ${token}`;

			const response = await api.patch(`/users/${userId}`, data);

			const updatedUser = response.data;
			await getUser();
			closeModal();
			toast.success("Usuario atualizado com sucesso!");
			return updatedUser;
		} catch (error) {
			console.error(error);
			toast.error(error.response.data.message);
		} finally {
			setGlobalLoading(false);
		}
	}

	async function deleteUser(closeModal: () => void): Promise<void> {
		setGlobalLoading(true);
		try {
			const token = localStorage.getItem("@Motors:token");
			const userId = localStorage.getItem("@Motors:userId");
			api.defaults.headers.common.Authorization = `Bearer ${token}`;

			await api.delete(`/users/${userId}`);

			localStorage.clear();
			closeModal();

			await getUser();

			navigate("/login");

			toast.success("Usuario excluido com sucesso!");
		} catch (error) {
			console.error(error);
			toast.error(error.response.data.message);
		} finally {
			setGlobalLoading(false);
		}
	}

	async function sendEmail(data: ISendEmail): Promise<void> {
		setGlobalLoading(true);
		try {
			await api.post("/users/resetpassword", data);
			toast.success("E-mail enviado com sucesso!");
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error?.response?.data.message == "E-mail not found.") {
					toast.error("E-mail não encontrado.");
				}
			}
		} finally {
			setGlobalLoading(false);
		}
	}

	async function resetPassword(
		data: IResetPassword,
		token: string
	): Promise<void> {
		setGlobalLoading(true);
		try {
			await api.patch(`/users/resetpassword/${token}`, data);
			navigate("/login");
			toast.success("Senha redefinida!");
		} catch (error) {
			console.log(error);
		} finally {
			setGlobalLoading(false);
		}
	}

	async function checkZipCode(event, setValue, prefix = ""): Promise<void> {
		const zipCode = event.target.value;

		if (zipCode.length < 8) {
			setValue(prefix + "state", "");
			setValue(prefix + "city", "");
			setValue(prefix + "street", "");
		}

		if (zipCode.length == 8) {
			try {
				const info = await axios.get(
					`https://viacep.com.br/ws/${zipCode}/json/`
				);

				if (info.data.erro) {
					throw new Error("Invalid zipcode");
				}

				setValue(prefix + "state", info.data.uf);
				setValue(prefix + "city", info.data.localidade);
				setValue(prefix + "street", info.data.logradouro);
			} catch (error) {
				setValue(prefix + "state", "");
				setValue(prefix + "city", "");
				setValue(prefix + "street", "");
				toast.error("CEP inválido");
				console.error(error);
			}
		}
	}

	return (
		<UserContext.Provider
			value={{
				registerUser,
				signInUser,
				globalLoading,
				setGlobalLoading,
				user,
				setUser,
				getUser,
				userProfile,
				getUserProfile,
				updateUser,
				deleteUser,
				sendEmail,
				resetPassword,
				checkZipCode,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default Providers;
