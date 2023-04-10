const jokeContainer = document.getElementById('joke-container');

async function getJoke() {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  console.log(data);
  return data.joke;
}

getJoke().then((joke) => {
  jokeContainer.innerText = joke;
});
