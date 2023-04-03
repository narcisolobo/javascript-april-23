# Const and Let
What are they even?

Say goodbye to our old friend var. :'(

Const and let are new keywords that allow us to create variables.

1. More robust.

Hoisting of var
With the var keyword, the variable has one of two possible scopes:

1. Global Scope
2. Function Scope

```js
console.log(greeting);

var greeting = "¿Cómo estás?"
```

```js
var greeting;

console.log(greeting);

greeting = "¿Cómo estás?"
``` 