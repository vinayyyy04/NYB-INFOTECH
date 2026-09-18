function checkUserAge(age) {
    try {
        if (typeof age !== "number") {
            throw new Error("Age must be a number");
        }

        if (age < 18) {
            throw new Error("User must be 18 or above");
        }

        console.log("User is eligible.");
    } 
    catch (error) {
        console.log("Error:", error.message);
    } 
    finally {
        console.log("Age verification completed.");
    }
}

checkUserAge(20);
checkUserAge(15);
checkUserAge("20");