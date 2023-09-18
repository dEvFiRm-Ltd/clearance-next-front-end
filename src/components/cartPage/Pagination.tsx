import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
  const maxButtonsToShow = 9;
  const halfMaxButtonsToShow = Math.floor(maxButtonsToShow / 2);

  const getStartPage = () => {
    if (totalPages <= maxButtonsToShow) {
      return 1;
    } else if (currentPage <= halfMaxButtonsToShow) {
      return 1;
    } else if (currentPage >= totalPages - halfMaxButtonsToShow) {
      return totalPages - maxButtonsToShow + 1;
    } else {
      return currentPage - halfMaxButtonsToShow;
    }
  };

  const getEndPage = () => {
    if (totalPages <= maxButtonsToShow) {
      return totalPages;
    } else if (currentPage <= halfMaxButtonsToShow) {
      return maxButtonsToShow;
    } else if (currentPage >= totalPages - halfMaxButtonsToShow) {
      return totalPages;
    } else {
      return currentPage + halfMaxButtonsToShow;
    }
  };

  const range = (start: any, end: any) =>
    Array.from({ length: end - start + 1 }, (_, i) => i + start);

  const startPage = getStartPage();
  const endPage = getEndPage();

  return (
    <div className="flex items-center justify-center">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="mr-2 px-3 py-1 border rounded"
      >
        ＜
      </button>

      {range(startPage, endPage).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`mx-1 px-3 py-1 border rounded ${
            currentPage === page ? "bg-blue-500 text-white" : ""
          }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="ml-2 px-3 py-1 border rounded"
      >
        ＞
      </button>
    </div>
  );
};

export default Pagination;
