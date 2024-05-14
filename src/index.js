function generateAdvice(event) {
  event.preventDefault();

  new Typewriter(".advice-container", {
    strings: ["Drink water"],
    autoStart: true,
    cursor: "",
  });
}
let adviceFormElement = document.querySelector("#advice-generator-form");
adviceFormElement.addEventListener("submit", generateAdvice);
