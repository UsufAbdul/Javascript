todos = [
  {
    text: "Learn JS",
    completed: true,
  },
  {
    text: "Learn TypeScript",
    completed: false,
  },
  {
    text: "lead Kendee,Jamba",
    completed: true,
  },
  {
    text: "Work Remotely, In Sha Allah",
    completed: true,
  },
  {
    text: "Make my parents rest",
    completed: false,
  },
];

const ps = document.querySelectorAll("p");

ps.forEach(function (p) {
  if (p.textContent.includes("the")) {
    p.remove();
  }
});

const newP = document.createElement("p");
newP.textContent = "This is a new Element from JavaScript";
document.querySelector("body").appendChild(newP);

const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed;
});

const summary = document.createElement("h2");
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector("body").appendChild(summary);

todos.forEach(function (todo) {
  const p = document.createElement("p");
  p.textContent = todo.text;
  document.querySelector("body").appendChild(p);
});
