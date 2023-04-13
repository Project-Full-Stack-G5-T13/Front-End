import { ReactNode, useState } from "react";
import { StyledHeading_7_500 } from "../../styles/typografy";
import HomeFilter from "../HomeFilter";
import { StyledModal, StyledModalTitle } from "./styled";

interface IModalProps {
	children: ReactNode;
}

const Modal = ({ children }: IModalProps) => {
	return (
		<StyledModal>
			<div>{children}</div>
		</StyledModal>
	);
};

export default Modal;
