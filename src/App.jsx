// import { Link, NavLink, Route, Routes } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; 
// import "./App.css";

// import Home from "./Home";
// import Cakes from "./Cakes";
// import Snacks from "./Snacks";
// import Chocolates from "./Chocolates";
// import Orders from "./Orders";
// import Sweets from "./Sweets";
// import Drinks from "./Drinks";
// import ContactUs from "./ContactUs";
// import Error from "./Error";
// import Cart from "./Cart";
// import AboutUs from "./AboutUs";
// import Login from "./Login";
// import SignUp from "./SignUp";
// import { FaHome, FaPizzaSlice, FaDrumstickBite, FaCoffee, FaShoppingCart, FaBoxOpen, FaPhone, FaInfoCircle } from "react-icons/fa";

// function App() {
//   const cartItems = useSelector((state) => state.cart);
//   const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow">
//         <div className="container-fluid">
//           <Link className="navbar-brand d-flex flex-column lh-1" to="/">
//             <span className="brand-title">LoveBites💖</span>
//             <small className="brand-tagline">“A Taste of Romance in Every Bite” 🌹</small>
//           </Link>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//              <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
//             <ul className="navbar-nav align-items-center">
//               <li className="nav-item ">
//                 <NavLink className="nav-link d-flex align-items-center" to="/">
//                   <FaHome className="me-1" /> Home
//                 </NavLink>
//               </li>
//               <li className="nav-item mx-2">
//                 <NavLink className="nav-link d-flex align-items-center" to="/cakes">
//                   <FaPizzaSlice className="me-1" /> Cakes
//                 </NavLink>
//               </li>
//               <li className="nav-item ">
//                 <NavLink className="nav-link d-flex align-items-center" to="/snacks">
//                   <FaBoxOpen className="me-1" /> Snacks
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link d-flex align-items-center" to="/chocolates">
//                   <FaDrumstickBite className="me-1" /> Chocolates
//                 </NavLink>
//               </li>
//               <li className="nav-item ">
//                 <NavLink className="nav-link d-flex align-items-center" to="/drinks">
//                   <FaCoffee className="me-1" /> Drinks
//                 </NavLink>
//               </li>
//               <li className="nav-item  position-relative">
//                 <NavLink className="nav-link d-flex align-items-center" to="/cart">
//                   <FaShoppingCart className="me-1" />
//                   Cart
//                   {totalQuantity > 0 && (
//                     <span className="cart-badge">{totalQuantity}</span>
//                   )}
//                 </NavLink>
//               </li>
//               <li className="nav-item ">
//                 <NavLink className="nav-link d-flex align-items-center" to="/orders">
//                   <FaBoxOpen className="me-1" /> Orders
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link d-flex align-items-center" to="/contactus">
//                   <FaPhone className="me-1" /> Contact
//                 </NavLink>
//               </li>
//               <li className="nav-item ">
//                 <NavLink className="nav-link d-flex align-items-center" to="/aboutus">
//                   <FaInfoCircle className="me-1" /> About
//                 </NavLink>
//               </li>
//             </ul>
//             <div className="ms-auto">
//               <Link className="btn btn-outline-warning rounded-pill" to="/login">
//                 Account
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Page content */}
//       <div className="container content" style={{ paddingTop: "80px", paddingBottom: "50px" }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/cakes" element={<Cakes />} />
//           <Route path="/snacks" element={<Snacks />} />
//           <Route path="/chocolates" element={<Chocolates />} />
//           <Route path="/sweets" element={<Sweets />} />
//           <Route path="/drinks" element={<Drinks />} />
//           <Route path="/aboutus" element={<AboutUs />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/contactus" element={<ContactUs />} />
//           <Route path="/signup" element={<SignUp/>} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/*" element={<Error />} />
//         </Routes>
//       </div>

//       {/* ✅ Toastify container must be added once at root */}
//       <ToastContainer 
//         position="top-center"
//         autoClose={2500}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         pauseOnHover
//         draggable
//         theme="light"
//       />
//     </>
//   );
// }

// export default App;
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Home from "./Home";
import Cakes from "./Cakes";
import Snacks from "./Snacks";
import Chocolates from "./Chocolates";
import Orders from "./Orders";
import Sweets from "./Sweets";
import Drinks from "./Drinks";
import ContactUs from "./ContactUs";
import Error from "./Error";
import Cart from "./Cart";
import AboutUs from "./AboutUs";
import Login from "./Login";
import SignUp from "./SignUp";
import {
  FaHome,
  FaPizzaSlice,
  FaDrumstickBite,
  FaCoffee,
  FaShoppingCart,
  FaBoxOpen,
  FaPhone,
  FaInfoCircle,
} from "react-icons/fa";

function App() {
  const cartItems = useSelector((state) => state.cart);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* ===== Navbar ===== */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow bg-pink">
        <div className="container-fluid flex-column">
          {/* === Top Row: Brand + Search + Right Icons === */}
          <div className="d-flex w-100 justify-content-between align-items-center py-2">
            {/* Brand */}
            <Link className="navbar-brand d-flex flex-column lh-1 me-3" to="/">
              <span className="brand-title">LoveBites💖</span>
              <small className="brand-tagline">
                “A Taste of Romance in Every Bite” 🌹
              </small>
            </Link>

            {/* Center Search Bar */}
            <form className="d-none d-md-flex flex-grow-1 mx-3">
              <input
                className="form-control rounded-pill px-3"
                type="search"
                placeholder="Search your favorite treat..."
                aria-label="Search"
              />
            </form>

            {/* Right Icons */}
            <div className="d-flex align-items-center gap-3">
              <Link className="nav-link position-relative" to="/cart">
                <FaShoppingCart size={22} />
                {totalQuantity > 0 && (
                  <span className="cart-badge">{totalQuantity}</span>
                )}
              </Link>
              <Link className="btn btn-outline-warning rounded-pill" to="/login">
                Account
              </Link>
              <Link className="btn btn-outline-light rounded-pill" to="/aboutus">
                About
              </Link>
            </div>
          </div>

          {/* === Bottom Row: Nav Links === */}
          <div className="collapse navbar-collapse show justify-content-center w-100 border-top pt-2">
            <ul className="navbar-nav flex-wrap justify-content-center">
              <li className="nav-item mx-2">
                <NavLink className="nav-link d-flex align-items-center" to="/">
                  <FaHome className="me-1" /> Home
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link d-flex align-items-center" to="/cakes">
                  <FaPizzaSlice className="me-1" /> Cakes
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link d-flex align-items-center" to="/snacks">
                  <FaBoxOpen className="me-1" /> Snacks
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link d-flex align-items-center" to="/chocolates">
                  <FaDrumstickBite className="me-1" /> Chocolates
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link d-flex align-items-center" to="/sweets">
                  🍬 Sweets
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link d-flex align-items-center" to="/drinks">
                  <FaCoffee className="me-1" /> Drinks
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link d-flex align-items-center" to="/orders">
                  <FaBoxOpen className="me-1" /> Orders
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link d-flex align-items-center" to="/contactus">
                  <FaPhone className="me-1" /> Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ===== Page Content ===== */}
      <div
        className="container content"
        style={{ paddingTop: "140px", paddingBottom: "50px" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/chocolates" element={<Chocolates />} />
          <Route path="/sweets" element={<Sweets />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>

    
    </>
  );
}

export default App;
