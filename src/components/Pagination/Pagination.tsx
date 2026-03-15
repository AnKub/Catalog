import React from 'react';
import './Pagination.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav className="pagination" aria-label="Pagination navigation">
      <button
        className="pagination__arrow"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Previous page"
        tabIndex={0}
      >
        &#8592;
      </button>
      {pages.map(page => (
        <button
          key={page}
          className={`pagination__page${page === currentPage ? ' pagination__page--active' : ''}`}
          onClick={() => onPageChange(page)}
          aria-label={`Page ${page}`}
          tabIndex={0}
        >
          {page}
        </button>
      ))}
      <button
        className="pagination__arrow"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Next page"
        tabIndex={0}
      >
        &#8594;
      </button>
    </nav>
  );
};

export default Pagination;
