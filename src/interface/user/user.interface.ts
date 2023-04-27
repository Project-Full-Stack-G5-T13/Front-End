import { ReactNode } from "react";
import { IAdsReturn } from "../card/card.interface";
import { IUserUpdate } from "../../components/ModalEditUser";
import { IAddressUpdateRequest } from "../../components/ModalEditAddress";

//contexts/UserContext:
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

export interface IUserWithCars extends IUser {
  cars: IAdsReturn[];
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
  userProfile: IUserWithCars;
  getUserProfile(userId: string): Promise<void>;
  updateUser: (
    data: IUserUpdate | IAddressUpdateRequest,
    closeModal: () => void
  ) => Promise<Omit<IUser, "address">>;
  deleteUser: (closeModal: () => void) => Promise<void>;
  sendEmail: (data: ISendEmail) => Promise<void>;
  resetPassword: (data: IResetPassword, token: string) => Promise<void>;
}

//Components/UserAvatar:
export interface IUserAvatarProps {
  user: {
    name: string;
    image_url?: string;
  };
}

export interface ISendEmail {
  email: string;
}

export interface IResetPassword {
  password: string;
  confirmPassword: string;
}
