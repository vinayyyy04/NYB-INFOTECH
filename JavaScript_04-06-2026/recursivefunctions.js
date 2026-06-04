//recursive function examples
//sum of numbers

function sum(n){
    if (n===1){
        return 1;

    }
    return n + sum(n-1);

}
console.log(sum(23));

//reverse string

function reverseString (str){
    if  (str === "") {
        return "";
    }
return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("this is vinay here"));



//factorial using itreation

function factorial (n){
    let result = 1;
    for (let i=1;i<=n;i++) {
        result *=i;
    }
    return result;
}
console.log(factorial(5));

//factorial using recursion

let factoriall = function fact(n) {
    if (n=== 0 || n === 1){
        return 1;

    }
    return n * fact(n-1);
};

console.log("factoriall of 8 is ",factoriall(8));

