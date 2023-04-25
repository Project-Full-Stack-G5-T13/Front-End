import { ReactNode } from "react";

export interface ICardProps {
	car: {
		images: {
			main_image: string;
		};
		model: string;
		description: string;
		user: {
			name: string;
			image_url: string;
		};
		km: number;
		launch_year: string;
		price: number;
		is_active: boolean;
	};

	good_price?: boolean;
	is_active?: boolean;
}

export interface IAdsReturn {
	id: string;
	brand: string;
	model: string;
	launch_year: string;
	car_color: string;
	fuel_type: string;
	fuel: number;
	km: number;
	price: number;
	price_table?: string;
	description: string;
	is_active: boolean;
	sold: boolean;
	images: {
		id: string;
		main_image: string;
		image_one?: string;
		image_two?: string;
		image_three?: string;
		image_four?: string;
		image_five?: string;
	};
	user: {
		name: string;
		image_url: string;
	};
}

export interface ICardListProps {
	ads: IAdsReturn[];
}

// Ads context: 
export interface IProvidersAdsProps {
	children: ReactNode;
}

export interface IAdsCreate {
	brand: string;
	model: string;
	car_color: string;
	fuel_type: string;
	description: string;
	km: number;
	launch_year: string;
	price_table?: number;
	price: number;
	images: {
		main_image: string;
		image_one?: string;
		image_two?: string;
		image_three?: string;
	};
}
  
export interface IBrandObject {
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
  
export interface IAdsContext {
	modalAds: boolean;
	setModalAds: React.Dispatch<React.SetStateAction<boolean>>;
	carsTableKenzie: IBrandObject;
	setCarsTableKenzie: React.Dispatch<React.SetStateAction<IBrandObject>>;
	brandSelect: string;
	setBrandSelect: React.Dispatch<React.SetStateAction<string>>;
	model: IModel[];
	modelSelect: string;
	setModelSelect: React.Dispatch<React.SetStateAction<string>>;
	// allAds:iAdsCreate[];
	// setAllAds: React.Dispatch<React.SetStateAction<iAdsCreate[]>>
	createAds: (data: IAdsCreate) => Promise<void>;
}

export interface IModel {
	brand: string;
	fuel: number;
	id: string;
	name: string;
	value: number;
	year: string;
}