let num = 103.941;

// customize the decimal places toFixed
console.log(num.toFixed(2));

//round method
console.log(Math.round(num));

// floor to the nearest integer
console.log(Math.floor(num));

// alwways round up
console.log(Math.ceil(num));

// generate random number
let min = 1;
let max = 5;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min; //if nothing is specificed it generates btw 0-0.99999999
//console.log(randomNum);

//challenge

let makeGuess = function (numb) {
  let min = 1;
  let max = 5;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  if (numb === randomNum) {
    return true;
  } else {
    return false;
  }
};
console.log(makeGuess(5));
