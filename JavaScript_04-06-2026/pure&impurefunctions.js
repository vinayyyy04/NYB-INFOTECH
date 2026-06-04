//pure function--always shows the same output as the input

function add(a,b){
    return a +b;
}
console.log(add(10,20));
console.log(add(50,60));


//impure function--depends on external variables or state can produce diffrent outputs for the same inputs 

let cartItems =0;

function addTocart(){
    cartItems++;
    return cartItems;
}
console.log(addTocart());
console.log(addTocart());