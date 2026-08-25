const carPrice = 5000000;

function addTax(price) {
  return price + 500000;
}

function applyDiscount(price) {
  return price - 300000;
}

function calculatePrice(operation) {
  const result = operation(carPrice);

  document.getElementById("priceResult").innerText =
    "Car Price: ₹" + result.toLocaleString();
}