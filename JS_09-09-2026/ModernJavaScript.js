// ==========================================
// PRODUCT DATA
// ==========================================

let product = {
    name: "Wireless Headphones",
    price: 2499,
    brand: "SoundMax",

    specifications: {
        color: "Black",
        battery: "30 Hours"
    },

    reviews: [4, 5, 4, 3, 5]
};


// ==========================================
// 1. DESTRUCTURING
// ==========================================

// Extract product information
let { name, price, brand, reviews } = product;

console.log("Product:", name);
console.log("Price:", price);
console.log("Brand:", brand);


// ==========================================
// 2. SPREAD OPERATOR
// ==========================================

// Create a new array with an additional review
let updatedReviews = [...reviews, 5];

console.log("Updated Reviews:", updatedReviews);


// Create a copy of the product
let updatedProduct = {
    ...product,
    price: 2299
};

console.log("Updated Product:", updatedProduct);


// ==========================================
// 3. REST OPERATOR
// ==========================================

// Get the first review
// and collect the remaining reviews
let [firstReview, ...otherReviews] = reviews;

console.log("First Review:", firstReview);
console.log("Other Reviews:", otherReviews);


// ==========================================
// 4. OPTIONAL CHAINING
// ==========================================

// Safely access nested properties
console.log("Color:", product.specifications?.color);

// This property does not exist
console.log("Weight:", product.specifications?.weight);


// ==========================================
// 5. NULLISH COALESCING
// ==========================================

// Give a default value if weight is
// null or undefined
let productWeight =
    product.specifications?.weight ?? "Weight not specified";

console.log("Weight:", productWeight);