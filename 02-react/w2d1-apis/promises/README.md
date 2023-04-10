# Promises

## "Producing code" is code that can take some time.

## "Consuming code" is code that must wait for the result.

## A Promise is a JavaScript object that links producing code and consuming code.
---

Often, as web developers, we write code that takes some time to execute. We fetch data from external API's or perform CRUD operations in a database. These are called "asynchronous" operations. We can see this asynchronous behavior with the browser's built in `setTimeout()` function.

```js
setTimeout(() => {
  console.log('Hello');
}, 1000);

console.log('Goodbye');
// Goodbye
// Hello (after one second)
```

> We see "Goodbye" in the console before "Hello," even though the it comes after "Hello" in the code.

Often, we have other code that may rely on the outcome of asynchronous operations. Consider the situation where we call an API to fetch some data, and we render that data later. If our request has not completed yet, our app would crash when we tried to render.

Prior to ES6, callbacks were the best solution we had when solving these problems, but there were a lot of challenges with that approach. You may have heard of "callback hell,"  code in which callbacks that were dependent on other callbacks were nested deeper and deeper into each other.

In ES6, Promises became a part of JavaScript. They are JavaScript objects that we can instantiate, and they're a much cleaner and more elegant way to deal with asynchronous operations. A Promise is just what it sounds like -- a promise to deliver a result.

Although we won't be instantiating Promise objects in this stack, we will be using the Fetch API and the Axios library, both of which return Promise objects. Mongoose, our library that we use to talk to our database, will return objects that are like Promises. We should know the basic anatomy of a Promise, and how to instantiate a simple Promise.

A promise is a JavaScript object instantiated with the `new Promise()` constructor. A function is passed to the constructor called the *executor*, and it contains what's called *producing code*—typically some asynchronous operation.

## Producer

```js
const myPromise = new Promise((resolve, reject) => {
    // executor (producing code
    // that takes some time to complete)
    // eventually produces some result
});
```

When the executor obtains the result, it will call one of these callbacks:

- `resolve(value)`
- `reject(error)`

When the executor is finished with the attempt, it calls `resolve` if it was successful or `reject` if there was an error.

The promise object returned by the `new Promise()` constructor has two properties:

- state — initially "pending", then changes to either "fulfilled" when `resolve` is called or "rejected" when `reject` is called.
- result — initially undefined, then changes to value when `resolve(value)` is called or error when `reject(error)` is called.

So the executor eventually moves the Promise to one of these states:

![promise states](./assets/promise-states.png)

## Consumer

Once we have created a Promise object, we have to learn how to handle a resolution or rejection. A consumer function should get notified once a producer's task is settled.

We have three handler methods for use in a consumer function:

- `.then()` - handles the resulting value when the Promise's state is fulfilled.
- `.catch()` - handles the resulting error when the Promise's state is rejected.
- `finally()` - handles any cleanup, like stopping a loader. If used, it runs irrespective of resolution or rejection. We won't be using `finally` in this stack.

A Promise object serves as a link between the executor (the "producing code") and the consuming functions which will receive the result or error. Consuming functions can receive a value or an error by using the methods `.then` and `.catch`.

```js
myPromise
    .then((result) => {
        console.log('Success: Promise resolved.');
        console.log(result);
    })
    .catch((error) => {
        console.log('Error: Promise rejected.');
        console.log(error);
    });
```

Now that we understand the basics of Promises, let's see an example.

```js
const coinTossForHeads = () => {
  return new Promise((resolve, reject) => {
    let coinToss;
    setTimeout(() => {
      const randNum = Math.random();
      if (randNum < 0.5) {
        coinToss = 'Heads';
        resolve(`Success! ${coinToss} was tossed.`);
      } else {
        coinToss = 'Tails';
        reject(`Error! ${coinToss} was tossed.`);
      }
    }, 2000);
  });
};

coinTossForHeads()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

What did we do?
  1. We created an arrow function calle `coinTossForHeads`.
  2. It returns a Promise, instantiated using the `new Promise()` constructor.
  3. Inside the callback, we created a variable called `coinToss`.
  4. Then we called the `setTimeout()` function to simulate code that takes some time to execute, we have a callback function as the first argument, and a time of 2000 milliseconds as the second argument.
  5. Inside the callback, we call `Math.random()` and assign its return value to a variable called `randNum`.
  6. If it's less than 0.5, the `coinToss` is heads, and we call `resolve` with a success message.
  7. If it's greater than or equal to 0.5, the `coinToss` is tails, and we call `reject` with an error message.
  8. Finally, we consume the Promise object by invoking the `coinTossForHeads` function and calling `.then()` to get the success message if we get heads, and `.catch()` to handle the error if we get tails.

## Async/Await
There is an alternate syntax for consuming Promises for those who prefer not to use `.then` and `.catch`. The Async/Await syntax lets us write asynchronous code as if it were synchronous.

To use this syntax, we must label our consuming function as asynchronous with the `async` keyword. Then, any asynchronous operations can be labeled with the `await` keyword. This tells JavaScript it must wait to run the following line.

Below, we are using a `try/catch` block. If our Promise is rejected, control is passed to the `catch` block. This is called error handling.

```js
async function tossCoin() {
  try {
    const result = await coinTossForHeads();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

tossCoin();
```

This syntax is prevalent in JavaScript development. As you can see, it has the added benefit of readability. We "try" something, and if it fails, we "catch" the error. If you prefer this syntax, feel free to use it!