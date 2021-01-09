const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const generateJoke = async () => {
  const res = await (
    await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
    })
  ).json();

  joke.textContent = res.joke;
};

generateJoke();

jokeBtn.addEventListener('click', generateJoke);
