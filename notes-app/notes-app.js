const notes = [
  {
    title: "My next Trip",
    body: "I would like to go to spain",
  },
  {
    title: "Habits to work on",
    body: "Exercise. Eating a bit better",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
];

// removing a single element
/*
const p = document.querySelector("p");
p.remove();
*/
/*
const ps = document.querySelectorAll("p");
ps.forEach(function (p) {
  p.textContent = "******";
  //console.log(p.textContent);
  //p.remove();
});
*/
// Add a new Element
const newP = document.createElement("p");
newP.textContent = "This is a new Element from JavaScript";
document.querySelector("body").appendChild(newP);
