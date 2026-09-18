const API_URL = "https://jsonplaceholder.typicode.com/users";

const userContainer = document.querySelector("#userContainer");
const searchInput = document.querySelector("#searchInput");
const filterCity = document.querySelector("#filterCity");
const refreshBtn = document.querySelector("#refreshBtn");
const statusMessage = document.querySelector("#statusMessage");

let users = [];
let filteredUsers = [];


/* =========================
   Local Storage
========================= */

function saveUsers() {
    localStorage.setItem("users", JSON.stringify(users));
}

function getSavedUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}


/* =========================
   Loading / Status
========================= */

function showLoading() {
    statusMessage.textContent = "⏳ Loading users...";
}

function showError(message) {
    statusMessage.textContent = `❌ ${message}`;
}

function showEmpty() {
    statusMessage.textContent = "😕 No users found.";
}

function clearStatus() {
    statusMessage.textContent = "";
}


/* =========================
   Fetch Users - GET
========================= */

async function fetchUsers() {

    showLoading();

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        users = data;

        saveUsers();

        createCityOptions(users);

        renderUsers(users);

    } catch (error) {

        console.error(error);

        const savedUsers = getSavedUsers();

        if (savedUsers.length > 0) {

            users = savedUsers;

            createCityOptions(users);
            renderUsers(users);

            statusMessage.textContent =
                "⚠️ API unavailable. Showing saved data.";

        } else {

            showError("Unable to load users.");

        }
    }
}


/* =========================
   Create City Filter
========================= */

function createCityOptions(data) {

    const cities = [
        ...new Set(
            data.map(user => user.address.city)
        )
    ];

    filterCity.innerHTML = `
        <option value="all">All Cities</option>
        ${cities
            .map(city => `<option value="${city}">${city}</option>`)
            .join("")}
    `;
}


/* =========================
   Render Users
========================= */

function renderUsers(data) {

    userContainer.innerHTML = "";

    if (data.length === 0) {
        showEmpty();
        return;
    }

    clearStatus();

    data.forEach(user => {

        const {
            id,
            name,
            email,
            phone,
            address: { city }
        } = user;

        const card = document.createElement("article");

        card.className = "user-card";

        card.innerHTML = `
            <h2>${name}</h2>

            <p>📧 ${email}</p>

            <p>📱 ${phone}</p>

            <p>📍 ${city}</p>

            <button 
                class="delete-btn"
                data-id="${id}">
                Delete
            </button>
        `;

        userContainer.appendChild(card);
    });
}


/* =========================
   Search + Filter
========================= */

function filterUsers() {

    const searchText = searchInput.value
        .toLowerCase()
        .trim();

    const selectedCity = filterCity.value;

    filteredUsers = users.filter(user => {

        const matchesSearch =
            user.name.toLowerCase().includes(searchText) ||
            user.email.toLowerCase().includes(searchText);

        const matchesCity =
            selectedCity === "all" ||
            user.address.city === selectedCity;

        return matchesSearch && matchesCity;
    });

    renderUsers(filteredUsers);
}


/* =========================
   DELETE API
========================= */

async function deleteUser(userId) {

    try {

        const response = await fetch(
            `${API_URL}/${userId}`,
            {
                method: "DELETE"
            }
        );

        if (!response.ok) {
            throw new Error("Delete request failed");
        }

        /*
            JSONPlaceholder simulates DELETE.
            We remove the user locally as well.
        */

        users = users.filter(
            user => user.id !== userId
        );

        saveUsers();

        createCityOptions(users);

        filterUsers();

    } catch (error) {

        console.error(error);

        showError("Unable to delete user.");
    }
}


/* =========================
   Event Delegation
========================= */

userContainer.addEventListener("click", event => {

    if (!event.target.classList.contains("delete-btn")) {
        return;
    }

    const userId = Number(
        event.target.dataset.id
    );

    deleteUser(userId);
});


/* =========================
   Event Listeners
========================= */

searchInput.addEventListener(
    "input",
    filterUsers
);

filterCity.addEventListener(
    "change",
    filterUsers
);

refreshBtn.addEventListener(
    "click",
    fetchUsers
);


/* =========================
   Initial Load
========================= */

const savedUsers = getSavedUsers();

if (savedUsers.length > 0) {

    users = savedUsers;

    createCityOptions(users);
    renderUsers(users);

} else {

    fetchUsers();
}