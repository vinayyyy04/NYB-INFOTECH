const orderBtn = document.getElementById("orderBtn");
const output = document.getElementById("output");

orderBtn.addEventListener("click", () => {
  output.innerHTML = "";

  function showMessage(message) {
    output.innerHTML += `<p>${message}</p>`;
  }

  // 1. Synchronous code
  showMessage("🛒 Customer placed the order");

  // 2. setTimeout → Macrotask
  setTimeout(() => {
    showMessage("🚚 Food delivered using setTimeout");
  }, 2000);

  // 3. Promise → Microtask
  Promise.resolve().then(() => {
    showMessage("✅ Restaurant accepted the order using Promise");
  });

  // 4. Async/Await
  async function prepareFood() {
    showMessage("👨‍🍳 Chef started preparing the food");

    await Promise.resolve();

    showMessage("🍕 Food is ready using Async/Await");
  }

  prepareFood();

  // 5. Synchronous code
  showMessage("⏳ Customer is waiting...");
});