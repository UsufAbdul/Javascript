// function - input (argument), code, output (return value)

let greetUser = function () {
  console.log("Welcome User!");
};

greetUser();

let square = function (num) {
  let result = num * num;
  return result;
};

let value = square(3);
let otherValue = square(5);
console.log(value + ", " + otherValue);

// Challenge area

let celsiusConverter = function (fahrenheit) {
  // convert fahrenheitToCelsius
  let conv = (fahrenheit - 32) / 1.8;
  return conv;
};

let result1 = celsiusConverter(32); //call a couple of times (32 -> 0) (68 -> 20)
let result2 = celsiusConverter(68);

console.log(result1 + ", " + result2); // print the converted values
