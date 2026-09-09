// if 
let age = 20;

if (age >= 18) {
    console.log("You are eligible");
}

// if else

    let age1 = 16;

if (age1 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

//else if

let marks = 75;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 60) {
    console.log("B");
} else {
    console.log("C");
}


//nested conditions

let age2 = 20;
let hasID = true;

if (age2 >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    }
}

//switch

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}