// undefined for variable
let name;

name = "Yusuf";

if (name === undefined) {
  console.log("please provide a name");
} else {
  console.log(name);
}

// Undefined for function arguments
let square = function (num) {
  console.log(num);
};

//square()   // if 3 is not defined it will say undefined

// undefined as the function return default value
let result = square();
console.log(result);

// Null as assigned value
let age = 27;

age = null; // it will take it as undefined name, or set it equal to null

console.log(age);
