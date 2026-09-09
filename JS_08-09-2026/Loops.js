//for loop 

for(let i=1;i<=5;i++){

console.log(i);
}

//while loop

let i=3;

while(i<=5){
    console.log("while loop",i);
    i++;
}

//do...while loop

let a = 29;

do{
    console.log("do while loop",a);
    a++;
}while(a<=30);


//for..in

let person = {
    name:"vinay",
    age:23,
    role:"ASE"

};

for(let key in person){
    console.log(key);
}


//for..of


let names = ["vinay","yashwanth","sowmith"];

for (let name of names){
    console.log(name);
}