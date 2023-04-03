// Destructuring

const fibonacci = [0, 1, 1, 2, 3, 5, 8];
const [a, b, c, d] = fibonacci;

console.log(a, b, c, d); // 0, 1, 1, 2

/* var fibonacci = [0, 1, 1, 2, 3];
var a = fibonacci[0];
var b = fibonacci[1];
var c = fibonacci[2]; */

// object literal syntax
const myGuitar = {
  make: 'Fender',
  model: 'Stratocaster',
  year: 1977,
  color: 'red'
};

// alias
const { year, color: myColor } = myGuitar;
console.log(year, myColor);

let bowl = 'apples';
let bag = 'oranges';

[bowl, bag] = [bag, bowl];

console.log(bowl, bag) // oranges apples

const mern = ['MongoDB', 'Express.js', 'React', 'Node.js'];

[ mern[0], mern[3] ] = [ mern[3], mern[0] ];

console.log(mern); // ['Node.js', 'Express.js', 'React', 'MongoDB']