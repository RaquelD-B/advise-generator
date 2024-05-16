function displayAdvice(response) {
  new Typewriter(".advice-container", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 10,
    erase: false,
  });
}

function generateAdvice(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#input");
  let adviceElement = document.querySelector(".advice-container");
  adviceElement.classList.remove("hidden");
  adviceElement.innerHTML = `<div class="blink">⌛Generating a good advice about ${inputElement.value}</div>`;
  let apikey = "adf0eeed55ed6d4256b9b3ft0e49cc9o";
  let prompt = `Provide an advice about ${inputElement.value} `;
  let context =
    "You are a resourceful AI assistant that provide good advice on whichever topic.Write a four line advice about the prompt, after that include a signature that is wrapped in an HTML div element at the end of the advice that says: AI advice by Raquel Diaz.";
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

  axios.get(url).then(displayAdvice);
}

let adviceFormElement = document.querySelector("#advice-generator-form");
adviceFormElement.addEventListener("submit", generateAdvice);
