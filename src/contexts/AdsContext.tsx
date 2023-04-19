import { createContext, useState, ReactNode, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

interface iProvidersAdsProps {
  children: ReactNode;
}

export interface iAdsCreate {
  brand: string;
  model: string;
  car_color: string;
  fuel_type: string;
  fuel: number;
  description: string;
  km: number;
  launch_year: string;
  price_table?: string;
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
}

interface iModel {
  name: any;
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

        // console.log(response.data);
        // console.log(typeof response.data);
        setModel(response.data);
      } catch (error) {
        console.log("Deu erro");
      }
    }

    brandSelectRequest();
  }, [brandSelect]);

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
      }}
    >
      {children}
    </AdsContext.Provider>
  );
};

export default AdsProvider;
