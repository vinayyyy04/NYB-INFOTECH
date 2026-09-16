
// ==========================================
// ARRAY + OBJECT CREATION
// ==========================================

let workouts = [

    {
        id: 1,
        name: "Morning Run",
        category: "Cardio",
        duration: 30,
        calories: 320,
        icon: "🏃",

        trainer: {
            name: "Vinay",
            experience: 5
        },

        exercises: [
            "Running",
            "Warm-up",
            "Cool-down"
        ]
    },

    {
        id: 2,
        name: "Chest Workout",
        category: "Strength",
        duration: 50,
        calories: 450,
        icon: "🏋️",

        trainer: {
            name: "John",
            experience: 7
        },

        exercises: [
            "Bench Press",
            "Push-ups",
            "Chest Fly"
        ]
    },

    {
        id: 3,
        name: "Yoga Session",
        category: "Flexibility",
        duration: 40,
        calories: 220,
        icon: "🧘",

        trainer: {
            name: "Priya",
            experience: 6
        },

        exercises: [
            "Stretching",
            "Breathing",
            "Meditation"
        ]
    },

    {
        id: 4,
        name: "Leg Workout",
        category: "Strength",
        duration: 60,
        calories: 520,
        icon: "🦵",

        trainer: {
            name: "Mike",
            experience: 8
        },

        exercises: [
            "Squats",
            "Lunges",
            "Leg Press"
        ]
    },

    {
        id: 5,
        name: "Cycling",
        category: "Cardio",
        duration: 45,
        calories: 400,
        icon: "🚴",

        trainer: {
            name: "David",
            experience: 4
        },

        exercises: [
            "Cycling",
            "Sprint",
            "Cool-down"
        ]
    },

    {
        id: 6,
        name: "Full Body",
        category: "Strength",
        duration: 55,
        calories: 480,
        icon: "💪",

        trainer: {
            name: "Sarah",
            experience: 9
        },

        exercises: [
            "Squats",
            "Push-ups",
            "Plank"
        ]
    }

];


// ==========================================
// ARRAY ITERATION
// forEach()
// ==========================================

workouts.forEach(workout => {

    console.log(
        workout.name
    );

});


// ==========================================
// DISPLAY WORKOUTS
// ==========================================

function displayWorkouts(workoutList) {

    let container =
        document.getElementById(
            "workoutContainer"
        );

    container.innerHTML = "";


    workoutList.forEach(workout => {

        // ==================================
        // OBJECT DESTRUCTURING
        // ==================================

        let {
            id,
            name,
            category,
            duration,
            calories,
            icon,
            trainer,
            exercises
        } = workout;


        // ==================================
        // NESTED OBJECT DESTRUCTURING
        // ==================================

        let {
            name: trainerName,
            experience
        } = trainer;


        // ==================================
        // REST OPERATOR
        // ==================================

        let [
            firstExercise,
            ...remainingExercises
        ] = exercises;


        // ==================================
        // JOIN()
        // ==================================

        let exerciseList =
            exercises.join(", ");


        // ==================================
        // SOME()
        // ==================================

        let highCalories =
            calories > 400;


        container.innerHTML += `

            <div class="workout-card">

                <div class="workout-icon">
                    ${icon}
                </div>

                <h2>
                    ${name}
                </h2>

                <p class="category">
                    ${category}
                </p>


                <div class="details">

                    <div class="detail">
                        <span>Duration</span>
                        <strong>
                            ⏱️ ${duration} min
                        </strong>
                    </div>

                    <div class="detail">
                        <span>Calories</span>
                        <strong>
                            🔥 ${calories}
                        </strong>
                    </div>

                    <div class="detail">
                        <span>First Exercise</span>
                        <strong>
                            ${firstExercise}
                        </strong>
                    </div>

                    <div class="detail">
                        <span>Trainer</span>
                        <strong>
                            ${trainerName}
                        </strong>
                    </div>

                </div>


                <div class="trainer">

                    👨‍🏫
                    ${trainerName}

                    • ${experience} years experience

                    <br>

                    🏃 ${exerciseList}

                    <br>

                    📌 Other:
                    ${remainingExercises.join(", ")}

                    <br>

                    ${highCalories
                        ? "🔥 High calorie workout"
                        : "💚 Moderate workout"}

                </div>


                <button
                    class="complete-btn"
                    onclick="completeWorkout(${id})"
                >
                    ✓ Complete Workout
                </button>

            </div>

        `;

    });


    document.getElementById(
        "totalWorkouts"
    ).textContent =
        workoutList.length;

}


// ==========================================
// FIND()
// ==========================================

function completeWorkout(id) {

    let workout =
        workouts.find(
            workout =>
                workout.id === id
        );


    if (workout) {

        alert(
            `Completed: ${workout.name} 💪`
        );

    }

}


// ==========================================
// FILTER()
// ==========================================

