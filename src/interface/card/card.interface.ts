import { ReactNode } from "react";

//contexts/AdsContext:
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
	launch_year: number;
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
	globalLoading: boolean;
	createAds: (data: IAdsCreate) => Promise<void>;
	colorSelect: string;
	setColorSelect: React.Dispatch<React.SetStateAction<string>>;
}
export interface IModel {
	brand: string;
	fuel: number;
	id: string;
	name: string;
	value: number;
	year: number;
}

//Components/Card:
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
			id: string;
		};
		km: number;
		launch_year: number;
		price: number;
		is_active: boolean;
		id: string;
	};

	good_price?: boolean;
	profile?: boolean;
	edit?: (id: string) => void;
}

//Components/CarList:
export interface ICardListProps {
	ads?: IAdsReturn[];
	removeInactive?: boolean;
	children?: ReactNode;
}

//pages/Dashboard:
export interface IAdsReturn {
	id: string;
	brand: string;
	model: string;
	launch_year: number;
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
	// user_id: string;
	user: {
		id: string;
		name: string;
		image_url: string;
		description: string;
		phone_number: number;
	};
}

export interface IComment {
	id: string;
	description: string;
	user_id: string;
	// car_id: string;
	created_at: Date;
}

export interface IAdsCompleteReturn extends IAdsReturn {
	comments: IComment[];
}
