function discount(price) {
  return price - 100000;
}

function tax(price) {
  return price + 90000;
}

function calculateFinalPrice() {
  const result = tax(discount(1000000));

  document.getElementById("finalPrice").innerText =
    "Final Price: ₹" + result.toLocaleString();
}