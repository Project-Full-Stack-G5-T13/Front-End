import { createContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

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

interface iUserContext {
  registerUser: (data: iFormSignup) => Promise<void>;
  signInUser: (data: iFormLogin) => Promise<void>;
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext({} as iUserContext);

const Providers = ({ children }: iProvidersProps) => {
  const [globalLoading, setGlobalLoading] = useState<boolean>(false);

  const token = localStorage.getItem("@Motors:token");
  const navigate = useNavigate();

  async function signInUser(data: iFormLogin): Promise<void> {
    setGlobalLoading(true);
    try {
      const response = await api.post("/session", data);

      localStorage.setItem("@Motors:token", response.data);

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
      toast.error("Esse usuário já existe!");
    }
  }

  return (
    <UserContext.Provider
      value={{ registerUser, signInUser, globalLoading, setGlobalLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Providers;
