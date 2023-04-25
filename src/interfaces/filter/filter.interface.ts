export interface IHomeFilter {
	brands: string[];
	models: string[];
	colors: string[];
	years: string[];
	fuels: string[];
	handleSetQuery: (type: string, value: string) => void;
}