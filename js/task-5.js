const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
inputEl.addEventListener(`input`, inputChange);
function inputChange(event) {
  if (outputEl.textContent.length > 0) {
    outputEl.textContent = event.currentTarget.value;
  } else {
    outputEl.textContent = `незнакомец`;
  }
}
