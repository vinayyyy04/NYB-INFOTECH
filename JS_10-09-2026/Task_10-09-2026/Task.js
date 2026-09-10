const movieInput = document.getElementById("movieInput");
const addBtn = document.getElementById("addBtn");
const movieList = document.getElementById("movieList");
const empty = document.getElementById("empty");
const clearBtn = document.getElementById("clearBtn");


// Get saved movies
let movies = JSON.parse(localStorage.getItem("movies")) || [];


// Display movies
function displayMovies() {

    movieList.innerHTML = "";

    movies.forEach((movie, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>🎬 ${movie}</span>
            <button class="delete" data-index="${index}">
                Delete
            </button>
        `;

        movieList.appendChild(li);
    });

    empty.style.display =
        movies.length === 0 ? "block" : "none";
}


// Add movie
addBtn.addEventListener("click", () => {

    const movie = movieInput.value.trim();

    if (movie === "") {
        alert("Enter a movie name!");
        return;
    }

    movies.push(movie);

    localStorage.setItem("movies", JSON.stringify(movies));

    movieInput.value = "";

    displayMovies();
});


// Event Delegation
movieList.addEventListener("click", (event) => {

    if (event.target.classList.contains("delete")) {

        const index = event.target.dataset.index;

        movies.splice(index, 1);

        localStorage.setItem("movies", JSON.stringify(movies));

        displayMovies();
    }
});


// Clear all movies
clearBtn.addEventListener("click", () => {

    movies = [];

    localStorage.removeItem("movies");

    displayMovies();
});


// Load movies when page opens
displayMovies();