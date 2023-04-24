import { createContext, useState, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import jwtDecode from "jwt-decode";
import { set } from "react-hook-form";
import axios from "axios";

interface iProvidersProps {
	children: ReactNode;
}

export interface iFormLogin {
	email: string;
	password: string;
}

export interface iFormSignup {
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

export interface iUser {
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

interface iJwtDecoded {
	exp: number;
	iat: number;
	isAdm: boolean;
	isSeller: boolean;
	sub: string;
}

interface iUserContext {
	registerUser: (data: iFormSignup) => Promise<void>;
	signInUser: (data: iFormLogin) => Promise<void>;
	globalLoading: boolean;
	setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
	user: iUser | undefined;
	setUser: React.Dispatch<React.SetStateAction<iUser | undefined>>;
	getUser: () => Promise<void>;
}

export const UserContext = createContext({} as iUserContext);

const Providers = ({ children }: iProvidersProps) => {
	const navigate = useNavigate();

	const [globalLoading, setGlobalLoading] = useState<boolean>(false);
	const [user, setUser] = useState<iUser>();

	async function getUser() {
		try {
			const token = localStorage.getItem("@Motors:token");
			const userId = localStorage.getItem("@Motors:userId");
			api.defaults.headers.common.Authorization = `Bearer ${token}`;
			const response = await api.get(`users/${userId}`);
			const myUser: iUser = response.data;
			setUser(myUser);
			navigate("/");
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getUser();
	}, []);

	async function signInUser(data: iFormLogin): Promise<void> {
		setGlobalLoading(true);
		try {
			const response = await api.post("/session", data);
			localStorage.setItem("@Motors:token", response.data.token);
			const decoded: iJwtDecoded = jwtDecode(response.data.token);
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

	async function registerUser(data: iFormSignup): Promise<void> {
		try {
			await api.post("/users", data);

			navigate("/login");
			toast.success("Usuário cadastrado com sucesso!");
		} catch (error) {
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
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default Providers;
