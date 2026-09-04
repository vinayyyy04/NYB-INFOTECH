// API URL


const API_URL = "https://fakestoreapi.com/products";


const loading = document.getElementById("loading");

const errorMessage = document.getElementById("error");

const productGrid = document.getElementById("productGrid");



// FETCH PRODUCTS


async function fetchProducts() {

    try {

        // Show loading message

        loading.style.display = "flex";

        errorMessage.style.display = "none";


        // Send GET request to API

        const response = await fetch(API_URL);


        // Check if request was successful

        if (!response.ok) {

            throw new Error(
                `HTTP Error: ${response.status}`
            );

        }


        // Convert response into JavaScript data

        const products = await response.json();


        // Hide loading message

        loading.style.display = "none";


        // Display products

        displayProducts(products);


    } catch (error) {

        // Hide loading

        loading.style.display = "none";


        // Show error message

        errorMessage.style.display = "block";

        errorMessage.textContent =
            "❌ Unable to load products. Please try again later.";


        // Show error in console

        console.error(
            "API Error:",
            error.message
        );

    }

}

// DISPLAY PRODUCTS


function displayProducts(products) {

    // Clear existing products

    productGrid.innerHTML = "";


    // Loop through products

    products.forEach(product => {

        // Create product card

        const card = document.createElement("article");


        card.classList.add("product-card");


        // Add product information

        card.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.title}"
                class="product-image"
            >

            <div class="product-content">

                <h3 class="product-title">
                    ${product.title}
                </h3>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="product-footer">

                    <span class="price">
                        $${product.price}
                    </span>

                    <span class="category">
                        ${product.category}
                    </span>

                </div>

            </div>

        `;


        // Add card to the webpage

        productGrid.appendChild(card);

    });

}

// START APPLICATION


fetchProducts();