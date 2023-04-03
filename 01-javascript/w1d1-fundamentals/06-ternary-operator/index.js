// Ternary Operator

// What is a ternary operator?

// variable = (condition) ? expressionTrue : expressionFalse;

// A ternary operator evaluates a condition and
// executes a block of code based on the condition.

// const time = 20;
// let greeting = '';

// if (time < 18) {
//   greeting = "Good day.";
// } else {
//   greeting = "Good evening.";
// }

// console.log(greeting);
// "good evening"

const time = 20;

const greeting = time < 18
  ? 'Good day.'
  : 'Good evening.';

console.log(greeting);
