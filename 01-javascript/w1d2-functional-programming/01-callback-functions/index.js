/* 
  Callback Functions
  A callback function is a function that is passed as an argument to another function.
*/

/* function filter(nums = []) {
  const arr = [];

  // syntax of 'for of' loop
  // for(variable of iterable)
  for (const num of nums) {
    if (num % 2 === 1) {
      arr.push(num);
    }
  };

  return arr;
} */

// callback helper functions
function isOdd(banana) {
  return banana % 2 === 1;
}

function isEven(num) {
  return num % 2 === 0;
}

function isMultOfThree(num) {
  return num % 3 === 0;
}

// a function that accepts another function
// as an argument is called a 'higher order function'
function filter(nums = [], callback) {
  const arr = [];

  for (const num of nums) {
    if (callback(num)) {
      arr.push(num);
    }
  };

  return arr;
}

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odds = filter(myNums, isOdd);
const evens = filter(myNums, isEven);
const threeMults = filter(myNums, isMultOfThree);

console.log(odds);
console.log(evens);
console.log(threeMults);

function doubler(num) {
  return num * 2;
}

function process(nums, callback) {
  const arr = [];
  for (const num of nums) {
    arr.push(callback(num));
  }
  return arr;
}

const yourNums = [1, 2, 3];

// different version of above using
// an anonymous function
const doubled = process(yourNums, (num) => {
  return num * 2;
});

console.log(doubled);
