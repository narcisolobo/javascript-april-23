const coinTossForHeads = () => {
  return new Promise((resolve, reject) => {
    let coinToss;

    setTimeout(() => {
      const randNum = Math.random();
      if (randNum < 0.5) {
        coinToss = 'Heads';
        resolve(`Success! ${coinToss} was tossed.`);
      } else {
        coinToss = 'Tails';
        reject(`Error! ${coinToss} was tossed.`);
      }
    }, 2000);
  });
};

coinTossForHeads()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// Async/Await
// we can write asynchronous code as though
// it was synchronous
async function tossCoin() {
  try {
    const result = await coinTossForHeads();
    console.log(result);
  } catch (err) {
    console.error(err);
  } finally {
    console.log('done');
  }
}

tossCoin();
