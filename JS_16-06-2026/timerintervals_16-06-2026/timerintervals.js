//setTimeout()--executes a function once after a specified delay

function showMessage (){
    setTimeout(function(){
        alert("hello all!");

    },1000);
};


//setInterval()--executes a function repeatedly at aspecified interval.

let count = 0;

setInterval(function(){
    count++;
    document.getElementById("count").textContent = count;

},1000);


//stopInterval()--using clearInterval()--stop the timer

let countt = 0;
let intervalId;

function startTimer(){
    intervalId = setInterval(function(){
        countt++;
        document.getElementById("timer").textContent = countt;

    },1000);
}

function stopTimer(){
    clearInterval(intervalId);

}


//clearTimeout()--cancels a scheduled setTimeout() before it executes

let timeoutId;

function startTimeout(){
    timeoutId = setTimeout(() =>{
        alert("welcome to my page");
    },2000);

}

function stopTimeout (){
    clearTimeout(timeoutId);
    alert("thank you!!");
}
