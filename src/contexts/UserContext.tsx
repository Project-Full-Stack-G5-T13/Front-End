import { createContext, useState, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import jwtDecode from "jwt-decode";
import { set } from "react-hook-form";
import axios from "axios";
import { IFormLogin, IFormSignup, IJwtDecoded, IProvidersProps, IUser, IUserContext, IUserWithCars } from "../interface/user/user.interface";


export const UserContext = createContext({} as IUserContext);

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
		try {
			await api.post("/users", data);

			navigate("/login");
			toast.success("Usuário cadastrado com sucesso!");
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (
					error?.response?.data.message == "There is already an account with this email"
				) {
					toast.error("Já existe uma conta com este e-mail");
				} else if (
					error?.response?.data.message ==
					"There is already an account with this phone number"
				) {
					toast.error("Já existe uma conta com este número de telefone");
				} else if (
					error?.response?.data.message == "There is already an account with this cpf"
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
				userProfile,
				getUserProfile,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default Providers;
