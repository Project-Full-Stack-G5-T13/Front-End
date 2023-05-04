import { ReactNode } from "react";

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
	is_active?: boolean;
	profile?: boolean;
	edit?: (id: string) => void;
}

//Components/CarList:
export interface ICardListProps {
	ads: IAdsReturn[];
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
	user: {
		name: string;
		image_url: string;
		id: string;
	};
}
