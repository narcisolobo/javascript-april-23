# The Spread/Rest Operator

ES6 gives us a new operator ... the spread/rest operator. Its function is dependent on its context. Let's take a look at this new operator in its "rest" context.

You can end a destructuring pattern with a rest property, `...rest`. This pattern will store all remaining properties of the array or object into a new array or object.

```js
const fibonacci = [0, 1, 1, 2, 3, 5, 8];
const [a, b, c, ...fib] = fibonacci;

console.log(fib); // [2, 3, 5, 8]
```

Here we destructured the first three values of the array. Then we used the rest property to collect the remaining values of the array into one variable that we called `fib`.

The rest property must be the last in the pattern, and must not have a trailing comma.

With an object:

```js
const myGuitar = {
    make: 'Fender',
    model: 'Stratocaster',
    year: 1977,
    color: 'red'
};
const { make, ...strat } = myGuitar;

console.log(strat);
// { model: 'Stratocaster', year: 1977, color: 'red' }
```

Spread syntax looks exactly like rest syntax. It can be used when all elements from an array or object need to be included in a new array or object.

```js
const fibonacci = [0, 1, 1, 2, 3, 5, 8];
const fibCopy = [...fibonacci];

console.log(fibCopy);
// [0, 1, 1, 2, 3, 5, 8]
```

```js
const myGuitar = {
    make: 'Fender',
    model: 'Stratocaster',
    year: 1977,
    color: 'red'
};

const guitarCopy = {...myGuitar}

console.log(guitarCopy);
// { make: 'Fender', model: 'Stratocaster', year: 1977, color: 'red' }
```
In the above examples, we created a new array and a new object containing the values and properties of the originals. Why is this useful?

Later, we'll be discussing the importance of "pure functions" in the functional programming paradigm. A pure function produces no side effects, which means that it can't mutate arrays or objects in-place.

Making copies of arrays and objects into new arrays and objects using the spread/rest operator becomes a very useful tool when we will inevitably need to update or set the state of some data in our applications.

Let's take a look at some examples.

```js
const fibonacci = [0, 1, 1, 2, 3, 5, 8];
const moreFib = [...fibonacci, 13, 21, 34];

console.log(moreFib);
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci);
// [0, 1, 1, 2, 3, 5, 8]
```

Here, we used spread syntax to copy the original array into a new array, then manually added new fibonacci values. The result is a new array in a new location in memory. The original `fibonacci` array remains unchanged.

We can also "update" key values in objects:

```js
const myGuitar = {
    make: 'Fender',
    model: 'Stratocaster',
    year: 1977,
    color: 'red'
};

const paintJob = {
    ...myGuitar,
    color: 'blue'
}

console.log(paintJob);
// { make: 'Fender', model: 'Stratocaster', year: 1977, color: 'blue' }
console.log(myGuitar);
// { make: 'Fender', model: 'Stratocaster', year: 1977, color: 'red' }
```
Again, the original `myGuitar` object remains unchanged.

Pre-ES6, we would have used the `Object.assign()` method to accomplish the same task. The spread/rest operator is another example of ES6 "syntactic sugar".