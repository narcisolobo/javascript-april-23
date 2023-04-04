/* 
  The Map and Filter Methods

  The map method return a new array after performing the same task
  on every element in the array.

  The filter method returns a new array after testing each element
  in the array.
*/

const groceries = ['pearl onions', 'cremini mushrooms', 'thyme'];
const groceryList = groceries.map((item) => `<li>${item}</li>`);

console.log(groceryList);

const values = [1, 2, 3, 4, 5];

const cubes = values.map(function (val) {
  return val ** 3;
});

const doubles = values.map((banana, apple) => {
  console.log(apple);
  return banana * 2;
});

/* console.log((cubes));

const myArr = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10];

const odds = myArr.filter((val) => val % 2 === 1);
console.log(odds); */
