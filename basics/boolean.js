// equality operator ===
// not equal operator !==
// <  less than operator
// > greater than operator
// >= greater than or equal to operator
// <=less than or equal to operator

let temp = 80;
//let isFreezing = temp <= 32;
// working with IF statements, condition in the bracket
if (temp <= 32) {
  console.log("It is freezing outside!");
}

if (temp <= 100) {
  console.log("It is way too hot outside!");
  console.log("testing123");
}

// Challenge area
let age = 65; // create the age variable

let isChild = age <= 7; // calculate is child, if they are 7 or under
let isSenior = age >= 65; // calculte is senior if they are 65 or older

console.log(isChild); // print the value
console.log(isSenior); // print thr value

// second challenge
if (age <= 7) {
  console.log("Its a child he has a discount!");
}

if (age >= 65) {
  console.log("Its an adult and he is not eligible for discount");
}
