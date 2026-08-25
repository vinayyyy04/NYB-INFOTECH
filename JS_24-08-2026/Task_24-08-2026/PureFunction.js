function calculateEMI(price, months) {
  return price / months;
}

function showEMI() {
  const emi = calculateEMI(1200000, 60);

  document.getElementById("emiResult").innerText =
    "Monthly EMI: ₹" + emi.toLocaleString();
}