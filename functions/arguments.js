// Multiple arguments
let add = function (a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

// Default arguments
let getScoreText = function (name = "Anonymous", score = 0) {
  //return "Name: " + name + " " + "- Score: " + score;
  return `Name: ${name} - Score: ${score}`;
};

let scoreText = getScoreText(); // we can use undefined, but when empty it calss from the argument
console.log(scoreText);

// Challenge area
let getTip = function (total, tipPercent = 0.2) {
  let tip = tipPercent * 100;
  let miniResult = total * tipPercent;
  return `A ${tip}% tip on ${total} would be $${miniResult}`;
};

let finalTip = getTip(200, 0.25);
console.log(finalTip);

//Template String

let name = "Yusuf";
let age = 27;
console.log(`Hey, my name is ${name}!, I am ${age} years old`);
