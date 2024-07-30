/*
const notes = ["Note 1", "Note 2", "Note 3"];
console.log(notes.length);
console.log(notes[1]);
console.log(notes[notes.length - 1]);

// Add a new list to the notes
//notes.push("My new Note");
//console.log(notes.length);

//console.log(notes.pop());
//console.log(notes.length);

// remove the item from the beginning
//notes.shift();
//console.log(notes);
// Add something in the beginning
//notes.unshift("My first Note");
//console.log(notes);

// Add elements in the middle of the array splice, and delete
//start at element 1 and delete what is next
//notes.splice(1, 1);
//console.log(notes);
// Adding
//notes.splice(1, 0, "New added note");
//console.log(notes);

// swapping one element for another
//notes[0] = "Hello";
//console.log(notes);

// For Each

notes.forEach(function (item, index) {
  console.log(index);
  console.log(item);
});

// Using For loop
//for (count = 0; count < notes.length >= 8; count++) {
//console.log(notes[count]);
//}
//console.log(notes.length);
//console.log(notes);

// counting ... 1 For loop(initializer(set it and it runs a single time;, condition;, what it should do after the counter))
//for (let count = 0; count <= 2; count++) {
// console.log(count);
//}

// Array with objects in them
*/
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

//console.log(notes2);
//console.log(notes2.length);

// it will run false because objects must be thesame to bring true
//let someObject = {};
//console.log(notes2.indexOf({}) === someObject);

// findindex finds the index and it stops working and prints out the output
/*
const index = notes2.findIndex(function (note, index) {
  console.log(note);
  return note.title == "Habits to work on";
});
console.log(index);
*/
// find can also do the work
const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};
/*
const findNote = function (notes, noteTitle) {
  const index = notes.findIndex(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
  return notes[index];
};
*/
const note = findNote(notes, "Office modification");
console.log(note);

const sortNotes = function (notes) {
  return notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};
console.log(sortNotes(notes));
