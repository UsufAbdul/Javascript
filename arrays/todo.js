/*
//Challenge 1
// Create an array with five todos
// You have x todos
// print the first and second to the last item -> Todo: walk the dog
const todos = [
  "Learn JS",
  "Learn TypeScript",
  "Work in Kendee,Jamba",
  "Work Remotely, In Sha Allah",
  "Make my parents rest",
];
//console.log(`I have ${todos.length} todos`);
//console.log(
//`My First todo is ${todos[0]} and my second to the last todo: ${
//todos[todos.length - 2]
//}`
//);

// challenge Two
//delete the third item
//console.log(todos.splice(2, 1)); // start at 2 and delete 1
//console.log(todos);
//add a new item at the end
console.log(todos.push("Stand On my Own!"));
console.log(todos);
// remove the first item from the list
console.log(todos.shift());
console.log(todos);

todos.forEach(function (item, index) {
  const num = index + 1;
  console.log(`${num}. ${item}`);
});
console.log(todos);

// when u have an array , u dont really need the for loop, better use foreach
//for (count = 0; count < todos.length; count++) {
//const num = count + 1;
//console.log(`${num}. ${todos[count]}`);
//}
*/

// convert array to array of objects -> text, completrd
// create a function to remove a todo by text value, find index and delete the given string

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
/*
console.log(todos);

const deleteTodo = function (todos, textFile) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === textFile.toLowerCase();
  });

  if (index > -1) {
    todos.splice(index, 1);
  }
};
deleteTodo(todos, "!!Make my parents rest");
console.log(todos);

const getThingsDone = function (todos) {
  return todos.filter(function (todo) {
    return todo.completed === false;
  });
};

console.log(getThingsDone(todos));
*/
/*
const sortTodos = function (todos) {
  return todos.filter(function (todo) {
    return !todo.completed;
  });
  return todos.sort(function (a, b) {
    if (!a.completed) {
      return -1;
    } else if (!b.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};
*/

const sortTodos = function (todos) {
  return todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};
sortTodos(todos);
console.log(todos);
