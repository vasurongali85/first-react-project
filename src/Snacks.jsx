import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "./store";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Snacks() {
  const dispatch = useDispatch();
  const snackItems = useSelector((state) => state.product.snacks);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = snackItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(snackItems.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="item-container">
      <h1>Yummy Snacks – Crunch & Munch 🍟🥨</h1>

      <div className="item-list d-flex flex-wrap justify-content-center gap-3">
        {currentItems.map((product) => (
          <div key={product.id}>
            <div className="card h-100 shadow-sm" style={{ width: "250px" }}>
              <img
                src={product.imageurl}
                alt={product.Name}
                className="card-img-top product-img"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.Name}</h5>
                <p className="card-text text-muted">Crispy & tasty</p>
                <h6 className="price-tag mb-3">
                  <b>₹{product.price}</b>
                </h6>
                <button
                  onClick={() => {
                    dispatch(addtocart(product));
                    toast.success(`${product.Name} added to cart ✅`, {
                      autoClose: 2000,
                      theme: "colored",
                    });
                  }}
                  className="btn btn-success"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

           {/* Pagination */}
      <div className="d-flex justify-content-center mt-4 gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="btn btn-outline-dark"
          disabled={currentPage === 1}
        >
          &lt; Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`btn ${
              page === currentPage ? "btn-dark" : "btn-outline-dark"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="btn btn-outline-dark"
          disabled={currentPage === totalPages}
        >
          Next &gt;
        </button>
      </div>


      <ToastContainer position="top-right" />
    </div>
  );
}

export default Snacks;
