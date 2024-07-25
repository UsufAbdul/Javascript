let name = "  Andrew Mead  ";
// length property
console.log(name.length);

// convert to upper case & lower case(method)
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// includes method: checks whether it is included in the string
let password = "abc1234password898";
console.log(password.includes("password"));

// Trim checks for white spaces
console.log(name.trim());

// Challenge
let isValidPassword = function (pass) {
  if (pass.includes("password") || pass.length > 8) {
    return false;
  } else {
    return true;
  }
  // return pass.length > 8 && !pass.includes('password')
};

let newPass = isValidPassword("bc1234password898");
console.log(isValidPassword("bc1234898"));
console.log(isValidPassword("asdfp"));
console.log(newPass);