function filterWorkouts() {

    let search =
        document
            .getElementById(
                "searchInput"
            )
            .value
            .toLowerCase();


    let category =
        document
            .getElementById(
                "categoryFilter"
            )
            .value;


    let filtered =
        workouts.filter(workout => {

            let matchesSearch =
                workout.name
                    .toLowerCase()
                    .includes(search);


            let matchesCategory =
                category === "all" ||
                workout.category === category;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    displayWorkouts(filtered);

}


// ==========================================
// SEARCH
// ==========================================

document
    .getElementById(
        "searchInput"
    )
    .addEventListener(
        "input",
        filterWorkouts
    );


document
    .getElementById(
        "categoryFilter"
    )
    .addEventListener(
        "change",
        filterWorkouts
    );


// ==========================================
// SORT()
// ==========================================

document
    .getElementById(
        "sortWorkout"
    )
    .addEventListener(
        "change",
        function () {

            let sorted =
                [...workouts];


            if (
                this.value === "calories"
            ) {

                sorted.sort(
                    (a, b) =>
                        b.calories -
                        a.calories
                );

            }


            if (
                this.value === "duration"
            ) {

                sorted.sort(
                    (a, b) =>
                        b.duration -
                        a.duration
                );

            }


            if (
                this.value === "name"
            ) {

                sorted.sort(
                    (a, b) =>
                        a.name.localeCompare(
                            b.name
                        )
                );

            }


            displayWorkouts(sorted);

        });


// ==========================================
// MAP()
// ==========================================

let workoutNames =
    workouts.map(
        workout =>
            workout.name
    );

console.log(
    "Workout Names:",
    workoutNames
);


// ==========================================
// FILTER()
// ==========================================

let strengthWorkouts =
    workouts.filter(
        workout =>
            workout.category ===
            "Strength"
    );

console.log(
    "Strength Workouts:",
    strengthWorkouts
);


// ==========================================
// REDUCE()
// ==========================================

let totalCalories =
    workouts.reduce(
        (total, workout) =>
            total + workout.calories,
        0
    );

console.log(
    "Total Calories:",
    totalCalories
);


// ==========================================
// EVERY()
// ==========================================

let allValidWorkouts =
    workouts.every(
        workout =>
            workout.duration > 0
    );

console.log(
    "All Valid:",
    allValidWorkouts
);


// ==========================================
// SOME()
// ==========================================

let hasHighCalorieWorkout =
    workouts.some(
        workout =>
            workout.calories > 500
    );

console.log(
    "Has High Calorie Workout:",
    hasHighCalorieWorkout
);


// ==========================================
// FINDINDEX()
// ==========================================

let yogaIndex =
    workouts.findIndex(
        workout =>
            workout.name ===
            "Yoga Session"
    );

console.log(
    "Yoga Index:",
    yogaIndex
);


// ==========================================
// FLAT()
// ==========================================

let allExercises =
    workouts.map(
        workout =>
            workout.exercises
    ).flat();

console.log(
    "All Exercises:",
    allExercises
);


// ==========================================
// REMOVE DUPLICATES
// ==========================================

let uniqueExercises =
    [
        ...new Set(
            allExercises
        )
    ];

console.log(
    "Unique Exercises:",
    uniqueExercises
);


// ==========================================
// OBJECT.keys()
// ==========================================

console.log(
    "Workout Keys:",
    Object.keys(
        workouts[0]
    )
);


// ==========================================
// OBJECT.values()
// ==========================================

console.log(
    "Workout Values:",
    Object.values(
        workouts[0]
    )
);


// ==========================================
// OBJECT.entries()
// ==========================================

console.log(
    "Workout Entries:",
    Object.entries(
        workouts[0]
    )
);


// ==========================================
// OBJECT METHOD
// ==========================================

let fitnessApp = {

    name: "FitTrack",

    welcome() {

        return `
            Welcome to ${this.name}! 💪
        `;

    }

};

console.log(
    fitnessApp.welcome()
);


// ==========================================
// SPREAD OPERATOR
// ==========================================

let firstWorkout =
    workouts[0];


let updatedWorkout = {

    ...firstWorkout,

    calories: 350

};

console.log(
    "Updated Workout:",
    updatedWorkout
);


// ==========================================
// REST OPERATOR
// ==========================================

function totalCaloriesBurned(
    ...calories
) {

    return calories.reduce(
        (total, value) =>
            total + value,
        0
    );

}

console.log(
    "Calories:",
    totalCaloriesBurned(
        300,
        400,
        500
    )
);


// ==========================================
// SHALLOW COPY
// ==========================================

let shallowCopy = {

    ...firstWorkout

};

shallowCopy.name =
    "Evening Run";

console.log(
    "Shallow Copy:",
    shallowCopy
);


// ==========================================
// DEEP COPY
// ==========================================

let deepCopy =
    structuredClone(
        firstWorkout
    );


deepCopy.trainer.name =
    "New Trainer";


console.log(
    "Original:",
    firstWorkout
);

console.log(
    "Deep Copy:",
    deepCopy
);


// ==========================================
// NESTED OBJECT MANIPULATION
// ==========================================

firstWorkout.trainer.experience =
    6;

console.log(
    "Updated Trainer:",
    firstWorkout.trainer
);


// ==========================================
// DASHBOARD STATISTICS
// ==========================================

document.getElementById(
    "totalCalories"
).textContent =
    totalCalories;


document.getElementById(
    "totalTime"
).textContent =

    workouts.reduce(
        (total, workout) =>
            total + workout.duration,
        0
    );


document.getElementById(
    "bestCalories"
).textContent =

    Math.max(
        ...workouts.map(
            workout =>
                workout.calories
        )
    );


// ==========================================
// INITIAL DISPLAY
// ==========================================

displayWorkouts(workouts);
