import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  addOrder,
} from "./store";
import {
  calculateButtonDiscount,
  calculateTotal,
  getcoupondiscount,
} from "./discountutils";
import { useState } from "react";
import QRCode from "react-qr-code";
import "./cart.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const TotalBill = calculateTotal(cartItems);

  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [couponResult, setCouponResult] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");

  const buttonDiscountAmount = calculateButtonDiscount(TotalBill, discount);
  const priceAfterButtonDiscount = TotalBill - buttonDiscountAmount;
  const couponDiscount = couponResult ? couponResult.discountAmount : 0;
  const codSurcharge = paymentMethod === "cod" ? 30 : 0;
  const finalPrice = priceAfterButtonDiscount - couponDiscount + codSurcharge;

  // ✅ Coupon apply
  const handleCouponcode = () => {
    const result = getcoupondiscount(couponCode, TotalBill);
    setCouponResult(result);

    if (result.isValid) {
      toast.success(`🎟️ Coupon applied: -₹${result.discountAmount}`, {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      toast.error("❌ Invalid Coupon Code!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  // ✅ Checkout
  const handleCheckout = () => {
    if (!paymentMethod) {
      Swal.fire({
        icon: "warning",
        title: "⚠️ Select Payment Method",
        text: "Please select a payment method before checkout!",
      });
      return;
    }
    if (cartItems.length === 0) return;

    const purchaseDetails = {
      id: Date.now(),
      items: [...cartItems],
      total: finalPrice,
      date: new Date().toLocaleString(),
      paymentMethod,
    };

    dispatch(addOrder(purchaseDetails));
    dispatch(clearCart());

    Swal.fire({
      icon: "success",
      title: "✅ Order Placed!",
      html: `<b>Payment Method:</b> ${paymentMethod.toUpperCase()} <br/> Total: ₹${finalPrice}`,
      confirmButtonText: "OK",
    });

    toast.success("🎉 Order placed successfully! Cart cleared.", {
      position: "top-right",
      autoClose: 2500,
      theme: "colored",
    });

    setPaymentMethod("");
  };

  return (
    <div className="cart-layout container">
      {cartItems.length === 0 ? (
        <div>
          <h3>🛒 Your cart is empty</h3>
          <p>Add some yummy food to make it happy! 🍔🍕🍩</p>
        </div>
      ) : (
        <>
          {/* LEFT: Cart Items */}
          <div className="cart-items">
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;🛍️ Your Cart ({cartItems.length} items)</h2>
            {cartItems.map((item, index) => (
              <div className="cart-card" key={item.id || index}>
                <div className="cart-left">
                  <img
                    src={item.imageurl}
                    alt={item.Name}
                    className="cart-img"
                  />
                  <div className="qty-controls">
                    <button
                      onClick={() => {
                        dispatch(decreaseQuantity(item));
                        toast.info(` Reduced 1 ${item.Name}`, {
                          position: "top-right",
                          autoClose: 2000,
                          theme: "colored",
                        });
                      }}
                      className="qty-btn"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => {
                        dispatch(increaseQuantity(item));
                        toast.success(` Added 1 more ${item.Name}`, {
                          position: "top-right",
                          autoClose: 2000,
                          theme: "colored",
                        });
                      }}
                      className="qty-btn1"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-center">
                  <h5>🍽️ {item.Name}</h5>
                </div>

                <div className="cart-right">
                  <p className="price"> ₹{item.price * item.quantity}.00</p>
                  <button
                    onClick={() => {
                      dispatch(removeFromCart(item));
                      toast.error(`🗑️ Removed ${item.Name} from cart`, {
                        position: "top-right",
                        autoClose: 2000,
                        theme: "colored",
                      });
                    }}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Order Summary */}
          <div className="order-summary">
            <h3>📦 Order Summary</h3>
            <p>🧾 Subtotal:   &nbsp;₹ {TotalBill}</p>
            <p className="text-success">🏷️ Manual Discount: &nbsp;₹{buttonDiscountAmount}</p>
            <p className="text-success">🎟️ Coupon Discount: &nbsp;₹{couponDiscount}</p>
            {paymentMethod === "cod" && <p className="text-danger">💵 COD Charge: +₹30</p>}
            <h4>💳 Grand Total: <b>₹{finalPrice}</b></h4>

            {/* Manual Discounts */}
            <div className="mt-3">
              <h5>🏷️ Quick Discounts</h5>
              {[10, 20, 30].map((percent) => (
                <button
                  key={percent}
                  onClick={() => {
                    setDiscount(percent);
                    toast.info(`🔥 ${percent}% discount applied!`, {
                      position: "top-right",
                      autoClose: 2000,
                    });
                  }}
                  className={`btn m-1 ${
                    discount === percent
                      ? "btn-success"
                      : "btn-outline-primary"
                  }`}
                >
                  🔥 {percent}%
                </button>
              ))}
              <button
                onClick={() => {
                  setDiscount(0);
                  toast.warning("♻️ Discounts cleared", {
                    position: "top-right",
                    autoClose: 2000,
                  });
                }}
                className="btn btn-outline-secondary m-1"
              >
                ♻️ Clear
              </button>
            </div>

            {/* Coupon */}
            <div className="mt-3">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="🎟️ Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button className="btn btn-success w-100" onClick={handleCouponcode}>
                Apply Coupon ✅
              </button>
              {couponResult && (
                <p
                  className={
                    couponResult.isValid ? "text-success" : "text-danger"
                  }
                >
                  {couponResult.message}
                </p>
              )}
            </div>

            {/* Payment */}
            <div className="mt-3">
              <h5>💳 Select Payment Method:</h5>
              <button
                className={`btn w-100 m-1 ${
                  paymentMethod === "qr"
                    ? "btn-success"
                    : "btn-outline-success"
                }`}
                onClick={() => setPaymentMethod("qr")}
              >
                📲 QR Code
              </button>
              <button
                className={`btn w-100 m-1 ${
                  paymentMethod === "cod"
                    ? "btn-warning"
                    : "btn-outline-warning"
                }`}
                onClick={() => setPaymentMethod("cod")}
              >
                💵 Cash on Delivery
              </button>

              {paymentMethod === "qr" && (
                <div className="text-center mt-3">
                  <h6>📷 Scan QR to Pay ₹ {finalPrice}</h6>
                  <QRCode
                    value={`upi://pay?pa=vasurongali85@ybl&pn=Ratan&am=${finalPrice}`}
                    size={200}
                  />
                </div>
              )}
            </div>

            <button
              className="btn btn-lg btn-primary w-100 mt-2"
              onClick={handleCheckout}
              disabled={!paymentMethod}
            >
              Place Order ✅
            </button>
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
}

export default Cart;
