import { useSelector } from "react-redux";
import { useState } from "react";
import "./OrdersHistory.css";

function OrdersHistory() {
  const orders = useSelector((globalState) => globalState.orders);
  const [openOrder, setOpenOrder] = useState(null); // track which order is open

  const toggleOrder = (id) => {
    setOpenOrder(openOrder === id ? null : id); // close if already open
  };

  return (
    <div className="orders-container pt-5">
      <h3>Your Orders</h3>

      {orders.length === 0 ? (
        <p className="no-orders">
          🛒 No orders placed yet. Add some sweet treats 🍰🍫🍬!
        </p>
      ) : (
        <div className="orders-grid">
          {orders.map((purchase) => (
            <div
              key={purchase.id}
              className={`order-card ${openOrder === purchase.id ? "active" : ""}`}
              onClick={() => toggleOrder(purchase.id)}
            >
              {/* Always visible */}
              <p><b>Order ID:</b> #{purchase.id}</p>
              <p><b>Date:</b> {purchase.date}</p>

              {/* Expand only when clicked */}
              {openOrder === purchase.id && (
                <div className="order-details">
                  <p><b>Total:</b> ₹{purchase.total.toFixed(2)}</p>

                  <ul className="order-items">
                    {purchase.items.map((item, i) => (
                      <li key={i} className="order-item">
                        {item.Name} – ₹{item.price} × {item.quantity}
                      </li>
                    ))}
                  </ul>

                  {purchase.paymentMethod && (
                    <p>
                      <b>Payment:</b>{" "}
                      {purchase.paymentMethod === "qr"
                        ? "📱 QR Code"
                        : purchase.paymentMethod === "card"
                        ? "💳 Card"
                        : purchase.paymentMethod}
                    </p>
                  )}

                  <p className="thank-you">🎉 Thank you for shopping! 🍬</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrdersHistory;
