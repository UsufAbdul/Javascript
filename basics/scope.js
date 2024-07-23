// lexical scope (static scope)
//Global scope - defined outide of all code blocks
//Local scope - defined inside a code block

//In a cope you can access variables defined in that scope, or in any parent/ancestor scope
//Global scope (VarOne)
// local scope (varTwo)
//local scope (varFour)
// local scope (varThree)

let varOne = "varOne";

if (true) {
  console.log(varOne);
  let varTwo = "varTwo"; // we cant access this outside the scope, its a local scope
  console.log(varTwo);

  if (true) {
    let varFour = "varFour";
  }
}

if (true) {
  let varThree = "varThree";
}
