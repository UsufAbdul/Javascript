// Global Scope (convertFahrenhietToCellcius, resultOne, resultTwo)
// Local Scope (fahrenheit, conv)
// local scope (isFreezing)

let celsiusConverter = function (fahrenheit) {
  // convert fahrenheitToCelsius
  let conv = (fahrenheit - 32) / 1.8;

  if (conv <= 0) {
    let isFreezing = true;
  }
  return conv;
};

let result1 = celsiusConverter(32); //call a couple of times (32 -> 0) (68 -> 20)
let result2 = celsiusConverter(68);

console.log(result1 + ", " + result2); // print the converted values
