/* 
  Functional Programming
  What is it even?

  Functions in JavaScript are "First Class Citizens".

  - Our Functions Should be "Pure".
    Pure Functions are functions which, given the same input, return the same output. Every time.

    y = 2x
    If x = 2, then y = 4. Always.
    If x = 5, then y = 10. Always.
    if x = 3, then y = 6. Always.

  - Treat Existing Values as Immutable
    Immutable means unchanging. Never modify the existing values.

  - Avoid Side Effects
    React allows to have side effects in our code at certain points: post-render and in the useEffect() hook.
*/

// a pure function
function doubler(number) {
  return number * 2;
}

// .concat() in JavaScript returns a new array

const myArr = [1, 2, 3];
const newArr = myArr.concat(4);
const evenNewerArr = [...newArr, 5];


console.log(`myArr: ${myArr}`);
console.log(`newArr: ${newArr}`);
console.log(`evenNewerArr: ${evenNewerArr}`);


