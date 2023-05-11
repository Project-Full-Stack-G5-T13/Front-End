import React, { useState } from "react";
import { StyledPagination } from "./style";
interface PaginationProps {
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	totalPages: number;
	hasNextPage: boolean;
	hasPrevPage: boolean;
}

const Pagination = ({
	currentPage,
	totalPages,
	hasNextPage,
	hasPrevPage,
	setCurrentPage,
}: PaginationProps) => {
	const handleNext = () => {
		const nextPage = currentPage + 1;
		if (nextPage <= totalPages) {
			setCurrentPage(nextPage);
		}
	};

	const handlePrev = () => {
		const prevPage = currentPage - 1;
		if (prevPage >= 1) {
			setCurrentPage(prevPage);
		}
	};

	return (
		<StyledPagination>
			<div className="pagination-box">
				<button onClick={handlePrev} className="page-btn" disabled={!hasPrevPage}>
					Anterior
				</button>
				<div>
					<span className="current-page">{currentPage}</span>
					<span className="total-page">{` de ${totalPages}`}</span>
				</div>

				<button onClick={handleNext} className="page-btn" disabled={!hasNextPage}>
					Seguinte
				</button>
			</div>
		</StyledPagination>
	);
};

export default Pagination;
