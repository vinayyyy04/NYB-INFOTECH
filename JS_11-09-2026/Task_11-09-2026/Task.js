const API_URL = "https://jsonplaceholder.typicode.com/posts";

const cityInput = document.getElementById("city");
const status = document.getElementById("status");
const weather = document.getElementById("weather");


// =====================================
// GET REQUEST + ASYNC/AWAIT
// =====================================

async function getWeather() {

    const city = cityInput.value.trim();

    if (!city) {
        status.textContent = "⚠️ Enter a city name";
        return;
    }

    try {

        status.textContent = "⏳ Loading weather...";
        weather.innerHTML = "";

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Unable to fetch weather data");
        }

        const data = await response.json();

        const result = data.find(item =>
            item.id === 1
        );

        weather.innerHTML = `
            <div class="weather-card">
                <h2>🌍 ${city}</h2>
                <p>🌡️ Temperature: 28°C</p>
                <p>☁️ Condition: Partly Cloudy</p>
                <p>💧 Humidity: 65%</p>
                <p>💨 Wind: 12 km/h</p>
                <p>📡 API ID: ${result.id}</p>
            </div>
        `;

        status.textContent = "✅ Weather loaded successfully";

    } catch (error) {

        status.textContent = `❌ ${error.message}`;

    } finally {

        console.log("GET request completed");
    }
}


// =====================================
// POST REQUEST
// =====================================

async function postData() {

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                city: "Chennai",
                temperature: 30
            })
        });

        if (!response.ok) {
            throw new Error("POST request failed");
        }

        const data = await response.json();

        console.log("POST Response:", data);
        status.textContent = "✅ Weather data added";

    } catch (error) {

        status.textContent = `❌ ${error.message}`;

    }
}


// =====================================
// PUT REQUEST
// =====================================

async function putData() {

    try {

        const response = await fetch(`${API_URL}/1`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                city: "Chennai",
                temperature: 32,
                condition: "Sunny"
            })
        });

        if (!response.ok) {
            throw new Error("PUT request failed");
        }

        const data = await response.json();

        console.log("PUT Response:", data);
        status.textContent = "✅ Weather data replaced";

    } catch (error) {

        status.textContent = `❌ ${error.message}`;

    }
}


// =====================================
// PATCH REQUEST
// =====================================

async function patchData() {

    try {

        const response = await fetch(`${API_URL}/1`, {

            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                temperature: 35
            })
        });

        if (!response.ok) {
            throw new Error("PATCH request failed");
        }

        const data = await response.json();

        console.log("PATCH Response:", data);
        status.textContent = "✅ Temperature updated";

    } catch (error) {

        status.textContent = `❌ ${error.message}`;

    }
}


// =====================================
// DELETE REQUEST
// =====================================

async function deleteData() {

    try {

        const response = await fetch(`${API_URL}/1`, {

            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("DELETE request failed");
        }

        status.textContent = "🗑️ Weather data deleted";

    } catch (error) {

        status.textContent = `❌ ${error.message}`;

    }
}


// =====================================
// PROMISE
// =====================================

function checkInternet() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (navigator.onLine) {
                resolve("Internet connection available");
            } else {
                reject("No internet connection");
            }

        }, 1000);

    });
}


// =====================================
// THEN / CATCH / FINALLY
// =====================================

checkInternet()
    .then(message => {
        console.log("✅", message);
    })
    .catch(error => {
        console.error("❌", error);
    })
    .finally(() => {
        console.log("Connection check completed");
    });