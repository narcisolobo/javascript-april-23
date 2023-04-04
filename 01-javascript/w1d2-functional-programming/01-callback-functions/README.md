# Callbacks

## What is a Callback?
### A callback in JavaScript is a function that is passed as an argument to another function.

This may seem strange at first, but remember - functions in JavaScript are "first-class citizens." This means that functions have the same functionality as objects. They can be assigned as values to variables, passed in as arguments to functions, or returned as values from a function.

Let's look at a simple example. Let's say I have a function that takes in an array of numbers and returns an array containing only the odd numbers in that array.

```js
function filter(nums) {
  const arr = [];
  for (const num of nums) {
    if (num % 2 === 1) {
      arr.push(num);
    }
  };
  return arr;
}
```

This is nice, but suppose I would like to filter for even numbers. I would have to write a different version of the same function with only a small difference in logic.

In such cases, a callback function could help. Let's first write two helper functions. These functions will be our callback functions.

```js
function isOdd(num) {
  return num % 2 === 1;
}

function isEven(num) {
  return num % 2 === 0;
}
```

Now let's redesign our filter function to accept one of these callbacks as a parameter. Notice we are invoking the callback function inside of our redesign.

```js
function filter(nums, callback) {
  const arr = [];
  for (const num of nums) {
    if (callback(num)) {
      arr.push(num);
    }
  };
  return arr;
}
```

Now we can specify whether we would like even or odd values by passing in the correct callback:

```js
function filter(nums, callback) {
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
console.log(odds);

const evens = filter(myNums, isEven);
console.log(evens);
```

Our filter function is a bit more versatile this way, don't you think?

Here's a fancy term for you. A function that accepts another function is called a "higher order" function. In this example, `filter` is the higher order function. `isOdd` and `isEven` are the callbacks.

### Anonymous Functions

Most of the time, we won't have named functions as our callbacks. We will usually have unnamed functions, otherwise known as *anonymous functions*.

```js
function process(nums, callback) {
  const arr = [];
  for (const num of nums) {
    arr.push(callback(num));
  }
  return arr;
}

const myNums = [1, 2, 3];
const doubled = process(myNums, function (num) {
  return num * 2;
});

console.log(doubled);
// [ 2, 4, 6 ]
```

Even more often, we will see callbacks as anonymous arrow functions. See if you could rewrite the above as an anonymous arrow function.