/* 
  Given two strings containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus: solve in O(n) time
*/

const stringA1 = 'ab#c';
const stringB1 = 'ad#c';
const expected1 = true;
// Explanation: Both S and T become "ac"

const stringA2 = 'ab##';
const stringB2 = 'c#d#';
const expected2 = true;
// Explanation: Both S and T become ""

const stringA3 = 'a##c';
const stringB3 = '#a#c';
const expected3 = true;
// Explanation: Both S and T become "c"

const stringA4 = 'a#c';
const stringB4 = 'b';
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} stringA
 * @param {string} stringB
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */
function backspaceStringCompare(stringA, stringB) {
  return getBackspacedStack(stringA) === getBackspacedStack(stringB);
}

function getBackspacedStack(str) {
  const backspacedStack = [];

  for (const char of str) {
    if (char !== '#') {
      backspacedStack.push(char);
    } else if (backspacedStack.length > 0) {
      backspacedStack.pop();
    }
  }

  return backspacedStack.join('');
}

console.log(backspaceStringCompare(stringA1, stringB1));
console.log(backspaceStringCompare(stringA2, stringB2));
console.log(backspaceStringCompare(stringA3, stringB3));
console.log(backspaceStringCompare(stringA4, stringB4));
