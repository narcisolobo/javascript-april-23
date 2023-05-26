# Arrow Functions

Up to now, you've been creating functions using the function declaration syntax. It should be very familiar to you by now:

```js
function add1(num) {
    return num + 1;
}
```

In JavaScript, functions are "first class citizens." This means that functions can be assigned to variables, they can be passed as arguments to other functions, they can be returned from a function, etc.

With that in mind, let's rewrite the above function declaration into a *function expression*. We will assign an anonymous function as the value of a variable named `add1`.

```js
const add1 = function(num) {
    return num + 1;
}
```

This code a bit more robust than the function declaration example. We are declaring a variable using the `const` keyword, which prevents reassignment of the variable and also limits any unwanted side effects of hoisting.

Let's use ES6 arrow function syntax to further simplify this code.

*Note: Each step along the way is a valid "arrow function".*

1. First, we will remove the `function` keyword entirely and place an arrow between the parameter and opening curly brace.


    ```js
    const add1 = (num) => {
        return num + 1;
    }
    ```

2. Next, we will remove the curly braces and the `return` keyword. This is called an implicit return.
   
    ```js
    const add1 = (num) => num + 1;
    ```

3. Finally, we will remove the parentheses around the parameter.
   
    ```js
    const add1 = num => num + 1;
    ```
An arrow function expression is another example of ES6 "syntactic sugar". It provides an alternative to the traditional function expression.

Some rules to keep in mind:

- If the body of your arrow function is more than one line, curly braces and the `return` keyword are required.
  
    ```js
    const add1 = num => {
        num += 1;
        return num;
    }
    ```
- If you have one parameter, the parentheses surrounding it are optional.
   
    ```js
    const add1 = num => num + 1;
    // or
    const add1 = (num) => num + 1;
    ```
- If you have zero parameters or more than one parameter, the parentheses surrounding them are required.
   
    ```js
    const add = (num1, num2) => num1 + num2;
    // or
    const theAnswer = () => 42;
    ```
One thing to watch out for, though—avoid using arrow functions as methods. The `this` keyword may behave in ways in which you don't expect.

```js
const dekku = {
  realName: "Izuku Midoriya",
  display: () => console.log(this.realName)
};

dekku.display();
// undefined
```

Arrow functions don't have their own bindings to `this`.

