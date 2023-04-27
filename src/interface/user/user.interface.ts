import { ReactNode } from "react";
import { IAdsReturn } from "../card/card.interface";
import { IUserUpdate } from "../../components/ModalEditUser";
import { IAddressUpdateRequest } from "../../components/ModalEditAddress";

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
