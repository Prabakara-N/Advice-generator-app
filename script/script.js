// elements

const noEl = document.querySelector(".number");
const adviceEl = document.querySelector(".advice");
const diceEl = document.querySelector(".dice-img");

// functions
function showAdvice() {
  // api url
  let url = "https://api.adviceslip.com/advice";
  fetch(url).then((resp) => {
    resp.json().then((data) => {

      // getting data
      let advice = data.slip.advice;
      let number = data.slip.id;

      // to show
      noEl.innerText = `ADVICE #${number}`;
      adviceEl.innerText = advice;
    });
  });
}

// event listneres
diceEl.addEventListener("click", showAdvice);

window.addEventListener("load", () => {
  const load = document.querySelector(".spinner");
  load.style.display = "none";
});
