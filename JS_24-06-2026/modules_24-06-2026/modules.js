//modules--it is a javascript file that contains reusable code like variables,functions,classes.
//modules are widely used in e-commerce website,social media platforms,banking applications etc.
export let employee = {
  name: "Vinay",
  id: 101
};
//export--used to make variables ,functions,or classes available to other files.

//exports and imports are widely used in online exam portals,employee management systems,banking apps and social media apps.

export function markAttendance(name) {
  return `${name} is Present`;
}

export let name = "keerthy";

export function greet (){
    return "welcome";
}


//local storage- the data is stored permanently.
//data remains after the browser is closed.       
                                                  //used in dark/light mode preference,user logins,language savings etc.
// Storing data
localStorage.setItem("username", "Vinay");

// Retrieving data
const userr = localStorage.getItem("username");

console.log(userr);



//session storage--which is also called as temporary storage.
//data is removed when browser tab is closed.
                                                 //multi step forms,online exam progress,store otp,temporary user data etc.

// Storing  data
sessionStorage.setItem("username", "Vinay");

// Retrieving data
const user = sessionStorage.getItem("username");

console.log(user);


// try, catch, finally, and throw

// try--Contains code that may cause an error.
// catch--Handles the error if one occurs.
// finally--Executes whether an error occurs or not.
// throw--Creates a custom error manually.
                                                      //used in loin systems,api calls,online payments,form validations,loading screens etc.
function checkAge(age) {
  try {
    if (age < 18) {
      throw new Error("Age must be 18 or above");
}
    console.log("Eligible");
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Age verification completed successfully");
}

}

checkAge(10);


//amount withdrawl with errorhandling

function withdraw(balance, amount) {
  try {
    if (amount > balance) {
      throw new Error("Insufficient Balance");
    }

    console.log("Withdrawal Successful");
  } catch (error) {
    console.log("Error:", error.message);
  }
}

withdraw(5000, 69000);

//error handling is mostly used in login systems,online exams,online payments,reistration forms,banking apps,file uploading etc.




