// Array of car objects

let cars = [
    {
        brand: "Toyota",
        model: "Fortuner",
        price: 4200000
    },
    {
        brand: "BMW",
        model: "X5",
        price: 9500000
    }
];


// Get HTML elements

const brandInput = document.getElementById("brand");
const modelInput = document.getElementById("model");
const priceInput = document.getElementById("price");

const addBtn = document.getElementById("addBtn");
const carList = document.getElementById("carList");


// Display cars

function displayCars() {

    carList.innerHTML = "";

    cars.forEach((car, index) => {

        carList.innerHTML += `
            <div class="card">

                <div>
                    <h2>🚘 ${car.brand} ${car.model}</h2>
                    <p>₹${car.price.toLocaleString("en-IN")}</p>
                </div>

                <button
                    class="delete-btn"
                    onclick="deleteCar(${index})">
                    Delete
                </button>

            </div>
        `;
    });
}


// Add car

function addCar() {

    const brand = brandInput.value.trim();
    const model = modelInput.value.trim();
    const price = Number(priceInput.value);

    if (!brand || !model || !price) {
        alert("Please fill all fields.");
        return;
    }

    const newCar = {
        brand,
        model,
        price
    };

    cars.push(newCar);

    clearInputs();

    displayCars();
}


// Delete car

function deleteCar(index) {

    cars.splice(index, 1);

    displayCars();
}


// Clear inputs

function clearInputs() {

    brandInput.value = "";
    modelInput.value = "";
    priceInput.value = "";
}


// Button event

addBtn.addEventListener("click", addCar);


// Show cars when page loads

displayCars();