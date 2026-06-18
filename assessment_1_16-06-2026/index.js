function calculateGrade(marks) {
    if (marks < 0 , marks > 100 ) {
        return "Invalid Input: Please enter marks between 0 and 100";
    }

let grade = marks >= 90 ? 'A' :
            marks >= 80 ? 'B' :
            marks >= 70 ? 'C' :
            marks >= 60 ? 'D' : 'Fail';

    return "Your grade is: " + grade;
}

let studentMarks = 92; 
console.log(calculateGrade(studentMarks));


//given
const numbers = [10,20,30,40,50];

//adding 60 in the end
numbers.push(60);
console.log(numbers);

//adding 5 in the beginning
numbers.unshift(5);
console.log(numbers);

//removing last element
numbers.pop();
console.log(numbers);

//displaying final array
console.log("Final Array", numbers);

//displaying the final array
console.log("Length of given array", numbers.length);




