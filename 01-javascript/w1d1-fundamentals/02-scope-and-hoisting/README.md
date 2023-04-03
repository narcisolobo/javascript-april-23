# Scope and Hoisting

## Let and Const
Say goodbye to your old friend, `var`. We will be using `let` and `const` to declare our variables from now on. To discuss why, we will need to introduce two concepts—scope and hoisting.

When declaring variables, we are also defining its *scope*. Scope can be defined as the area in which a variable or function can be accessed, like how the music in your headphones is only available to you. No one else can hear it.

Let's talk about the differences in a variable's scope when using `var`, `let`, and `const`.

### The Scope of `var`
A variable initialized with the `var` keyword can have one of two scopes - *global scope* or *function scope*. This means that if a variable is defined in a loop or in an if statement, it can be accessed outside the block and accidentally redefined, which can lead to a buggy app.

```js
for (var i = 1; i < 5; i++) {
    console.log(i);
}

console.log(i); // 5
```

A variable declared with the `let` or `const` keyword has *block scope*. Block scoped variables cannot be accessed outside of the scope in which they were created. We can no longer inadvertently redefine them, leading to more robust code.

```js
for (let i = 1; i < 5; i++) {
    console.log(i);
}

console.log(i); // ReferenceError: i is not defined
```

## Hoisting

Function declarations and `var` variables are hoisted to the top of their scopes. That means code like this:

```js
console.log(greeting);

var greeting = "¿Cómo estás?"
```
Is interpreted like this:

```js
var greeting;

console.log(greeting);

greeting = "¿Cómo estás?"
```

Variables declared with `let` are also hoisted to the top. However, unlike `var` which is initialized as undefined, `let` variables are not initialized. If you try to use a `let` variable before declaration, you'll get an error, not simply an `undefined`.

Variables declared with `const` are also hoisted, but they must be initialized at the time of declaration.

It may seem like using `var` would be better for developers, as this seems to allow more freedom when coding, but this is not desirable. Imagine debugging code riddled with `var` variables trying to find out which one is `undefined`.

**We want to "fail fast" as developers. We want VS Code to yell at us when we're coding, not at runtime.**

## So Should You Use `let` or `const`? What's the Difference?

**`let` variables can be updated but not re-declared.**

Updating a `let` variable - es bueno:

```js
let dinner = "Chicken Adobo";

dinner = "Pancit"; 
```
Re-declaration of a `let` variable - no bueno:
```js
let dinner = "Chicken Adobo";

let dinner = "Pancit";
// Cannot redeclare block-scoped variable.
```

**`const` variables can neither be updated nor re-declared.**

Updating a `const` variable - no bueno:
```js
const dinner = "Chicken Adobo";

dinner = "Pancit"; 
// TypeError: Assignment to constant variable.
```
Re-declaration of a `const` - no bueno:
```js
const dinner = "Chicken Adobo";

const dinner = "Pancit";
// Cannot redeclare block-scoped variable.
```

---

**Rules of thumb:**

- Use `let` when you know that the value of a variable will change.
- Use `const` for every other variable.
- Do not use `var`.
- ---