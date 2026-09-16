
// Global Scope
let company = "Google";

function employee() {
    // Function Scope
    let employeeName = "Vinay";

    console.log(company);      // Global variable
    console.log(employeeName); // Function variable

    function details() {
        // Lexical Scope
        console.log(company);      // Global scope
        console.log(employeeName); // Outer function scope
    }

    details();
}

employee();

// Block Scope
if (true) {
    let age = 25;
    const city = "Chennai";

    console.log(age);
    console.log(city);
}
