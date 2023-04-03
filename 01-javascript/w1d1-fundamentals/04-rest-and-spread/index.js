// The Rest/Spread Operator
// ...

// Rest Operator
const fibonacci = [0, 1, 1, 2, 3, 5, 8];
const [a, b, c, ...fib] = fibonacci;

console.log(`a is: ${a}, b is: ${b}, c is: ${c}, fib is: ${fib}`);

// Spread Operator
// ...

const fibCopy = [...fibonacci];
console.log(fibCopy);

const moreFib = [...fibonacci, 13, 21];
console.log(`moreFib: ${moreFib}`);
console.log(`fibonacci: ${fibonacci}`);

const myGuitar = {
  make: 'Fender',
  model: 'Stratocaster',
  year: 1977,
  color: 'red',
  // nestedObject: {
  //   testKey: 'testValue',
  // }
};

// spread syntax
const stratCopy = { ...myGuitar };
console.log(`stratCopy: ${stratCopy}`);
// console.log(stratCopy.nestedObject.testKey);

// overwrite previous properties
// or even add new ones!
const paintJob = {
  ...myGuitar,
  color: 'blue',
  hasWhammy: false,
}

console.log(`paintJob: ${paintJob.hasWhammy}`);

// rest syntax
const { make, ...strat } = myGuitar;
// console.log(make, strat);



