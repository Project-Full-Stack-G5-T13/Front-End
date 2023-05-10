import { ReactNode } from "react";
import { StyledModal } from "./styled";

interface IModalComments {
	children: ReactNode;
	onClose: () => void;
}

const CommentsModal = ({ children }: IModalComments) => {
	return (
		<StyledModal>
			<div>{children}</div>
		</StyledModal>
	);
};

export default CommentsModal;
