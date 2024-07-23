let isAccountLocked = false;

let userRole = "user";

if (isAccountLocked) {
  console.log("Is account locked");
} else if (userRole === "admin") {
  console.log("Welcome admin");
} else {
  console.log("Welcome");
}

//Challenge area
let temp = 45;

if (temp >= 120) {
  console.log("It is hot outside!");
} else if (temp <= 31) {
  console.log("It is freezing Outside!");
} else {
  console.log("Go for it. It is pretty nice");
}
