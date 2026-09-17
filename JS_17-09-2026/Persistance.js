const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const cartList = document.getElementById("cartList");

// Retrieve saved cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display cart
function displayCart() {
    cartList.innerHTML = "";

    cart.forEach(function (product, index) {

        const li = document.createElement("li");
        li.textContent = product;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = " Remove";

        deleteBtn.addEventListener("click", function () {

            cart.splice(index, 1);

            // Update Local Storage
            localStorage.setItem("cart", JSON.stringify(cart));

            displayCart();
        });

        li.appendChild(deleteBtn);
        cartList.appendChild(li);
    });
}

// Add product
addBtn.addEventListener("click", function () {

    const product = productInput.value.trim();

    if (product === "") {
        return;
    }

    cart.push(product);

    // Save cart
    localStorage.setItem("cart", JSON.stringify(cart));

    productInput.value = "";

    displayCart();
});

// Load saved cart when page opens
displayCart();