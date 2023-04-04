# Map and Filter Methods

Earlier, we learned that we must not mutate the original arrays or objects when developing applications using functional programming. To that end, let's take a look at two array methods provided by JavaScript that return new objects: `.map()` and `.filter()`.

## The `.map()` Method

The `.map()` method creates a new array populated with the results of calling a provided callback function on every element in the array.

Let's look at some examples:

```js
function doubler(num) {
  return num * 2;
}

const nums = [1, 2, 3];
const numsDoubled = nums.map(doubler);
console.log(numsDoubled);
// [ 2, 4, 6]
```

Here's the same example using an anonymous function:

```js
const nums = [1, 2, 3];
const numsDoubled = nums.map(function(num) {
  return num * 2;
});
console.log(numsDoubled);
// [ 2, 4, 6]
```

Here's another version of the same example using an anonymous arrow function:

```js
const nums = [1, 2, 3];
const numsDoubled = nums.map((num) => num * 2);
console.log(numsDoubled);
// [ 2, 4, 6]
```

If we need access to the index of each element, we can supply the optional second parameter in our callback:

```js
const nums = [1, 2, 3];
const numsDoubled = nums.map((num, i) => {
  console.log(i);
  return num * 2;
});
console.log(numsDoubled);
// 0
// 1
// 2
// [ 2, 4, 6 ]
```

**Syntax:**
```js
array.map(function(currentValue, index, arr), thisValue)
```

| Parameter    | Description                                                                                     |
|--------------|-------------------------------------------------------------------------------------------------|
| function()   | Required. A function to be run for each array element.                                          |
| currentValue | Required. The value of the current element.                                                     |
| index        | Optional. The index of the current element.                                                     |
| arr          | Optional. The array of the current element.                                                     |
| thisValue    | Optional. Default value undefined. A value passed to the function to be used as its `this` value. |