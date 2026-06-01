//for loop--used when  you know how many times the loop should run.
let sum = 0;
let n = 19;

for(let i =1; i<=5;i++) {
    sum = sum + i;
}
console.log("sum =",sum);

//while loop-can run the code as long as the given condition is true.


 i = 1;
while (i <= 5){
    console.log("i =",i)
    i++;

}

// do-while -- executes the code at least once and then checks the condition.
do {
    console.log("i =",i)
    i++;
}while (i<= 10);

//for-of loop--used to iterate over arrays and other iterable objects.

let str = "vinay kumar";

let size = 0;
for(let i of str){
    console.log("i =",i)
    size++
}
console.log(" string size =",size)

//for-in loop--used to iterate over object properties

let data ={
    name: "vinay kumar",
    age:22,
    cgpa:8.14,
    ispass:true,
};

for (let i in data){
    console.log("i=",i,"value =",data[i]);
}
