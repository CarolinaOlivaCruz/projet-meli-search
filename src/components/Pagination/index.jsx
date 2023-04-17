import React, { useEffect } from "react";

function Pagination({
  handlePageChange,
  totalResults,
  currentPage,
  resultsPerPage,
  setCurrentPage,
  setLoading,
}) {
  const numPages = Math.ceil(totalResults / resultsPerPage);

  useEffect(() => {
    if (currentPage < 1) {
      setCurrentPage(1);
    }
  }, [totalResults, currentPage, resultsPerPage, setCurrentPage]);

  let startIndex, endIndex;
  if (numPages <= 9) {
    startIndex = 1;
    endIndex = numPages;
  } else {
    if (currentPage <= 5) {
      startIndex = 1;
      endIndex = 9;
    } else if (currentPage >= numPages - 4) {
      startIndex = numPages - 8;
      endIndex = numPages;
    } else {
      startIndex = currentPage - 4;
      endIndex = currentPage + 4;
    }
  }

  const pageNumbers = Array.from(
    { length: endIndex - startIndex + 1 },
    (_, i) => startIndex + i
  );

  return (
    <div className="pagination-container">
      {currentPage > 1 && (
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
      )}
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`pagination-button${
            pageNumber === currentPage ? " active" : ""
          }`}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      {currentPage < numPages && (
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;
