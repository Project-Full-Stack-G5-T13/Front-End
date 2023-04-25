import { useState } from "react";
import { StyledHeading_7_500 } from "../../styles/typografy";
import HomeFilter from "../HomeFilter";
import { StyledModal, StyledModalTitle } from "./styled";
import { IModalProps } from "../../interfaces/modal/modal.interface";


const Modal = ({ children }: IModalProps) => {
	return (
		<StyledModal>
			<div>{children}</div>
		</StyledModal>
	);
};

export default Modal;
