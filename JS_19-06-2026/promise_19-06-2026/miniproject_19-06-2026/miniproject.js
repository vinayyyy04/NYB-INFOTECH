let carInput = document.getElementById("carInput");
let bookBtn = document.getElementById("bookBtn");
let serviceList = document.getElementById("serviceList");

// Callback Function

function sendNotification(message, callback) {
console.log(message);

    if (callback) {
        callback();
    }
}

// Promise Function

function bookService(carName) {
return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (carName.trim() !== "") {
                resolve(carName);
            } else {
                reject("Please enter a car name");
            }

        }, 2000);

    });
}

// Event Handling

bookBtn.addEventListener("click", () => {

    const carName = carInput.value;

    bookService(carName)
        .then((car) => {

            // DOM Manipulation
            const li = document.createElement("li");

            li.innerHTML = `
                ${car} - Service In Progress 🔧
                <button class="cancelBtn">Cancel</button>
            `;

            serviceList.appendChild(li);

            carInput.value = "";

// Callback Function

 sendNotification(`${car} service booked successfully`,
                () => {
                    console.log("Customer notified");
                }
            );

 // Timer Function

 setTimeout(() => {

     if (li.parentElement) {
        li.firstChild.textContent =`${car} - Service Completed `;
     }
}, 5000);

 })
        .catch((error) => {
            alert(error);
        });

});

// Event Delegation

serviceList.addEventListener("click", (event) => {

    if (event.target.classList.contains("cancelBtn")) {
        event.target.parentElement.remove();
    }

});