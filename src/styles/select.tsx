import { useEffect } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

export const StyledSelect = ({
	options,
	control,
	name,
	placeholder,
	theme,
	modal,
	defaultValue,
}: any) => {
	const style = {
		option: (provided: any, state: any) => ({
			...provided,
			borderBottom: "1px solid var(--brand-1)",
			backgroundColor: state.isSelected
				? "var(--grey-5)"
				: state.isFocused
				? "var(--brand-3)"
				: "var(--fixed-whte)",
			padding: 10,
			cursor: "pointer",
			color: "var(--grey-1)",
		}),

		control: (provided: any, state: any) => ({
			...provided,
			height: 40,
			cursor: "pointer",
			backgroundColor: "var(--fixed-white)",
			outline: "none",
			borderRadius: "4px",
			border: `2px solid ${
				state.isFocused ? "var(--brand-1)" : "var(--grey-7)"
			}`,
			boxSizing: "border-box",
			boxShadow: "none",
			":hover": {
				borderColor: "var(--grey-8)",
				backgroundColor: "var(--grey-8)",
			},
		}),
		singleValue: (provided: any, state: any) => ({
			...provided,
			color: "var(--grey-2)",
			":hover": {
				color: "var(--grey-1)",
			},
		}),
		placeholder: (provided: any, state: any) => ({
			...provided,
			color: "var(--grey-3)",
		}),
		indicatorsContainer: (provided: any, state: any) => ({
			...provided,
			svg: {
				color: "var(--brand-2)",
			},
		}),
		menuList: (provided: any) => ({
			...provided,
			backgroundColor: "var(--grey-9)",
			borderRadius: "4px",
			height: 220,
			"::-webkit-scrollbar": {
				width: "6px",
				height: "0px",
			},
			"::-webkit-scrollbar-track": {
				background: "var(--grey-6)",
				borderRadius: "4px",
			},
			"::-webkit-scrollbar-thumb": {
				background: "var(--grey-4)",
				borderRadius: "4px",
			},
			"::-webkit-scrollbar-thumb:hover": {
				background: "var(--grey-3)",
			},
		}),
		indicatorSeparator: (provided: any) => ({
			...provided,
			backgroundColor: "var(--brand-2)",
		}),
	};

	return (
		<>
			<Controller
				name={name}
				shouldUnregister={true}
				control={control}
				render={({ field: { onChange, onBlur } }: any) => {
					return (
						<Select
							styles={style}
							isClearable
							isSearchable={false}
							defaultValue={options.filter((option: any) => {
								if (option.value == defaultValue) {
									useEffect(() => {
										onChange(option.value);
									}, []);
									return option.label;
								}
							})}
							options={options}
							placeholder={placeholder}
							onChange={(event) => onChange(event?.value)}
							onBlur={onBlur}
						/>
					);
				}}
			/>
		</>
	);
};
