# The Ternary Operator

## What is a Ternary operator?
A ternary operator evaluates a condition and executes a block of code based on the condition.

**Syntax**  
```
variable = (condition) ? expressionTrue : expressionFalse;
```

The ternary operator evaluates the test condition.

If the condition is true, expressionTrue is executed.

If the condition is false, expressionFalse is executed.

The ternary operator takes three operands, hence, the name ternary operator. It is also known as a conditional operator.

Instead of writing:

```js
const time = 20;
let greeting = '';
if (time < 18) {
  greeting = "Good day.";
} else {
  greeting = "Good evening.";
}
console.log(greeting);
// Good evening.
```

You can simply write:

```js
const time = 20;
const greeting = time < 18 ? 'Good day.' : 'Good evening.';
console.log(greeting);
// Good evening.
```

If the line gets too long, we'll sometimes see it broken up to make it more readable like so:

```js
const time = 20;
const greeting = time < 18
  ? 'Good day.'
  : 'Good evening.';

console.log(greeting);
// Good evening.
```

### When to Use Which
If you have more than two outcomes, such as when you are writing an `else if` within your `if` statement, use an `if` statement. Nested ternary operators are difficult to read.

If you have only two outcomes, such as when you are writing an `if` / `else` statement, use the ternary operator. Anything that can fit in a single line of code is a great time to use the ternary because it’s much more compact and easy to read. Ternary operators are also great for when you want to set a value to a given variable.