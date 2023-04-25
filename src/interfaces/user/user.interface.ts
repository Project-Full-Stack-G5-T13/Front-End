import { ReactNode } from "react";

export interface IUserAvatarProps {
	user: {
		name: string;
		image_url?: string;
	};
}

export interface IProvidersProps {
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

export interface IUser {
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

export interface IJwtDecoded {
	exp: number;
	iat: number;
	isAdm: boolean;
	isSeller: boolean;
	sub: string;
}

export interface IUserContext {
	registerUser: (data: IFormSignup) => Promise<void>;
	signInUser: (data: IFormLogin) => Promise<void>;
	globalLoading: boolean;
	setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
	user: IUser | undefined;
	setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
	getUser: () => Promise<void>;
}