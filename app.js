const jokeContent1 = document.querySelector(".joke_content1");
const jokeContect2 = document.querySelector(".joke_content2");
const againButton = document.querySelector(".button1");

const APIurl = "https://v2.jokeapi.dev/joke/Programming";

const fetchJokes = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.type === "single") {
        jokeContent1.innerText = data.joke;
      } else {
        jokeContent1.innerText = data.setup;
        jokeContect2.innerText = data.delivery;
      }
    })
    .catch((error) => console.log(error));
};

fetchJokes(APIurl);

againButton.addEventListener("click", () => {
  fetchJokes(APIurl);
});
