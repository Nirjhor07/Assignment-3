// Problem Statement - 1
function newPrice(currentPrice, discount) {
  if (typeof currentPrice !== "number" || typeof discount !== "number") {
    return "Invalid";
  } else if (discount <= 0 || discount >= 100) {
    return "Invalid";
  }
  const discountAmount = (currentPrice * discount) / 100;
  const newPrice = currentPrice - discountAmount;
  const actualOutput = newPrice.toFixed(3);
  return actualOutput;
}
