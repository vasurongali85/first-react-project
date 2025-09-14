// discountutils.js

export function calculateTotal(cartItems) {
  return cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
}

// ✅ Return discount amount (not final price)
export function calculateButtonDiscount(total, discountPercent) {
  return (total * discountPercent) / 100;
}

export function getcoupondiscount(couponCode, price) {
  let discountPercentage = 0;

  switch (couponCode.toUpperCase().trim()) {
    case "LOVE30":
      discountPercentage = 10;
      break;
    case "BITE20":
      discountPercentage = 20;
      break;
    case "HELLOMOWA10":
      discountPercentage = 30;
      break;
    default:
      discountPercentage = 0;
  }

  const discountAmount = (discountPercentage * price) / 100;

  return {
    isValid: discountPercentage > 0,
    discountAmount,
    discountPercentage,
    message: discountPercentage > 0
      ? `🎉 Coupon applied! You saved ₹${discountAmount}`
      : "❌ Invalid coupon code",
  };
}
