let myBook = {
  title: "1984",
  author: "George orwell",
  pageCount: 326,
};

let otherBook = {
  title: "A Peoples History",
  author: "Howard Zinn",
  pageCount: 723,
};

// we are going to add function that takes arguments and give us output

let getSummary = function (book) {
  // we added multiple strings to be returned when calling the function
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
  };
  //console.log(`${book.title} by ${book.author}`);
};

getSummary(myBook);
getSummary(otherBook);
let peace = getSummary(myBook);
let peace2 = getSummary(otherBook);
console.log(peace.pageCountSummary); // you can call off a property under the return to be specific

// Challenge
// create function - take fahrenhiet in - return object with all three

let funcTemp = function (fah) {
  return {
    fah,
    fahToCel: fah - 32 / 1.8,
    kelToCel: (fah + 459.57) * (5 / 9),
  };
};
let finalCel = funcTemp(20);
console.log(finalCel);
console.log(`${finalCel.fah}, ${finalCel.fahToCel}, ${finalCel.kelToCel} `);
