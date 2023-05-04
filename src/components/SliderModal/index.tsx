import { Modal } from "./style";
import { IoClose } from "react-icons/io5";
import { IAdsCompleteReturn } from "../../interface/card/card.interface";
import { useEffect, useState } from "react";

interface SliderModalProps {
	onClose: () => void;
	data: {
		images: string[];
		firstImage: number;
		model: string;
	};
}

const SliderModal = ({ onClose, data }: SliderModalProps) => {
	const [currentIndex, setCurrentIndex] = useState(data.firstImage);

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? data.images.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const goToNext = () => {
		const isLastSlide = currentIndex === data.images.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<Modal
			id="overlay"
			onClick={(e: React.MouseEvent<HTMLDivElement>) => {
				const target = e.target as HTMLButtonElement;
				if (target.id === "overlay") {
					onClose();
				}
			}}
		>
			<div className="modal-wrapper">
				<div className="modal-header">
					<h3>{data.model}</h3>
					<button onClick={onClose}>
						<IoClose />
					</button>
				</div>
				<div className="modal-content">
					<div onClick={goToPrevious} className="left-arrow">
						❰
					</div>
					<div onClick={goToNext} className="right-arrow">
						❱
					</div>
					<div className="images-box">
						{data.images.map((i, index) => {
							return (
								<img
									key={index}
									className={`slides ${index === currentIndex ? "active" : ""}`}
									src={i}
									alt="car image"
								/>
							);
						})}
					</div>
				</div>
				<div className="modal-footer">
					<div className="dots-container">
						{data.images.map((slide, slideIndex) => (
							<div
								className={`dots ${slideIndex === currentIndex ? "active" : ""}`}
								key={slideIndex}
								onClick={() => goToSlide(slideIndex)}
							>
								●
							</div>
						))}
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default SliderModal;
