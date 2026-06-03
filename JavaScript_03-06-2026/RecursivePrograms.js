//factorial recursive programm

let factoriall = function fact(n) {
    if (n=== 0 || n === 1){
        return 1;

    }
    return n * fact(n-1);
};

console.log("factoriall of 8 is ",factoriall(8));

//fibonacci series recursive programm.

function fibonacci(n){
    if (n<=1){
        return n;
    }
    return fibonacci(n-1) + fibonacci (n-2);

}

for (let i =0;i<5;i++){
    console.log(fibonacci(i));
}


