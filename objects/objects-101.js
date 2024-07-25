let myBook = {
  title: "1984",
  author: "George orwell",
  pageCount: 326,
};

console.log(`${myBook.title} by the author ${myBook.author}`);

// change the title of the book
myBook.title = "Animal Farm";
console.log(`${myBook.title} by the author ${myBook.author}`);

// Challenge area
//Name, age, location
// Increase age by 1 and print the message again

let yusuf = {
  name: "Yusuf Abdulkadir",
  age: 27,
  location: "Abuja",
};
console.log(`${yusuf.name} is ${yusuf.age} and lives in ${yusuf.location}`);

yusuf.age = yusuf.age + 1;
console.log(`${yusuf.name} is ${yusuf.age} and lives in ${yusuf.location}`);
