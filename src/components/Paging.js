import React from 'react';
import styles from '../styles/Paging.module.css'; // Pagination.module.css를 사용

const Paging = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (pageNumber) => {
        onPageChange(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={currentPage === i ? styles.active : ''}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className={styles.pagination}>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Prev
            </button>
            {renderPageNumbers()}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
};

export default Paging;