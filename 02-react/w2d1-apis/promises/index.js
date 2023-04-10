setTimeout(() => {
  console.log('Hello!');
}, 2000);

console.log('Goodbye.');

// Producer
const myPromise = new Promise((resolve, reject) => {
  // executor (producing code
  // that takes some time to complete)
  // eventually produces some result
});

// Consumer

// .then()
// resolve is called, promise is successful

// .catch()
// reject is called, promise is unsuccessful

// .finally()
// handles any cleanup, and it is called whether
// promise is successful or not

myPromise
  .then((result) => {
    console.log('Success: Promise resolved.');
    console.log(result);
  })
  .catch((error) => {
    console.log('Error: Promise rejected.');
    console.log(error);
  });
