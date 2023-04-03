// Arrow Functions

// Function Declaration
// function addOne(num) {
//   return num + 1;
// }

// In JS, functions are "first-class citizens."
// That means that we can pass functions as arguments
// to other functions, functions can be values of variables,
// and it means that we can even return functions from
// other functions.

// Function Expression
// anonymous function
// const addOne = function(num) {
//   return num + 1;
// }

// arrow function
// const addOne = (num) => {
//   return num + 1;
// }

// const addOne = (num) => num + 1;

const addOne = num => num + 1;

console.log(addOne(2));

