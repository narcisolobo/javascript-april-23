# Destructuring and the Spread/Rest Operator

## Destructuring

Once we start learning React, we'll be doing a lot of destructuring. The destructuring assignment syntax makes it easy for us to unpack arrays or objects into multiple distinct variables all at once, ad hoc.

Let's take a look at destructuring values from an array:
```js
const fibonacci = [0, 1, 1, 2, 3, 5, 8];
const [a, b, c] = fibonacci;

console.log(a, b, c); // 0, 1, 1
```

Neat, huh? Note that the above could have been done pre-ES6 like so:

```js
var fibonacci = [0, 1, 1, 2, 3];
var a = fibonacci[0];
var b = fibonacci[1];
var c = fibonacci[2];
```

This is why we call the destructuring assignment syntax "syntactic sugar". It turns something tedious and verbose into something more concise and beautiful.

When destructuring arrays and objects, your brackets on the left side must match the datatype being destructured on the right.

When destructuring properties from an object, your variable declaration names must match the object's properties exactly. Here's an example of destructuring properties from an object:

```js
const myGuitar = {
    make: 'Fender',
    model: 'Stratocaster',
    year: 1977,
    color: 'red'
};
const { year, color } = myGuitar;

console.log(year, color); // 1977 red
```

But wait, that's not all! We can now swap two values in a single line. Check this out:

```js
let bowl = 'apples';
let bag = 'oranges';

[bowl, bag] = [bag, bowl];

console.log(bowl, bag) // oranges apples
```
Another example:

```js
const mern = ['MongoDB', 'Express.js', 'React', 'Node.js'];

[mern[0], mern[3]] = [mern[3], mern[0]];

console.log(mern); // ['Node.js', 'Express.js', 'React', 'MongoDB']
```
We can even destructure an array being returned from a function call. You're gonna use this one a lot:

```js
function rickRoll() {
    return ['Never', 'gonna', 'give', 'you', 'up'];
}

const [a, b] = rickRoll();

console.log(a, b); // Never gonna
```