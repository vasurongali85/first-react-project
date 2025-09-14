import { useState } from "react";
import "./PaginatedList.css"; // CSS for styling

function PaginatedList({ items, title, itemsPerPage = 5 }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Items for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (number) => {
    if (number >= 1 && number <= totalPages) {
      setCurrentPage(number);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // ✅ Fixed Amazon-style pagination
  const renderPages = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 3) pages.push("...");

      if (currentPage > 1) pages.push(currentPage - 1);
      if (currentPage !== 1 && currentPage !== totalPages) pages.push(currentPage);
      if (currentPage < totalPages) pages.push(currentPage + 1);

      if (currentPage < totalPages - 2) pages.push("...");

      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="category-section">
      <h1>{title}</h1>

      <ul className="item-list">
        {currentItems.map((item) => (
          <li key={item.id} className="item">
            <img
              src={item.imageurl}
              alt={item.Name}
              width="80"
              height="80"
              style={{ objectFit: "cover", marginRight: "10px" }}
            />
            {item.Name} - ₹{item.price}
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt; Prev
        </button>

        {renderPages().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && handlePageChange(page)}
            className={page === currentPage ? "active" : ""}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
}

export default PaginatedList;
