
//  MUSIC PLAYLIST MANAGER




//    DOM SELECTION

const songForm =
    document.getElementById("songForm");

const songName =
    document.getElementById("songName");

const artistName =
    document.getElementById("artistName");

const duration =
    document.getElementById("duration");

const songList =
    document.getElementById("songList");

const searchInput =
    document.getElementById("searchInput");

const totalSongs =
    document.getElementById("totalSongs");

const favoriteSongs =
    document.getElementById("favoriteSongs");

const totalDuration =
    document.getElementById("totalDuration");

const emptyMessage =
    document.getElementById("emptyMessage");

const clearBtn =
    document.getElementById("clearBtn");

const loadSongsBtn =
    document.getElementById("loadSongsBtn");

const loading =
    document.getElementById("loading");

const error =
    document.getElementById("error");



//  LOCAL STORAGE


let songs =
    JSON.parse(
        localStorage.getItem("playlist")
    ) || [];



//    SAVE SONGS


function saveSongs() {

    localStorage.setItem(
        "playlist",
        JSON.stringify(songs)
    );

}



// DISPLAY SONGS


function displaySongs(list) {

    songList.innerHTML = "";


    if (list.length === 0) {

        emptyMessage.classList.remove(
            "hidden"
        );

    } else {

        emptyMessage.classList.add(
            "hidden"
        );

    }


    list.forEach(song => {

        const div =
            document.createElement("div");

        div.className = "song";


        div.innerHTML = `

            <div class="song-left">

                <div class="song-icon">

                    ${song.favorite
                        ? "❤️"
                        : "🎵"}

                </div>


                <div>

                    <div class="song-name">

                        ${song.name}

                    </div>


                    <div class="artist">

                        ${song.artist}

                    </div>

                </div>

            </div>


            <div class="song-right">

                <span class="song-duration">

                    ${song.duration} min

                </span>


                <button
                    class="favorite-btn
                    ${song.favorite
                        ? "active"
                        : ""}"
                    data-id="${song.id}"
                >

                    ${song.favorite
                        ? "❤️"
                        : "♡"}

                </button>


                <button
                    class="delete-btn"
                    data-id="${song.id}"
                >

                    Delete

                </button>

            </div>

        `;


        songList.appendChild(div);

    });


    updateSummary();

}



//  UPDATE SUMMARY

function updateSummary() {

    const total =
        songs.length;


    const favorites =
        songs.filter(
            song => song.favorite
        ).length;


    const durationTotal =
        songs.reduce(
            (sum, song) =>
                sum + Number(song.duration),
            0
        );


    totalSongs.textContent =
        total;


    favoriteSongs.textContent =
        favorites;


    totalDuration.textContent =
        `${durationTotal} min`;

}


/* =====================================================
   ADD SONG
===================================================== */

songForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        try {

            const name =
                songName.value.trim();

            const artist =
                artistName.value.trim();

            const songDuration =
                Number(duration.value);


            if (!name) {

                throw new Error(
                    "Please enter a song name."
                );

            }


            if (!artist) {

                throw new Error(
                    "Please enter an artist name."
                );

            }


            if (
                !songDuration ||
                songDuration <= 0
            ) {

                throw new Error(
                    "Please enter a valid duration."
                );

            }


            const newSong = {

                id: Date.now(),

                name: name,

                artist: artist,

                duration: songDuration,

                favorite: false

            };


            songs.push(
                newSong
            );


            saveSongs();

            displaySongs(
                songs
            );


            songForm.reset();

            hideError();


        } catch (err) {

            showError(
                err.message
            );

        }

    }
);


/* =====================================================
   EVENT DELEGATION
===================================================== */

songList.addEventListener(
    "click",
    function(event) {

        const id =
            Number(
                event.target.dataset.id
            );


        /* FAVORITE */

        if (
            event.target.classList.contains(
                "favorite-btn"
            )
        ) {

            const song =
                songs.find(
                    song =>
                        song.id === id
                );


            if (song) {

                song.favorite =
                    !song.favorite;

                saveSongs();

                displaySongs(
                    songs
                );

            }

        }


        /* DELETE */

        if (
            event.target.classList.contains(
                "delete-btn"
            )
        ) {

            songs =
                songs.filter(
                    song =>
                        song.id !== id
                );


            saveSongs();

            displaySongs(
                songs
            );

        }

    }
);


/* =====================================================
   SEARCH
===================================================== */

searchInput.addEventListener(
    "input",
    function() {

        const text =
            searchInput.value
                .toLowerCase()
                .trim();


        const filteredSongs =
            songs.filter(
                song =>

                    song.name
                        .toLowerCase()
                        .includes(text)

                    ||

                    song.artist
                        .toLowerCase()
                        .includes(text)
            );


        displaySongs(
            filteredSongs
        );

    }
);


/* =====================================================
   CLEAR ALL
===================================================== */

clearBtn.addEventListener(
    "click",
    function() {

        if (songs.length === 0) {

            return;

        }


        const confirmDelete =
            confirm(
                "Delete your entire playlist?"
            );


        if (confirmDelete) {

            songs = [];

            saveSongs();

            displaySongs(
                songs
            );

        }

    }
);


/* =====================================================
   FETCH API
===================================================== */

async function loadSampleSongs() {

    try {

        loading.classList.remove(
            "hidden"
        );

        hideError();


        /*
            JSONPlaceholder is used here
            only for practicing Fetch API.

            The returned data is converted
            into song objects.
        */

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=5"
            );


        if (!response.ok) {

            throw new Error(
                "Unable to load sample songs."
            );

        }


        const data =
            await response.json();


        const artists = [
            "Anirudh Ravichander",
            "A.R. Rahman",
            "Thaman S",
            "Devi Sri Prasad",
            "Gopi Sundar"
        ];


        const durations = [
            4,
            5,
            4,
            3,
            5
        ];


        const sampleSongs =
            data.map(
                (item, index) => ({

                    id:
                        Date.now() + index,

                    name:
                        [
                            "Arabic Kuthu",
                            "Chaleya",
                            "Samajavaragamana",
                            "Srivalli",
                            "Inkem Inkem Inkem Kaavaale"
                        ][index],

                    artist:
                        artists[index],

                    duration:
                        durations[index],

                    favorite: false

                })
            );


        songs = [
            ...songs,
            ...sampleSongs
        ];


        saveSongs();

        displaySongs(
            songs
        );


    } catch (err) {

        showError(
            err.message
        );


    } finally {

        loading.classList.add(
            "hidden"
        );

    }

}


/* =====================================================
   LOAD SAMPLE SONGS BUTTON
===================================================== */

loadSongsBtn.addEventListener(
    "click",
    loadSampleSongs
);


/* =====================================================
   ERROR HANDLING
===================================================== */

function showError(message) {

    error.textContent =
        `⚠️ ${message}`;

    error.classList.remove(
        "hidden"
    );

}


function hideError() {

    error.classList.add(
        "hidden"
    );

}


/* =====================================================
   INITIAL LOAD
===================================================== */

displaySongs(
    songs
);